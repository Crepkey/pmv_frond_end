/* Styles */
import { colors } from "src/utils/colors";
import styled from "styled-components";

/* Components */
import MainLogo from "../generalComponents/MainLogo";

const MainContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: ${colors.inactiveFont};
	font-family: none;
	border: 1px solid green;
`;

const WelcomeContainer = styled.div`
	font-size: 5rem;
	font-weight: 700;
	margin-top: 24px;
`;

const ToText = styled.div`
	font-size: 2rem;
	font-weight: 300;
	transform: scale(2, 2);
	font-weight: 700;
`;

const PimpMyText = styled.div`
	font-size: 3rem;
	font-weight: 700;
	-webkit-transform: scale(1.7, 1.8);
	-ms-transform: scale(1.7, 1.8);
	transform: scale(1.7, 1.8);
	margin-top: 24px;
`;

const VocabularyText = styled.div`
	font-size: 3rem;
	font-weight: 700;
	-webkit-transform: scale(2.16, 2.8);
	-ms-transform: scale(2.16, 2.8);
	transform: scale(2.16, 2.8);
	margin-top: 38px;
`;

const Creators = styled.div`
	font-size: 1.2rem;
	font-weight: 300;
	font-family: monospace;
	margin-top: 24px;
	display: flex;
	justify-content: flex-end;
	width: 45rem;
	/* border: 1px solid silver; */
`;

export default function Home() {
	return (
		<MainContainer>
			<MainLogo size={200} />
			<WelcomeContainer>WELCOME</WelcomeContainer>
			<ToText>TO</ToText>
			<PimpMyText>PIMP MY</PimpMyText>
			<VocabularyText>VOCABULARY</VocabularyText>
			<Creators>Made by: Petra & Attila</Creators>
		</MainContainer>
	);
}
