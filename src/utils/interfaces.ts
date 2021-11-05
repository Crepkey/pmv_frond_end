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

export interface ServerError {
	error: string;
	message: string;
	stack: string;
	detail: string;
	table: string;
}

export type ColorCodeType = `rgba(${number}, ${number}, ${number}, ${number})`;

export interface Toast {
	id: number;
	type: "info" | "warning" | "error";
	title: string;
	details: string;
}
