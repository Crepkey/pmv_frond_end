import { Fragment } from "react";

/* Interfaces */
import { WordPracticeType } from "sharedInterfaces";

/* Styles */
import styled from "styled-components";

/* Components */
import Question from "./Question";
import WordCard from "./WordCard";

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

const InputFieldContainer = styled.div`
	min-height: 10%;
	padding: 24px;
`;

const InputField = styled.input`
	width: 97%;
	height: 95%;
	border-radius: 15px;
	border: 3px gray solid;
	font-size: 2rem;
	color: gray;
	padding-left: 24px;
`;

interface PracticeTypeSwitcherProps {
	quizType: WordPracticeType;
	questionText: string;
	answersOfActualQuiz: string[];
	answerOfUser: string;
	setAnswerOfUser: React.Dispatch<React.SetStateAction<string>>;
}

export default function PracticeTypeSwitcher({
	quizType,
	questionText,
	answersOfActualQuiz,
	answerOfUser,
	setAnswerOfUser,
}: PracticeTypeSwitcherProps) {
	switch (quizType) {
		case "multiple choice game":
			return (
				<Fragment>
					<Question text={questionText} />
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
					<Question text={questionText} />
					<InputFieldContainer>
						<InputField
							placeholder="Type your answer here"
							value={answerOfUser}
							onChange={(event) => {
								setAnswerOfUser(event.target.value);
							}}
						/>
					</InputFieldContainer>
				</Fragment>
			);

		case "recognize it by the definition game":
			return (
				<Fragment>
					<Question text={questionText} />
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
