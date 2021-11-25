/* Utils */
import { calculateRowBackground } from "../../../utils/utils";

/* Interfaces */
import { ColorCodeType } from "../../../utils/interfaces";
import { EvaluatedAnswer } from "./interfaces";

/* Styles */
import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { FcCancel } from "react-icons/fc";
import { IoIosInformationCircleOutline } from "react-icons/io";

const WordRow = styled.div<{ background: string }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 2rem;
	padding: 3px 12px 3px 12px;
	background: ${({ background }) => background};
	border-bottom: 1px ${colors.rowBorder} solid;
`;

const Question = styled.div`
	display: flex;
	flex: 5;
	padding-right: 12px;
	font-weight: 450;
`;

const Answer = styled.div`
	display: flex;
	flex: 2;
	padding-right: 12px;
	font-weight: 300;
`;
const PossibleAnswers = styled.div`
	display: flex;
	flex: 5;
	padding-right: 12px;
	font-weight: 300;
`;

const AnswerResult = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
`;

const ResultText = styled.div`
	font-weight: 350;
	margin-left: 8px;
`;

const IconContainer = styled.div`
	display: flex;
	flex: 0.5;
	justify-content: right;
	/* border: 1px red solid; */
`;

interface ScoreboardRowProps {
	evaluatedAnswer: EvaluatedAnswer;
	rowNumber: number;
}

export default function ScoreboardRow({ evaluatedAnswer, rowNumber }: ScoreboardRowProps) {
	const background: ColorCodeType = calculateRowBackground(rowNumber);

	function addCommaToElements(word: string, index: number, lastIndex: number) {
		if (index === lastIndex) return word;
		return `${word}, `;
	}

	return (
		<WordRow key={evaluatedAnswer.id} background={background}>
			<Question>{evaluatedAnswer.question}</Question>
			<Answer>{evaluatedAnswer.answer}</Answer>
			<PossibleAnswers>
				{evaluatedAnswer.possibleAnswers.map((word: string, index: number) =>
					addCommaToElements(word, index, evaluatedAnswer.possibleAnswers.length - 1),
				)}
			</PossibleAnswers>
			<AnswerResult>
				<FcCancel size={24} color="red" />
				<ResultText>Correct</ResultText>
			</AnswerResult>
			<IconContainer>
				<IoIosInformationCircleOutline size={24} />
			</IconContainer>
		</WordRow>
	);
}
