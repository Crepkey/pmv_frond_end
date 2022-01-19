import { Fragment } from "react";
import { WordPracticeType } from "sharedInterfaces";
import styled from "styled-components";
import WordCard from "./WordCard";

const Question = styled.div`
	padding: 24px;
	font-weight: 700;
	font-size: 2rem;
`;

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

interface PracticeTypeSwitcherProps {
	quizType: WordPracticeType;
	actualQuestionText: string;
	answersOfActualQuiz: string[];
	answerOfUser: string;
	setAnswerOfUser: React.Dispatch<React.SetStateAction<string>>;
}

export default function PracticeTypeSwitcher({
	quizType,
	actualQuestionText,
	answersOfActualQuiz,
	answerOfUser,
	setAnswerOfUser,
}: PracticeTypeSwitcherProps) {
	switch (quizType) {
		case "multiple choice game":
			return (
				<Fragment>
					<Question>{actualQuestionText}</Question>
					<WordChooserContainer>
						{answersOfActualQuiz.map((answerOfActualQuiz: string, index: number) => (
							<WordCard
								key={answerOfActualQuiz}
								setAnswerOfUser={setAnswerOfUser}
								answerOfActualQuiz={answerOfActualQuiz}
								selected={answerOfUser === answerOfActualQuiz ? true : false}
								text={answerOfActualQuiz}
								cardNumber={index}
							/>
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
						{answersOfActualQuiz.map((answerOfActualQuiz: string, index: number) => (
							<WordCard
								key={answerOfActualQuiz}
								setAnswerOfUser={setAnswerOfUser}
								answerOfActualQuiz={answerOfActualQuiz}
								selected={answerOfUser === answerOfActualQuiz ? true : false}
								text={answerOfActualQuiz}
								cardNumber={index}
							/>
						))}
					</WordChooserContainer>
				</Fragment>
			);
	}
}
