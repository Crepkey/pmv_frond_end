import { useState } from "react";

/* Icons */
import { BiErrorAlt, BiFlag, BiInfoSquare, BiCheckSquare } from "react-icons/bi";

/* Styles */
import { colors } from "src/utils/colors";
import styled, { keyframes } from "styled-components";

/* Intefaces */
import { Toast } from "src/utils/interfaces";

import { TOAST_DISPLAY_TIME } from "../../../utils/generalSettings.json"; //TODO: Why does not the path of this JSON work?

const MainContainerAnim = keyframes`
    0% {
      height: 75px;
      width: 30px;
    }
    50% {
      height: 75px;
      width: 400px;
      
    }
    100% {
      height: 150px;
      width: 400px;
    } 
`;

const MainContainer = styled.div`
	display: flex;
	flex-wrap: nowrap;
	height: 150px;
	width: 400px;
	padding: 16px;
	margin-bottom: 8px;
	box-sizing: border-box;
	border-radius: 8px;
	background: white;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	animation-name: ${MainContainerAnim};
	animation-duration: 1s;
	animation-fill-mode: none;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 4;
	min-width: 0;
	min-height: 0;
`;
const Title = styled.div`
	color: ${colors.error};
	display: flex;
	flex: 1;
	justify-content: space-evenly;
	align-items: center;
	font-weight: bold;
`;

const Details = styled.div`
	display: flex;
	flex: 3;
	justify-content: space-evenly;
	align-items: center;
	font-weight: 300;
`;

const IconContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-evenly;
	align-items: center;
`;

/* TODO: generalSettings for the app */

export default function ToastCard({ title, details, type }: Toast) {
	const [wasDisplayed, setDisplayed] = useState<boolean>(false);

	function getIcon() {
		switch (type) {
			case "info":
				return <BiInfoSquare size={48} color={colors.info} />;
			case "success":
				return <BiCheckSquare size={48} color={colors.success} />;
			case "warning":
				return <BiFlag size={48} color={colors.warning} />;
			case "error":
				return <BiErrorAlt size={48} color={colors.error} />;
		}
	}

	setTimeout(() => {
		setDisplayed(true);
	}, TOAST_DISPLAY_TIME);

	if (wasDisplayed) {
		return null;
	}

	return (
		<MainContainer>
			<IconContainer>{getIcon()}</IconContainer>
			<TextContainer>
				<Title>{title}</Title>
				<Details>{details}</Details>
			</TextContainer>
		</MainContainer>
	);
}
