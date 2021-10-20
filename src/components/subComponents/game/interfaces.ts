import { WordWithScores } from "./../../../utils/interfaces";
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

export interface WordInGame extends WordWithScores {
	wordToAsk: string;
	wordToAnswer: string;
	mainWordType: LanguageType;
	tagColors: TagColor[];
}
