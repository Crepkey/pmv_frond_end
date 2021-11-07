export interface User {
	name: string;
	gender: "male" | "female";
	id: number;
}

export type WordOperationType = "edit" | "delete" | "restore";
export interface Points {
	[ownerId: number]: number;
}

export interface Usage {
	description: string;
	example: string;
}
export interface GrammaticalStructure {
	id: number;
	title: string;
	subtitle: string;
	forming: string;
	notes: string | null;
	basicSentences: string[];
	realLifeUsages: Usage[];
}

export type ColorCodeType = `rgba(${number}, ${number}, ${number}, ${number})`;

export interface Toast {
	id: number;
	type: "info" | "success" | "warning" | "error";
	title: string;
	details: string;
}
