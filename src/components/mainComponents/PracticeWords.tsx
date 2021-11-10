import { Word } from "sharedInterfaces";

interface WordChoices {
	correctAnswer: string;
	wrongAnswer1: string;
	wrongAnswer2: string;
	wrongAnswer3: string;
}
interface WordRelation {
	english: string;
	hungarianMeanings: string[];
}

interface WordDefinition {
	english: string;
	definitions: string[];
}

interface gameData {
	multipleChoiceGame: WordChoices[];
	answerTypingGame: WordRelation[];
	recognizeByTheRuleGame: WordDefinition[];
}

const dummyData = {
	multipleChoiceGame: [{}],
	answerTypingGame: [{}],
	recognizeByTheRuleGame: [{}],
};

export default function PracticeWords() {
	return <div>VALAMI</div>;
}
