import { WordWithScores } from "./interfaces";

export function generateID() {
	return Date.now();
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
