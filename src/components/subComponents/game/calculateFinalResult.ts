// Interfaces
import { Word } from "../../../utils/interfaces";
import { GameStatistics } from "./interfaces";

// Utils
import get from "lodash/get";
import set from "lodash/set";
import round from "lodash/round";
import cloneDeep from "lodash/cloneDeep";

function calculateScoresToSave(word: Word, gameStatistics: GameStatistics) {
	const englishScore = gameStatistics.english ? 1 : 0;
	const hungarianScore = gameStatistics.hungarian.filter((s: boolean) => s === true).length;
	const scoreNow = englishScore + hungarianScore;
	const actualScore = word.actualScore + scoreNow;

	return { actualScore, memoryLevel: round((actualScore / word.scoreToAchieve) * 100, 2) };
}

export const emptyStatistics = { english: false, hungarian: [] };

function calculateStatisticsToSave(word: Word, gameStatistics: GameStatistics) {
	const statisticsToSave = cloneDeep(word.statistics) || emptyStatistics;

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

function calculateDeletionDateToSave(word: Word, actualScore: number) {
	// set deletionDate, if you don't have to practice this word anymore
	if (actualScore > word.scoreToAchieve) {
		return new Date();
	}
	return null;
}

export function calculateDataToSave(word: Word, gameStatistics: GameStatistics) {
	const { actualScore, memoryLevel } = calculateScoresToSave(word, gameStatistics);
	const statisticsToSave = calculateStatisticsToSave(word, gameStatistics);
	const deletionDate = calculateDeletionDateToSave(word, actualScore);

	// REFACTOR we could move most of this logic to backend
	// TODO save to database (it would be better, if we didn't need the whole word, just the modified columns)
	return { ...word, actualScore, memoryLevel, statistics: statisticsToSave, deletionDate };
}
