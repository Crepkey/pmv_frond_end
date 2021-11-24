import { Fragment, useState } from "react";
import { Word } from "sharedInterfaces";

/* Utils */
import random from "lodash/random";

/* Components */
import Scoreboard from "../subComponents/practiceWords/Scoreboard";

/* Styles */
import { colors } from "src/utils/colors";
import { generateID } from "src/utils/utils";
import styled from "styled-components";

const WordChooserContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	flex-wrap: wrap;
	min-height: 0;
	min-width: 0;
	padding: 12px;
	overflow: scroll;
`;

const Question = styled.div`
	padding: 24px;
	font-weight: 700;
	font-size: 2rem;
`;

/* TODO: Better margin handling for WordCard and WordChooserContainer */
const WordCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	min-height: 25%;
	min-width: 40%;
	padding: 32px;
	margin: 12px;
	font-size: 1.5rem;
	font-weight: 600;
	text-transform: uppercase;
	border-radius: 24px;
	background: ${colors.blockBackground};
	border: 3px rgba(0, 0, 0, 0) solid;
	:hover {
		border: 3px ${colors.activeBorder} solid;
	}
`;

const NextButton = styled.button`
	display: inline-block;
	cursor: pointer;
	color: ${colors.buttonFont};
	font-size: 1rem;
	font-weight: bold;
	padding: 6px 24px;
	margin: 24px;
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

type GameTypes = "multiple choice game" | "type the answer game" | "recognize it by the definition game";

interface EvaluatedAnswer {
	question: string;
	answer: string;
	success: boolean;
}

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
			definitions: ["Not married"],
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
			definitions: [
				"Refusing to be persuaded or to change one's mind.",
				"A legendary rock or mineral to which many, often contradictory, properties were attributed, formerly associated with diamond or lodestone.",
			],
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
			definitions: ["Having or showing skill."],
			deletionDate: null,
		},
	],
	gameTypes: ["multiple choice game", "type the answer game", "recognize it by the definition game"],
	wrongAnswers: ["barna", "macska", "erkély", "szombat", "alma", "dörzsölődés", "éhezés", "mosoly", "óratorony"],
};

export default function PracticeWords() {
	const [actualRiddle, setActualRiddle] = useState<number>(0);
	const [answer, setAnswer] = useState<string>("");
	const [evaluatedAnswers, setEvaluatedAsnwers] = useState<EvaluatedAnswer[]>([]);

	console.log(evaluatedAnswers);

	function generateRandomAnswers(correctWord: Word) {
		const correctAnswerPosition: number = random(3);
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

	function evaluateAnswer() {
		const rightAnswers: string[] = dummyData.words[actualRiddle].hungarian;
		const currentAnswers: EvaluatedAnswer[] = [...evaluatedAnswers];

		if (rightAnswers.includes(answer)) {
			currentAnswers.push({
				question: dummyData.words[actualRiddle].english,
				answer,
				success: true,
			});
		} else {
			currentAnswers.push({
				question: dummyData.words[actualRiddle].english,
				answer,
				success: false,
			});
		}

		setAnswer("");
		setEvaluatedAsnwers(currentAnswers);
	}

	function renderGameElements() {
		const currentGameType: GameTypes = dummyData.gameTypes[actualRiddle];
		const currentWord: Word = dummyData.words[actualRiddle];

		switch (currentGameType) {
			case "multiple choice game":
				const answers: string[] = generateRandomAnswers(currentWord);
				return (
					<Fragment>
						<Question>{`What is the correct translation of the word: ${currentWord.english}?`}</Question>
						<WordChooserContainer>
							{answers.map((answer: string) => (
								<WordCard
									key={answer}
									onClick={() => {
										setAnswer(answer);
									}}>
									{answer}
								</WordCard>
							))}
						</WordChooserContainer>
					</Fragment>
				);
			case "type the answer game":
				return (
					<Fragment>
						<Question>{`Type one of the correct translations of this word: ${currentWord.english}?`}</Question>
						<input
							placeholder="Type your answer here"
							value={answer}
							onChange={(event) => {
								setAnswer(event.target.value);
							}}></input>
					</Fragment>
				);

			case "recognize it by the definition game":
				const possibleAnswers: string[] = generateRandomAnswers(currentWord);
				return (
					<Fragment>
						<Question>{`Choose the word which belongs to this defininition: ${
							currentWord.definitions[random(currentWord.definitions.length - 1)]
						}?`}</Question>
						<WordChooserContainer>
							{possibleAnswers.map((answer: string) => (
								<WordCard
									key={answer}
									onClick={() => {
										setAnswer(answer);
									}}>
									{answer}
								</WordCard>
							))}
						</WordChooserContainer>
					</Fragment>
				);
		}
	}

	if (actualRiddle > dummyData.gameTypes.length - 1) {
		return <Scoreboard />;
	}

	return (
		<Fragment>
			{renderGameElements()}
			<NextButton
				onClick={() => {
					evaluateAnswer();
					setActualRiddle((prevRiddle) => prevRiddle + 1);
				}}>
				Next question
			</NextButton>
		</Fragment>
	);
}
