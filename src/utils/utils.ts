import { WordWithScores } from "./interfaces";

/* TODO: We need a stable solution for ID generation for react keys */
export function generateID() {
	return Date.now() + Math.random();
}

export const emptyWord: WordWithScores = {
	id: generateID(),
	english: "",
	hungarian: [""],
	sentences: [""],
	type: "word",
	ownerId: 0,
	memoryLevel: 0,
	actualScore: 0,
	scoreToAchieve: 0,
	favourite: false,
	notes: null,
	deletionDate: null,
	statistics: {
		english: 0,
		hungarian: [],
	},
};
