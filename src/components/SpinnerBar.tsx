import React from "react";

/* Styles */
import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	width: 106px;
	height: 106px;
	flex-wrap: wrap;
	border: 1px solid black;
	margin-left: 200px;
`;

const RedArea = styled.div`
	width: 50px;
	height: 50px;
	background: red;
	border-radius: 100px 0 0 0;
	border-right: 3px white solid;
	border-bottom: 3px white solid;
`;

const OrangeArea = styled.div`
	width: 50px;
	height: 50px;
	background: orange;
	border-radius: 0 100px 0 0;
	border-left: 3px white solid;
	border-bottom: 3px white solid;
`;

const YellowArea = styled.div`
	width: 50px;
	height: 50px;
	background: yellow;
	border-radius: 0 0 100px 0;
	border-left: 3px white solid;
	border-top: 3px white solid;
`;

const GreenArea = styled.div`
	width: 50px;
	height: 50px;
	background: green;
	border-radius: 0 0 0 100px;
	border-right: 3px white solid;
	border-top: 3px white solid;
`;

const WhiteCircle = styled.div`
	position: relative;
	bottom: 75%;
	left: 25%;
	width: 50px;
	height: 50px;
	border-radius: 100px;
	background: white;
`;

export default function SpinnerBar() {
	return (
		<MainContainer>
			<RedArea />
			<OrangeArea />
			<GreenArea />
			<YellowArea />
			<WhiteCircle />
		</MainContainer>
	);
}
