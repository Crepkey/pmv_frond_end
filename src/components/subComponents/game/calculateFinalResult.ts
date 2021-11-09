// Interfaces
import { WordInGame } from "./interfaces";
import { GameStatistics } from "sharedInterfaces";

// Utils
import get from "lodash/get";
import { getFirstKey } from "src/utils/utils";

function getMainWordKnown(word: WordInGame, gameStatistics: GameStatistics) {
	if (word.wordToAnswer === getFirstKey(word.english)) {
		if (gameStatistics.english === true) return true;
	} else {
		return get(gameStatistics, ["hungarian", word.wordToAnswer], false);
	}
}

export function calculateGamePoints(word: WordInGame, gameStatistics: GameStatistics, correctGrammar: boolean): number {
	let earnedPoints = 0;
	const mainWordKnown = getMainWordKnown(word, gameStatistics);
	const hungarianScore = Object.values(gameStatistics.hungarian).filter((s: boolean) => s === true).length;

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
