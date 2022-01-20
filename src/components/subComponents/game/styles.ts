// Styles
import styled from "styled-components";
import { colors } from "../../../utils/colors";

// Components
import { Block } from "src/components/generalComponents/styles";

// USED IN MORE COMPONENTS
export const HeaderIcon = styled.div`
	border: 2px gray solid;
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	margin-right: 16px;
`;

export const SentenceCard = styled.div<{ lastElement: boolean }>`
	background: ${colors.background};
	margin-bottom: ${({ lastElement }: any) => (lastElement ? 0 : "8px")};
	font-size: 1.15rem;
	padding: 8px;
	border-radius: 8px;
	font-weight: 300;
	border-bottom: 1px ${colors.border} solid;
`;

export const BoldLargeMessage = styled.div`
	font-size: 2rem;
	font-weight: 550;
	margin: 16px;
`;

export const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 80px;
`;

export const TitleIcon = styled.div`
	color: gray;
	padding-left: 16px;
	cursor: pointer;
`;

// GAME COMPONENT
export const GameMainContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	min-width: 0;
	min-height: 0;
	flex-direction: column;
`;

export const GameHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const GameBody = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	min-width: 0;
	min-height: 0;
	padding: 0 12px 12px 12px;
`;

// STARTSCREEN COMPONENT
export const AnswerContainer = styled.div`
	display: flex;
`;

export const Answer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	font-size: 1.5rem;
	font-weight: bold;
	border: solid 1px;
	border-radius: 8px;
	margin: 8px;
	:hover {
		cursor: pointer;
	}
`;

export const LargerMessage = styled.div`
	font-size: 1.1rem;
	display: flex;
`;

// PLAYINGCARD COMPONENT
export const SpinnerBarContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	flex: 1;
`;

export const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const TagContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 8px;
`;

export const Tag = styled.div<{ background?: string }>`
	background: ${({ background }: any) => (background ? background : colors.tagBackground)};
	margin: 0 16px 16px 0;
	padding: 4px 16px;
	border-radius: 30px;
	font-size: 1.25rem;
	font-weight: 400;
	border-bottom: 1px ${colors.border} solid;
	color: ${({ background }: any) => (background ? colors.buttonFont : colors.inactiveFont)};
`;

// EVALUATIONFORM COMPONENT
export const EvalRow = styled(Block)`
	cursor: pointer;
	display: flex;
	align-items: center;
`;

export const ButtonContainer = styled.div`
	margin-top: 24px;
	display: flex;
	justify-content: center;
`;

export const CheckBox = styled.div`
	margin-right: 16px;
	display: flex;
	align-items: center;
`;

export const BoldText = styled.span`
	font-weight: bold;
	margin-right: 4px;
`;

// FINALSCREEN COMPONENT
export const ScreenTitle = styled.div`
	font-size: 2rem;
	margin: 24px 0 16px 0;
	font-weight: 550;
`;

export const CardContainer = styled.div`
	display: flex;
`;

export const PointsContainer = styled.div`
	display: flex;
	font-size: 3rem;
	justify-content: center;
	font-weight: bold;
`;

export const ResultDescription = styled.div`
	margin-bottom: 24px;
`;

// GRAMMARCARD COMPONENT
export const SubTitle = styled.div`
	font-weight: normal;
	font-style: italic;
	font-size: 1rem;
	margin-left: 32px;
`;

export const FormingSentence = styled.div`
	font-weight: 500;
	margin-bottom: 24px;
	font-size: 1.1rem;
`;

export const UsageDescription = styled.div<{ firstElement: boolean }>`
	font-weight: 600;
	font-size: 0.9rem;
	margin-top: ${({ firstElement }: any) => (firstElement ? 0 : "12px")};
`;

export const UsageSentence = styled.div`
	padding: 8px 0 12px 16px;
	border-bottom: 1px ${colors.border} solid;
`;
