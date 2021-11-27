/* Interfaces */
import { EvaluatedAnswer } from "./interfaces";

/* Components */
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
/* FIXME: Header titles can shift relative to the values of row if you zoom in or out, 
you change the size of the display size with devtool window. Maybe a GRID-based solution would be better.*/

const TableHeader = styled.div`
	display: flex;
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

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 12px 24px 24px 24px;
`;

const SamePracticeButton = styled.button`
	display: inline-block;
	cursor: pointer;
	color: ${colors.buttonFont};
	font-size: 1rem;
	text-decoration: none;
	padding: 6px 24px;
	margin-left: 16px;
	border-radius: 16px;
	border: none;
	background-color: ${colors.buttonBackground};
	:hover {
		background: linear-gradient(to bottom, ${colors.buttonGradientLight} 5%, ${colors.buttonGradientDark} 100%);
		background-color: ${colors.buttonGradientLight};
	}
	:active {
		position: relative;
		top: 1px;
	}
`;

const NewPracticeButton = styled.button`
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
						<TableHeaderElement size={5}>Question</TableHeaderElement>
						<TableHeaderElement size={2}>Your answer</TableHeaderElement>
						<TableHeaderElement size={5}>Correct Answers</TableHeaderElement>
						<TableHeaderElement size={1}>Result</TableHeaderElement>
						<TableHeaderElement size={0.5} style={{ justifyContent: "right" }}>
							Info
						</TableHeaderElement>
					</TableHeader>
					<WordContainer>
						{evaluatedAnswers.map((answer: EvaluatedAnswer, index: number) => (
							<ScoreboardRow key={answer.id} evaluatedAnswer={answer} rowNumber={index} />
						))}
					</WordContainer>
				</TableBlock>
			</TableContainer>
			<ButtonContainer>
				<NewPracticeButton>Start new practice</NewPracticeButton>
				<SamePracticeButton>Practice with same words</SamePracticeButton>
			</ButtonContainer>
		</MainContainer>
	);
}
