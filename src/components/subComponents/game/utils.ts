// Interfaces
import { Word } from "../../../utils/interfaces";

// Utils
import get from "lodash/get";
import minBy from "lodash/minBy";
import sortBy from "lodash/sortBy";

interface KnowledgeLevel {
	language: "english" | "hungarian";
	level: number;
	index?: number;
}

export function calculateKnowledgeLevels(word: Word) {
	const knowledgeLevels: KnowledgeLevel[] = [];

	knowledgeLevels.push({ language: "english", level: get(word, "statistics.english", 0) });
	get(word, "statistics.hungarian", []).forEach((hunLevel: number, index: number) => {
		knowledgeLevels.push({ language: "hungarian", level: hunLevel, index });
	});

	return knowledgeLevels;
}

export function calculateWeakestKnowledge(word: Word) {
	return minBy(calculateKnowledgeLevels(word), "level");
}

/* Color calculation: 
1) If the word is a new word, everything will be blue.
2) If the word is NOT a new word, we sort all the meanings (english and hungarian as well) by the knowledge level.
3) The weakest will be red, the strongest will be green, everything else in the middle will be blue.
4) If the weakest or strongest level contains more meanings, all of them will recieve that specific color
*/
export function getColorsByKnowledge(word: Word) {
	const sortedLevels = sortBy(calculateKnowledgeLevels(word), "level");
	console.log(sortedLevels);
}
