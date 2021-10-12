import { LanguageType } from "../../../utils/interfaces";

export interface KnowledgeLevel {
	language: LanguageType;
	index?: number;
	point: number;
}

export interface TagColor extends KnowledgeLevel {
	color: string;
}

export interface GameStatistics {
	english: boolean;
	hungarian: boolean[];
}
