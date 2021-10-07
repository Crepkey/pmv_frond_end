import React from "react";

/* Styles */
import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	width: 106px;
	height: 106px;
	flex-wrap: wrap;
	border: 1px solid black;
	margin-left: 300px;
	margin-top: 300px;
`;

const RedArea = styled.div<SpinnerBarStyleProps>`
	width: 50px;
	height: 50px;
	background-image: ${({ actualState }) => actualState.red};
	border-radius: 100px 0 0 0;
	border-right: 3px white solid;
	border-bottom: 3px white solid;
`;

const OrangeArea = styled.div<SpinnerBarStyleProps>`
	width: 50px;
	height: 50px;
	background-image: ${({ actualState }) => actualState.orange};
	border-radius: 0 100px 0 0;
	border-left: 3px white solid;
	border-bottom: 3px white solid;
`;

const YellowArea = styled.div<SpinnerBarStyleProps>`
	width: 50px;
	height: 50px;
	background-image: ${({ actualState }) => actualState.yellow};
	border-radius: 0 0 100px 0;
	border-left: 3px white solid;
	border-top: 3px white solid;
`;

const GreenArea = styled.div<SpinnerBarStyleProps>`
	width: 50px;
	height: 50px;
	background-image: ${({ actualState }) => actualState.green};
	border-radius: 0 0 0 100px;
	border-right: 3px white solid;
	border-top: 3px white solid;
`;

const WhiteCircle = styled.div<SpinnerBarStyleProps>`
	position: relative;
	bottom: 75%;
	left: 25%;
	width: 50px;
	height: 50px;
	border-radius: 100px;
	background: white;
`;

interface SpinnerBarStyleProps {
	actualState: { [key: string]: string };
	background?: string;
}
interface SpinnerBarProps {
	status: number; // This number can be between 0 and 100
	size: number | string; // This value can be a number or a string in the following format: '213px' | '213%'
	backgroundColor?: string; // A color code in HEX or RGB(a)
}

export default function SpinnerBar({ status, size, backgroundColor = "rgba(255, 255, 255, 1)" }: SpinnerBarProps) {
	function calculateStatus() {
		const result: { [key: string]: string } = {
			red: "rgba(0, 0, 0, 0)",
			orange: "rgba(0, 0, 0, 0)",
			yellow: "rgba(0, 0, 0, 0)",
			green: "rgba(0, 0, 0, 0)",
		};

		if (status > 0) {
			result.red = "linear-gradient(to left top, #c72929, #d34340, #de5956, #e86e6d, #f18383)";
		}
		if (status > 25) {
			result.orange = "linear-gradient(to right top, #ff8100, #ff8f23, #ff9c39, #ffa94e, #ffb562)";
		}
		if (status >= 50) {
			result.yellow = "linear-gradient(to right bottom, #ffdb00, #f8e033, #f1e54d, #ebe963, #e7ec77)";
		}
		if (status >= 75) {
			result.green = "linear-gradient(to left bottom, #0bc900, #41d02c, #5dd845, #74df5a, #89e66e)";
		}

		return result;
	}

	const actualState: { [key: string]: string } = calculateStatus();

	return (
		<MainContainer>
			<RedArea actualState={actualState} background={backgroundColor} />
			<OrangeArea actualState={actualState} background={backgroundColor} />
			<GreenArea actualState={actualState} background={backgroundColor} />
			<YellowArea actualState={actualState} background={backgroundColor} />
			<WhiteCircle actualState={actualState} background={backgroundColor} />
		</MainContainer>
	);
}
