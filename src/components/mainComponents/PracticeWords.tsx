import { Fragment, useState } from "react";

/* Styles */
import { colors } from "src/utils/colors";
import styled from "styled-components";

const WordChooserContainer = styled.div`
	display: flex;
	flex: 1;
	min-height: 0;
	min-width: 0;
	border: 1px solid red;
`;

const Question = styled.div`
	font-weight: 700;
	font-size: 3rem;
`;

const WordCard = styled.div`
	display: flex;
	flex: 1;
	min-width: 0;
	min-height: 0;
	padding: 32px;
	background: ${colors.blockBackground};
	border-radius: 24px;
`;
interface WordChoices {
	question: string;
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

const dummyData: gameData = {
	multipleChoiceGame: [
		{
			question: "What is the correct translation of the word: PINK?",
			correctAnswer: "rózsaszín",
			wrongAnswer1: "piros",
			wrongAnswer2: "barna",
			wrongAnswer3: "kék",
		},
		{
			question: "What is the correct translation of the word: GRUELING?",
			correctAnswer: "fárasztó",
			wrongAnswer1: "álmos",
			wrongAnswer2: "kabát",
			wrongAnswer3: "macska",
		},
		{
			question: "What is the correct translation of the word: PRAM?",
			correctAnswer: "babakocsi",
			wrongAnswer1: "patkány",
			wrongAnswer2: "csicska",
			wrongAnswer3: "mókua",
		},
	],
	answerTypingGame: [
		{ english: "willing", hungarianMeanings: ["hajlandó, készséges, önkéntes"] },
		{ english: "assertion", hungarianMeanings: ["állítás", "kijelentés", "követelés"] },
		{ english: "adamant", hungarianMeanings: ["hajthatatlan", "gyémántkeménységű anyag"] },
	],
	recognizeByTheRuleGame: [
		{ english: "puppy", definitions: ["A young dog.", "A cheeky or arrogant boy or young man.", "A person or thing of a specified kind."] },
		{
			english: "cringing",
			definitions: [
				"Bent in fear or apprehension.",
				"Obedient or attentive to an excessive or servile degree.",
				"Experiencing embarrassment or disgust.",
			],
		},
		{ english: "unwed", definitions: ["Not married"] },
	],
};

export default function PracticeWords() {
	const [activeRiddle, setActiveRiddle] = useState<WordChoices | WordRelation | WordDefinition>();
	return (
		<WordChooserContainer>
			{dummyData.multipleChoiceGame.map((riddle: WordChoices) => (
				<Fragment>
					<Question>{riddle.question}</Question>
					<WordCard>{riddle.correctAnswer}</WordCard>
					<WordCard>{riddle.wrongAnswer1}</WordCard>
					<WordCard>{riddle.wrongAnswer2}</WordCard>
					<WordCard>{riddle.wrongAnswer3}</WordCard>
				</Fragment>
			))}
		</WordChooserContainer>
	);
}
