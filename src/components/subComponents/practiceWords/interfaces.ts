export interface EvaluatedAnswer {
	id: `${number}_riddle`;
	question: string;
	answer: string;
	possibleAnswers: string[];
	result: boolean;
}
