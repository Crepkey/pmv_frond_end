import { Fragment, useState } from "react";
import { Word } from "sharedInterfaces";

/* Utils */
import random from "lodash/random";

/* Styles */
import { colors } from "src/utils/colors";
import { generateID } from "src/utils/utils";
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

const NextButton = styled.button`
	display: inline-block;
	cursor: pointer;
	color: ${colors.buttonFont};
	font-size: 1rem;
	font-weight: bold;
	padding: 6px 24px;
	text-decoration: none;
	border-radius: 16px;
	border: none;
	background-color: ${colors.acceptButtonBackground};
	:hover {
		background: linear-gradient(to bottom, ${colors.acceptButtonGradientLight} 5%, ${colors.acceptButtonGradientDark} 100%);
		background-color: ${colors.acceptButtonGradientLight};
	}
	:active {
		position: relative;
		top: 1px;
	}
`;

type GameTypes = "multiple choice game" | "type the answer game" | "recognize it by the rule game";
interface DummyData {
	words: Word[];
	gameTypes: GameTypes[]; // These describe the game types for every rounds
	wrongAnswers: string[]; // As many wrong answers as possible theoretically
}

const dummyData: DummyData = {
	words: [
		{
			id: generateID(),
			english: "Unwed",
			hungarian: ["hajadon", "nőtlen"],
			exampleSentences: [
				"What would have happened to those children of unwed teenage mothers if they hadn't been adopted?",
				"Even over the past two years, it is estimated there are 18,000 fewer nuclear family homes, including both married and unwed parents",
			],
			type: "word",
			ownerId: 1,
			memoryLevel: 6,
			favourite: false,
			notes: "Petra is unwed",
			deletionDate: null,
		},
		{
			id: generateID(),
			english: "Adamant",
			hungarian: ["hajthatatlan", "gyémántkeménységű anyag"],
			exampleSentences: [
				"He is adamant that he is not going to resign",
				"We tried to persuade them to let us show the film at Edinburgh, but Venice's new director was adamant that we couldn't",
			],
			type: "word",
			ownerId: 1,
			memoryLevel: 6,
			favourite: false,
			notes: "Petra is unwed",
			deletionDate: null,
		},
		{
			id: generateID(),
			english: "Skillful",
			hungarian: ["ügyes", "gyakorlott"],
			exampleSentences: [
				"You are brilliant, active and skillful in professional ventures and gain repute in your field of activity",
				"He was also a robust, competitive and skillful GAA player in both hurling and football",
			],
			type: "word",
			ownerId: 1,
			memoryLevel: 6,
			favourite: false,
			notes: "Petra is unwed",
			deletionDate: null,
		},
	],
	gameTypes: ["multiple choice game", "type the answer game", "recognize it by the rule game"],
	wrongAnswers: ["barna", "macska", "erkély", "szombat", "alma", "dörzsölődés", "éhezés", "mosoly", "óratorony"],
};

export default function PracticeWords() {
	const [actualRiddle, setActualRiddle] = useState<number>(0);

	function generateRandomAnswers(correctWord: Word) {
		const correctAnswerPosition: number = random(3); /* FIXME: HARD CODED!!! It will be dynamically changed*/
		const answers: string[] = [];

		while (answers.length !== 4) {
			const randomIndex = random(dummyData.wrongAnswers.length - 1);
			const randomWrongWord = dummyData.wrongAnswers[randomIndex];
			if (answers.includes(randomWrongWord)) continue;
			answers.push(randomWrongWord);
		}

		answers[correctAnswerPosition] = correctWord.hungarian[random(correctWord.hungarian.length - 1)];
		return answers;
	}

	function renderGameElements(index: number) {
		const currentGameType: GameTypes = dummyData.gameTypes[index];
		const currentWord: Word = dummyData.words[index];

		switch (currentGameType) {
			case "multiple choice game":
				const answers: string[] = generateRandomAnswers(currentWord);
				return (
					<Fragment key={currentWord.id}>
						<Question>{`What is the correct translation of the word: ${currentWord.english}`}</Question>
						<WordChooserContainer>
							{answers.map((answer: string) => (
								<WordCard key={answer}>{answer}</WordCard>
							))}
						</WordChooserContainer>
					</Fragment>
				);
			case "type the answer game":
				break;
			case "recognize it by the rule game":
				break;
		}
	}

	return (
		<Fragment>
			{renderGameElements(actualRiddle)}
			<NextButton onClick={() => setActualRiddle((prevRiddle) => prevRiddle + 1)}>Next question</NextButton>
		</Fragment>
	);
}
