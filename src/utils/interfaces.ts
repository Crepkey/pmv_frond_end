export interface Owner {
	name: string;
	sex: "male" | "female";
	id: number;
}

export type WordType = "word" | "expression";
export type LanguageType = "english" | "hungarian";

export interface WordStatistics {
	english: number;
	hungarian: number[];
}
export interface Word {
	id: number;
	ownerId: number;
	english: string;
	hungarian: string[];
	sentences: string[];
	notes: string | null;
	type: WordType;
	favourite: boolean;
	deletionDate: Date | null;
	memoryLevel: number;
}
export interface WordWithScores extends Word {
	actualScore: number;
	scoreToAchieve: number;
	statistics: WordStatistics;
}
export interface Points {
	[ownerId: number]: number;
}
