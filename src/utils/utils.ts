import { WordWithScores } from "sharedInterfaces";

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
	definitions: [],
	deletionDate: null,
	statistics: {
		english: 0,
		hungarian: [],
	},
};
