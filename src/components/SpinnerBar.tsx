import React from "react";

/* Styles */
import styled from "styled-components";

const MainContainer = styled.div<SpinnerBarStyleSize>`
	display: flex;
	width: ${({ size }) => size + "px"};
	height: ${({ size }) => size + "px"};
	flex-wrap: wrap;
	border: 1px solid yellow;
`;

const RedArea = styled.div<SpinnerBarStyleState>`
	width: 47%;
	height: 47%;
	background-image: ${({ actualState }) => actualState.red};
	border-radius: 100% 0 0 0;
	margin-right: 3%;
	margin-bottom: 3%;
`;

const OrangeArea = styled.div<SpinnerBarStyleState>`
	width: 47%;
	height: 47%;
	background-image: ${({ actualState }) => actualState.orange};
	border-radius: 0 100% 0 0;
	margin-left: 3%;
	margin-bottom: 3%;
`;

const YellowArea = styled.div<SpinnerBarStyleState>`
	width: 47%;
	height: 47%;
	background-image: ${({ actualState }) => actualState.yellow};
	border-radius: 0 0 100% 0;
	margin-left: 3%;
	margin-top: 3%;
`;

const GreenArea = styled.div<SpinnerBarStyleState>`
	width: 47%;
	height: 47%;
	background-image: ${({ actualState }) => actualState.green};
	border-radius: 0 0 0 100%;
	margin-right: 3%;
	margin-top: 3%;
`;

const InnerCircle = styled.div<SpinnerBarStyleBackground>`
	width: 50%;
	height: 50%;
	position: relative;
	bottom: 75%;
	left: 25%;
	border-radius: 100%;
	background: white;
`;

interface SpinnerBarStyleSize {
	size: number;
}
interface SpinnerBarStyleState {
	actualState: { [key: string]: string }; // red, orange, yellow, green properties and their numbers
}

interface SpinnerBarStyleBackground {
	background: string;
}
interface SpinnerBarProps {
	status: number; // This number can be between 0 and 100
	size?: number;
	backgroundColor?: string; // A color code in HEX or RGB(a)
}

export default function SpinnerBar({ status, size = 50, backgroundColor = "rgba(255, 255, 255, 1)" }: SpinnerBarProps) {
	const actualState: { [key: string]: string } = (function () {
		const result = {
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
	})();

	return (
		<MainContainer size={size}>
			<RedArea actualState={actualState} />
			<OrangeArea actualState={actualState} />
			<GreenArea actualState={actualState} />
			<YellowArea actualState={actualState} />
			<InnerCircle background={backgroundColor} />
		</MainContainer>
	);
}
