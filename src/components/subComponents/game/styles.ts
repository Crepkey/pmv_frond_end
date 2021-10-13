// Styles
import styled from "styled-components";
import { colors } from "../../../utils/colors";

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

// GAME COMPONENT
export const GameMainContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	min-width: 0;
	min-height: 0;
`;

export const FinalScreenContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

// PLAYINGCARD COMPONENT
export const SpinnerBarContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	flex: 1;
`;

export const VolumeIcon = styled.div`
	display: flex;
	align-items: center;
	color: gray;
	padding-left: 16px;
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

export const SentenceCard = styled.div<{ lastElement: boolean }>`
	background: ${colors.background};
	margin-bottom: ${({ lastElement }: any) => (lastElement ? 0 : "8px")};
	font-size: 1.15rem;
	padding: 8px;
	border-radius: 8px;
	font-weight: 300;
	border-bottom: 1px ${colors.border} solid;
`;

// EVALUATIONFORM COMPONENT
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const CheckBox = styled.div`
	margin-right: 16px;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const BoldText = styled.span`
	font-weight: bold;
	margin-right: 4px;
`;

// FINALPOINTS COMPONENT
export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 24px;
`;

export const ScreenTitle = styled.div`
	font-size: 2rem;
	margin: 24px 0 16px 0;
	font-weight: bold;
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

export const Congrats = styled.div`
	font-size: 1.25rem;
	font-weight: bolder;
	margin: 16px;
`;
