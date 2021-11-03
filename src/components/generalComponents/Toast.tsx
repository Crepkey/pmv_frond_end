import styled from "styled-components";

/* Icons */
import { BiErrorAlt } from "react-icons/bi";

/* Styles */
import { colors } from "src/utils/colors";

const MainContainer = styled.div`
	display: flex;
	position: absolute;
	right: 8px;
	bottom: 8px;
	z-index: 1000;
	height: 150px;
	width: 400px;
	padding: 16px;
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

export default function Toast() {
	return (
		<MainContainer>
			<IconContainer>
				<BiErrorAlt size={48} color={colors.error} />
			</IconContainer>
			<TextContainer>
				<Title>An error occured</Title>
				<Details>
					This is a sample text which represents the details of an error message. It's funny because this can be longer than the holy bible
				</Details>
			</TextContainer>
		</MainContainer>
	);
}
