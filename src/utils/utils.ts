import { WordWithScores } from "sharedInterfaces";

export function generateID() {
	return Date.now() + Math.random();
}

export function getFirstKey(object: { [meaning: string]: number }): string {
	return Object.keys(object)[0];
}

export const emptyWord: WordWithScores = {
	id: generateID(),
	english: { "": 0 },
	hungarian: { "": 0 },
	exampleSentences: [""],
	type: "word",
	ownerId: 0,
	memoryLevel: 0,
	actualScore: 0,
	finalScore: 0,
	favourite: false,
	notes: null,
	deletionDate: null,
};
