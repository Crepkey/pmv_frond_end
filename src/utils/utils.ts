import { WordWithScores } from "sharedInterfaces";
import { colors } from "./colors";

export function calculateRowBackground(index: number) {
	if (index % 2 === 0) return colors.rowBackgroundLight;
	return colors.rowBackgroundDark;
}

export function generateID() {
	return Date.now() + Math.random();
}

export const emptyWord: WordWithScores = {
	id: generateID(),
	english: "",
	hungarian: [""],
	exampleSentences: [""],
	type: "word",
	ownerId: 0,
	memoryLevel: 0,
	actualScore: 0,
	finalScore: 0,
	favourite: false,
	notes: null,
	definitions: [""],
	deletionDate: null,
	statistics: {
		english: 0,
		hungarian: [],
	},
};
