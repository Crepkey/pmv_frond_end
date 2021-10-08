import React from "react";

/* Styles */
import styled from "styled-components";

const MainContainer = styled.div<SpinnerBarStyleProps>`
	display: flex;
	width: 500px;
	height: 500px;
	flex-wrap: wrap;
	border: 1px solid yellow;
`;

const RedArea = styled.div`
	width: 47%;
	height: 47%;
	background-image: linear-gradient(to left top, #c72929, #d34340, #de5956, #e86e6d, #f18383);
	border-radius: 100px 0 0 0;
	margin-right: 3%;
	margin-bottom: 3%;
`;

const OrangeArea = styled.div`
	width: 47%;
	height: 47%;
	background-image: linear-gradient(to right top, #ff8100, #ff8f23, #ff9c39, #ffa94e, #ffb562);
	border-radius: 0 100px 0 0;
	margin-left: 3%;
	margin-bottom: 3%;
`;

const YellowArea = styled.div`
	width: 47%;
	height: 47%;
	background-image: linear-gradient(to right bottom, #ffdb00, #f8e033, #f1e54d, #ebe963, #e7ec77);
	border-radius: 0 0 100px 0;
	margin-left: 3%;
	margin-top: 3%;
`;

const GreenArea = styled.div`
	width: 47%;
	height: 47%;
	background-image: linear-gradient(to left bottom, #0bc900, #41d02c, #5dd845, #74df5a, #89e66e);
	border-radius: 0 0 0 100px;
	margin-right: 3%;
	margin-top: 3%;
`;

const WhiteCircle = styled.div<SpinnerBarStyleProps>`
	width: 50%;
	height: 50%;
	position: relative;
	bottom: 75%;
	left: 25%;
	border-radius: 100%;
	background: white;
`;

interface SpinnerBarStyleProps {
	size?: number;
	background?: string;
}
interface SpinnerBarProps {
	size: number;
	backgroundColor?: string; // A color code in HEX or RGB(a)
}

export default function SpinnerBar({ size = 50, backgroundColor = "rgba(255, 255, 255, 1)" }: SpinnerBarProps) {
	return (
		<MainContainer size={size}>
			<RedArea />
			<OrangeArea />
			<GreenArea />
			<YellowArea />
			<WhiteCircle background={backgroundColor} />
		</MainContainer>
	);
}
