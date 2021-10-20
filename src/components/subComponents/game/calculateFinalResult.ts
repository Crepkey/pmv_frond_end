// Interfaces
import { WordWithScores, WordStatistics } from "../../../utils/interfaces";
import { GameStatistics, WordInGame } from "./interfaces";

// Utils
import get from "lodash/get";
import set from "lodash/set";
import round from "lodash/round";
import cloneDeep from "lodash/cloneDeep";

function calculateScoresToSave(word: WordWithScores, gameStatistics: GameStatistics): { actualScore: number; memoryLevel: number } {
	const englishScore = gameStatistics.english ? 1 : 0;
	const hungarianScore = gameStatistics.hungarian.filter((s: boolean) => s === true).length;
	const scoreNow = englishScore + hungarianScore;
	const actualScore = word.actualScore + scoreNow;

	return { actualScore, memoryLevel: round((actualScore / word.finalScore) * 100, 2) };
}

function calculateStatisticsToSave(word: WordWithScores, gameStatistics: GameStatistics): WordStatistics {
	const statisticsToSave = cloneDeep(word.statistics) || { english: 0, hungarian: word.hungarian.map(() => 0) };

	function checkAndSetLanguageStatistics(path: any[]) {
		if (get(gameStatistics, path, false) === true) {
			const languageLevel = get(statisticsToSave, path, 0);
			set(statisticsToSave, path, languageLevel + 1);
		}
	}

	checkAndSetLanguageStatistics(["english"]);

	word.hungarian.forEach((h: string, index: number) => {
		checkAndSetLanguageStatistics(["hungarian", index]);
	});

	return statisticsToSave;
}

function calculateDeletionDateToSave(word: WordWithScores, actualScore: number): Date | null {
	// set deletionDate, if you don't have to practice this word anymore
	if (actualScore > word.finalScore) {
		return new Date();
	}
	return null;
}

export function calculateDataToSave(word: WordWithScores, gameStatistics: GameStatistics): WordWithScores {
	const { actualScore, memoryLevel } = calculateScoresToSave(word, gameStatistics);
	const statisticsToSave = calculateStatisticsToSave(word, gameStatistics);
	const deletionDate = calculateDeletionDateToSave(word, actualScore);

	// REFACTOR we could move most of this logic to backend
	return { ...word, actualScore, memoryLevel, statistics: statisticsToSave, deletionDate };
}

function getMainWordKnown(word: WordInGame, gameStatistics: GameStatistics) {
	if (word.wordToAnswer === word.english) {
		if (gameStatistics.english === true) return true;
	} else {
		const indexOfWordToAnswer = word.hungarian.findIndex((meaning: string) => meaning === word.wordToAnswer);
		if (get(gameStatistics, ["hungarian", indexOfWordToAnswer]) === true) return true;
	}
	return false;
}

export function calculateGamePoints(word: WordInGame, gameStatistics: GameStatistics, correctGrammar: boolean): number {
	let earnedPoints = 0;
	const mainWordKnown = getMainWordKnown(word, gameStatistics);
	const hungarianScore = gameStatistics.hungarian.filter((s: boolean) => s === true).length;

	// Player knew the main word
	if (mainWordKnown) earnedPoints += 1;

	// Player knew all other Hungarian meanings
	let scoreToCompare = word.hungarian.length - 1;
	if (word.mainWordType === "hungarian" && mainWordKnown) {
		scoreToCompare += 1;
	}
	if (hungarianScore === scoreToCompare) earnedPoints += 1;

	// Player used a correct grammatical structure in the example sentence
	if (correctGrammar) earnedPoints += 1;

	return earnedPoints;
}
