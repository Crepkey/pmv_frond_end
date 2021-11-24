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

const AskedWord = styled.div`
	display: flex;
	flex: 2;
	padding-right: 12px;
	font-weight: 450;
`;

const YourAnswer = styled.div`
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
	flex: 2;
	align-items: center;
	padding-right: 12px;
`;

const Result = styled.div`
	font-weight: 350;
`;

interface ScoreboardRowProps {
	evaluatedAnswer: EvaluatedAnswer;
	rowNumber: number;
}

export default function ScoreboardRow({ evaluatedAnswer, rowNumber }: ScoreboardRowProps) {
	const background: ColorCodeType = calculateRowBackground(rowNumber);
	return (
		<WordRow key={evaluatedAnswer.id} background={background}>
			<AskedWord>{evaluatedAnswer.question}</AskedWord>
			<YourAnswer>Fake Answer</YourAnswer>
			<PossibleAnswers>{evaluatedAnswer.possibleAnswers.map((hunWord: string) => `${hunWord} ,`)}</PossibleAnswers>
			<AnswerResult>
				<FcCancel size={24} color="red" />
				<Result>Fail</Result>
			</AnswerResult>
			<IoIosInformationCircleOutline size={24} />
		</WordRow>
	);
}
