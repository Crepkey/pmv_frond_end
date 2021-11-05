/* Icons */
import { BiErrorAlt } from "react-icons/bi";

/* Styles */
import { colors } from "src/utils/colors";
import styled from "styled-components";

/* Intefaces */
import { Toast } from "src/utils/interfaces";
import { useState } from "react";

const MainContainer = styled.div`
	display: flex;
	height: 150px;
	width: 400px;
	padding: 16px;
	margin-bottom: 8px;
	box-sizing: border-box;
	border-radius: 8px;
	background: white;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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

export default function ToastCard({ title, details, type }: Toast) {
	const [wasDisplayed, setDisplayed] = useState<boolean>(false);

	setTimeout(() => {
		setDisplayed(true);
	}, 3000);

	if (wasDisplayed) {
		return null;
	}

	return (
		<MainContainer>
			<IconContainer>
				<BiErrorAlt size={48} color={colors.error} />
			</IconContainer>
			<TextContainer>
				<Title>{title}</Title>
				<Details>{details}</Details>
			</TextContainer>
		</MainContainer>
	);
}
