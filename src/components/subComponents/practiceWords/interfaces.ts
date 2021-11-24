export interface EvaluatedAnswer {
	id: number;
	question: string;
	answer: string;
	possibleAnswers: string[];
	result: boolean;
}
