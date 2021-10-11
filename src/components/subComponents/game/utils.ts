// Interfaces
import { Word } from "../../../utils/interfaces";

// Utils
import get from "lodash/get";
import sortBy from "lodash/sortBy";

// Styles
import { colors } from "../../../utils/colors";

type LanguageType = "english" | "hungarian";
interface KnowledgeLevel {
	language: LanguageType;
	index?: number;
	point: number;
}

export interface TagColor extends KnowledgeLevel {
	color: string;
}

export function calculateKnowledgeLevels(word: Word) {
	const knowledgeLevels: KnowledgeLevel[] = [];

	knowledgeLevels.push({ language: "english", point: get(word, "statistics.english", 0) });
	get(word, "statistics.hungarian", []).forEach((hunLevel: number, index: number) => {
		knowledgeLevels.push({ language: "hungarian", point: hunLevel, index });
	});

	return knowledgeLevels;
}

/* Calculation:
The word that the player will be asked is the opposite of the weakest word (which is the main word):
A) If the English word contains your weakest knowledge point, the 'word to ask' will be your weakest Hungarian meaning 
    (your opponent will ask that), and you will get 1 point, if you know the English word
B) If one of the Hungarian meanings have your weakest knowledge point, the 'word to ask' will be the English translation
    (your opponent will ask that), and you will get 1 point, if you know that specific Hungarian meaning which is your weakest point

Of course you can get 1 more point for the other Hungarian meanings and 1 more for a correct example sentence with the chosen grammatical structure
 */
export function calculateWordToAsk(word: Word): { wordToAsk: string; wordToAnswer: string; mainWordType: LanguageType } {
	const sortedLevels = sortBy(calculateKnowledgeLevels(word), "point");

	if (sortedLevels[0]?.language === "english") {
		const weakestHunIndex = get(sortedLevels, [1, "index"], 0);
		return { wordToAsk: get(word, ["hungarian", weakestHunIndex], ""), wordToAnswer: word.english, mainWordType: "english" };
	} else {
		const weakestHunIndex = get(sortedLevels, [0, "index"], 0);
		return { wordToAsk: word.english, wordToAnswer: get(word, ["hungarian", weakestHunIndex], ""), mainWordType: "hungarian" };
	}
}

/* Color calculation: 
1) If the word is a new word, everything will be blue.
2) If the word is NOT a new word, we sort all the meanings (english and hungarian as well) by the knowledge level.
3) The weakest will be red, the strongest will be green, everything else in the middle will be blue.
4) If the weakest or strongest level contains more meanings, all of them will recieve that specific color
*/
export function getColorsByKnowledge(word: Word): TagColor[] {
	const knowledgeLevels = calculateKnowledgeLevels(word);

	if (word.memoryLevel === 0) {
		return knowledgeLevels.map((level: KnowledgeLevel) => {
			return { ...level, color: colors.progressBlue };
		});
	}

	const sortedLevels = sortBy(knowledgeLevels, "point");
	const weakestKnowledge = get(sortedLevels, [0, "point"], 0);
	const strongestKnowledge = get(sortedLevels, [sortedLevels.length - 1, "point"], 0);

	return sortedLevels.map((level: KnowledgeLevel) => {
		let color = colors.progressBlue;
		if (level.point === weakestKnowledge) color = colors.progressRed;
		if (level.point === strongestKnowledge) color = colors.progressGreen;
		return { ...level, color };
	});
}
