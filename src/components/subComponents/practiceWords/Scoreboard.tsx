/* Utils */
import { generateID } from "src/utils/utils";

/* Interfaces */
import { EvaluatedAnswer } from "./interfaces";

/* Components */
import { Word } from "sharedInterfaces";
import ScoreboardRow from "./ScoreboardRow";

/* Styles */
import { colors } from "../../../utils/colors";
import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	min-width: 0;
	min-height: 0;
`;

const Title = styled.div`
	display: flex;
	justify-content: center;
	padding: 24px;
	font-weight: 600;
	font-size: 1.5rem;
`;

const TableContainer = styled.div`
	display: flex;
	flex: 1;
	min-width: 0;
	min-height: 0;
	padding: 12px 24px 12px 24px;
`;

const TableBlock = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	min-width: 0;
	min-height: 0;
	padding: 32px;
	background: ${colors.blockBackground};
	border-radius: 24px;
`;

const TableHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 2rem;
	font-weight: 550;
	padding: 3px 12px 3px 12px;
	border-radius: 16px 16px 0 0;
	border: 1px ${colors.border} solid;
	background-image: linear-gradient(to top, ${colors.headerGradientDarker}, ${colors.headerGradientDark}, ${colors.headerGradientLight});
`;

const TableHeaderElement = styled.div<{ size: number }>`
	display: flex;
	flex: ${({ size }) => size};
	align-items: center;
`;

const WordContainer = styled.div`
	display: flex;
	flex: 10;
	flex-direction: column;
	overflow: scroll;
	min-width: 0;
	min-height: 0;
	border-left: 1px solid ${colors.border};
	border-right: 1px solid ${colors.border};
	border-bottom: 1px solid ${colors.border};
	border-radius: 0 0 16px 16px;
	background: ${colors.background};
`;

interface ScoreboardProps {
	evaluatedAnswers: EvaluatedAnswer[];
}

export default function Scoreboard({ evaluatedAnswers }: ScoreboardProps) {
	return (
		<MainContainer>
			<Title>THE RESULT OF YOUR PRACTICE</Title>
			<TableContainer>
				<TableBlock>
					<TableHeader>
						<TableHeaderElement size={1}>Question</TableHeaderElement>
						<TableHeaderElement size={1}>Your answer</TableHeaderElement>
						<TableHeaderElement size={1}>Possible Answers</TableHeaderElement>
						<TableHeaderElement size={1}>Result</TableHeaderElement>
					</TableHeader>
					<WordContainer>
						{evaluatedAnswers.map((answer: EvaluatedAnswer, index: number) => (
							<ScoreboardRow evaluatedAnswer={answer} rowNumber={index} />
						))}
					</WordContainer>
				</TableBlock>
			</TableContainer>
		</MainContainer>
	);
}
