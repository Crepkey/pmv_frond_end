// Styles
import styled from "styled-components";
import { colors } from "../../utils/colors";

// CARD
export const Card = styled.div`
	border: 1px solid ${colors.border};
	border-radius: 8px;
	margin: 8px 12px 12px 12px;
	width: 32%;
	min-width: 20rem;
	min-height: 0;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

export const CardHeader = styled.div`
	display: flex;
	align-items: center;
	font-weight: 450;
	background-image: linear-gradient(to top, ${colors.headerGradientDarker}, ${colors.headerGradientDark}, ${colors.headerGradientLight});
	border-bottom: 1px solid ${colors.border};
	padding: 0 16px 0 16px;
	min-height: 3rem;
`;

export const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 0;
	min-height: 0;
	padding: 16px 24px 24px 24px;
`;

export const CardTitle = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 2rem;
	margin-bottom: 24px;
	font-weight: 550;
	width: 100%;
`;

export const CardBodyScrollContainer = styled.div`
	min-width: 0;
	min-height: 0;
	overflow: scroll;
	flex: 1;
`;

// BLOCK
export const Block = styled.div`
	background: ${colors.blockBackground};
	border-radius: 24px;
	padding: 24px;
	margin-bottom: 24px;
	font-weight: 300;
`;

// BUTTONS
export const GreenButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
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

// PROGRESSBAR
export const MainContainer = styled.div`
	display: flex;
	margin: 8px;
	align-items: center;
`;

export const MainBar = styled.div`
	min-width: 300px;
	border: solid 1px ${colors.border};
	overflow: hidden;
	border-radius: 50px;
	height: 8px;
`;

export const ProgressColor = styled.div<{ status: number }>`
	width: ${({ status }) => `${status}%`};
	background: ${colors.progressBlue};
	height: 100%;
`;

export const ProgressTitle = styled.div`
	font-size: 0.75rem;
	margin: 0 8px;
`;
