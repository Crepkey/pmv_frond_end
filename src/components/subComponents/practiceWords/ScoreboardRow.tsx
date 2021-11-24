/* Interfaces */
import { ColorCodeType, WordOperationType } from "../../../utils/interfaces";
import { Word } from "sharedInterfaces";

/* Styles */
import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { FcCancel } from "react-icons/fc";
import { IoIosInformationCircleOutline } from "react-icons/io";

/* Utils */
import { calculateRowBackground } from "../../../utils/utils";

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

interface ActiveWordRowProps {
	word: Word;
	rowNumber: number;
}

export default function ScoreboardRow({ word, rowNumber }: ActiveWordRowProps) {
	const background: ColorCodeType = calculateRowBackground(rowNumber);
	return (
		<WordRow key={word.id} background={background}>
			<AskedWord>{word.english}</AskedWord>
			<YourAnswer>Fake Answer</YourAnswer>
			<PossibleAnswers>{word.hungarian.map((hunWord: string) => `${hunWord} `)}</PossibleAnswers>
			<AnswerResult>
				<FcCancel size={24} color="red" />
				<Result>Fail</Result>
			</AnswerResult>
			<IoIosInformationCircleOutline size={24} />
		</WordRow>
	);
}
