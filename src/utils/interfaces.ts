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
	ownerId: number;
	english: string;
	hungarian: string[];
	sentences: string[];
	notes?: string;
	type?: WordType;
	favourite?: boolean;
	memoryLevel: number;

	deletionDate?: Date | null;
	actualScore: number;
	scoreToAchieve: number;
	statistics?: WordStatistics;
}

export interface Points {
	[ownerId: number]: number;
}

export interface ExtendedWord extends Word {
	id: number;
	active: boolean;
	deletionDate?: Date;
}
