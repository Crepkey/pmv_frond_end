import { Fragment, useContext, useEffect, useState } from "react";

/* Context */
import { AppContext } from "src/AppContext";

/* Utils */
import random from "lodash/random";
import { generateID } from "src/utils/utils";

/* Components */
import Scoreboard from "../subComponents/practiceWords/Scoreboard";

/* Interfaces */
import { ServerError, Word, WordPractice, WordPracticeType } from "sharedInterfaces";
import { EvaluatedAnswer } from "../subComponents/practiceWords/interfaces";

/* Styles */
import { colors } from "src/utils/colors";
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

const WordCard = styled.div<{ selected: boolean }>`
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
	border: ${({ selected }) => (selected ? `3px ${colors.activeBorder} solid` : "3px rgba(0, 0, 0, 0) solid")};
	background: ${colors.blockBackground};

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

export default function PracticeWords() {
	const [quizData, setQuizData] = useState<WordPractice>();
	const [numberOfActualQuiz, setNumberOfActualQuiz] = useState<number>(0);
	const [answersOfActualQuiz, setAnswersOfActualQuiz] = useState<string[]>([]);
	const [answerOfUser, setAnswerOfUser] = useState<string>("");
	const [actualQuestionText, setActualQuestionText] = useState<string>();
	const [evaluatedAnswers, setEvaluatedAsnwers] = useState<EvaluatedAnswer[]>([]);

	/* Context */
	const { createToast, activeUser } = useContext(AppContext);

	useEffect(() => {
		loadQuizData();
	}, []);

	useEffect(() => {
		if (!quizData || numberOfActualQuiz > quizData.words.length - 1) return;
		setActualQuestionText(createQuestion(quizData, numberOfActualQuiz));
		generateRandomAnswers(quizData, numberOfActualQuiz);
	}, [numberOfActualQuiz]);

	async function loadQuizData() {
		const response: Response = await fetch(`/practice/words/${activeUser}`);

		if (response.status === 204) {
			createToast({
				id: generateID(),
				type: "error",
				title: "Content Error",
				details: `There are no stored words for the practice`,
			});
			return;
		}

		const parsedResponse: WordPractice | ServerError = await response.json();

		if ("error" in parsedResponse) {
			createToast({
				id: generateID(),
				type: "error",
				title: "Server Error",
				details: `An error occurred while processing the request: ${parsedResponse.message}`,
			});
			return;
		}
		setActualQuestionText(createQuestion(parsedResponse, 0));
		generateRandomAnswers(parsedResponse, 0);
		setNumberOfActualQuiz(0);
		setQuizData(parsedResponse);
	}

	function generatePracticeTypes() {
		const wordPracticeBasicTypes: WordPracticeType[] = ["multiple choice game", "type the answer game", "recognize it by the definition game"];
		const practiceTypes: WordPracticeType[] = [];
		for (let i = 10; i > 0; i--) {
			const practiceType = wordPracticeBasicTypes[random(2)];
			practiceTypes.push(practiceType);
		}
		return practiceTypes;
	}

	function restartQuiz() {
		if (quizData) {
			const currentQuizData: WordPractice = { ...quizData };
			currentQuizData.practiceTypes = generatePracticeTypes();
			setQuizData(currentQuizData);
			setNumberOfActualQuiz(0);
		}
	}

	function generateRandomAnswers(quizData: WordPractice, numberOfActualQuiz: number) {
		if (quizData.practiceTypes[numberOfActualQuiz] === "type the answer game") return;

		const correctAnswer: Word = quizData.words[numberOfActualQuiz];
		const correctAnswerPosition: number = random(3);
		const answers: string[] = [];

		while (answers.length !== 4) {
			const randomIndex = random(quizData.wrongAnswers.length - 1);
			const randomWord = quizData.wrongAnswers[randomIndex];
			if (answers.includes(randomWord) || correctAnswer.hungarian.includes(randomWord)) continue;
			answers.push(randomWord);
		}

		answers[correctAnswerPosition] = correctAnswer.hungarian[random(correctAnswer.hungarian.length - 1)];
		setAnswersOfActualQuiz(answers);
	}

	function createQuestion(quizData: WordPractice, numberOfActualQuiz: number) {
		const gameType: string = quizData.practiceTypes[numberOfActualQuiz];
		let result: string = "";
		switch (gameType) {
			case "multiple choice game":
				result = `What's the correct translation of ${quizData.words[numberOfActualQuiz].english.toLocaleLowerCase()}?`;
				break;
			case "type the answer game":
				result = `Type a translation of ${quizData.words[numberOfActualQuiz].english.toLocaleLowerCase()}?`;
				break;
			case "recognize it by the definition game":
				result = `Which is this world? ${
					quizData.words[numberOfActualQuiz].definitions[random(quizData.words[numberOfActualQuiz].definitions.length - 1)]
				}`;
		}
		return result;
	}

	function evaluateAnswer(
		quizData: WordPractice,
		numberOfActualQuiz: number,
		actualQuestionText: string,
		evaluatedAnswers: EvaluatedAnswer[],
		answerOfUser: string,
	) {
		const rightAnswers: string[] = quizData.words[numberOfActualQuiz].hungarian;
		const currentAnswers: EvaluatedAnswer[] = [...evaluatedAnswers];
		currentAnswers.push({
			id: `${numberOfActualQuiz}_riddle`,
			question: actualQuestionText,
			answer: answerOfUser,
			possibleAnswers: quizData.words[numberOfActualQuiz].hungarian,
			result: rightAnswers.includes(answerOfUser) ? true : false,
		});
		setAnswerOfUser("");
		setEvaluatedAsnwers(currentAnswers);
	}

	function evaluateRound(
		quizData: WordPractice,
		numberOfActualQuiz: number,
		actualQuestionText: string,
		evaluatedAnswers: EvaluatedAnswer[],
		answerOfUser: string,
	) {
		if (answerOfUser === "") {
			createToast({
				id: generateID(),
				type: "error",
				title: "Error",
				details: `An error occured. It seems you forgot to give an asnwer.`,
			});
			return;
		}
		evaluateAnswer(quizData, numberOfActualQuiz, actualQuestionText, evaluatedAnswers, answerOfUser);
		setNumberOfActualQuiz((prev) => prev + 1);
	}

	function renderGameElements(quizData: WordPractice, numberOfActualQuiz: number, actualQuestionText: string, answersOfActualQuiz: string[]) {
		const currentGameType: WordPracticeType = quizData.practiceTypes[numberOfActualQuiz];

		switch (currentGameType) {
			case "multiple choice game":
				return (
					<Fragment>
						<Question>{actualQuestionText}</Question>
						<WordChooserContainer>
							{answersOfActualQuiz.map((answerOfActualQuiz: string) => (
								<WordCard
									key={answerOfActualQuiz}
									onClick={() => {
										setAnswerOfUser(answerOfActualQuiz);
									}}
									selected={answerOfUser === answerOfActualQuiz ? true : false}>
									{answerOfActualQuiz}
								</WordCard>
							))}
						</WordChooserContainer>
					</Fragment>
				);
			case "type the answer game":
				return (
					<Fragment>
						<Question>{actualQuestionText}</Question>
						<input
							placeholder="Type your answer here"
							value={answerOfUser}
							onChange={(event) => {
								setAnswerOfUser(event.target.value);
							}}></input>
					</Fragment>
				);

			case "recognize it by the definition game":
				return (
					<Fragment>
						<Question>{actualQuestionText}</Question>
						<WordChooserContainer>
							{answersOfActualQuiz.map((answerOfActualQuiz: string) => (
								<WordCard
									key={answerOfActualQuiz}
									onClick={() => {
										setAnswerOfUser(answerOfActualQuiz);
									}}
									selected={answerOfUser === answerOfActualQuiz ? true : false}>
									{answerOfActualQuiz}
								</WordCard>
							))}
						</WordChooserContainer>
					</Fragment>
				);
		}
	}

	if (!quizData || !actualQuestionText) return null;

	if (numberOfActualQuiz > quizData.words.length - 1) {
		return <Scoreboard evaluatedAnswers={evaluatedAnswers} startNewPractice={loadQuizData} restartPractice={restartQuiz} />;
	}

	return (
		<Fragment>
			{renderGameElements(quizData, numberOfActualQuiz, actualQuestionText, answersOfActualQuiz)}
			<NextButton onClick={() => evaluateRound(quizData, numberOfActualQuiz, actualQuestionText, evaluatedAnswers, answerOfUser)}>
				Next question
			</NextButton>
		</Fragment>
	);
}
