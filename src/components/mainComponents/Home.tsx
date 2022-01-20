/* Styles */
import { colors } from "src/utils/colors";
import styled, { keyframes } from "styled-components";

/* Components */
import MainLogo from "../generalComponents/MainLogo";

const welcomeAnim = keyframes`
	0%{
		position: relative;
		right: 100%;
		transform: skewX(30deg) scaleX(2);
		
	}
	75%{
		position: relative;
		right: 30%;
		transform: skewX(20deg) scaleX(0.8);
		
	}
	85%{
		position: relative;
		right: -10%;
		transform: skewX(-20deg) scaleX(0.5)
		
	}
	100%{
		position: relative;
		right: 0;
	}
`;

const toAnim = keyframes`
	0%{
		position: relative;
		left: 100%;
		transform: skewX(-30deg) scaleX(2);
		
	}
	75%{
		position: relative;
		left: 30%;
		transform: skewX(-20deg) scaleX(0.8);
		
	}
	85%{
		position: relative;
		left: -10%;
		transform: skewX(10deg) scaleX(0.5)
		
	}
	100%{
		position: relative;
		left: 0;
	}
`;

const pimpAnim = keyframes`
	0%{
		position: relative;
		right: 100%;
		transform: skewX(40deg) scaleX(4);
		
	}
	75%{
		position: relative;
		right: 30%;
		transform: skewX(20deg) scaleX(0.7);
		
	}
	85%{
		position: relative;
		right: -10%;
		transform: skewX(-25deg) scaleX(0.3)
		
	}
	100%{
		position: relative;
		right: 0;
	}
`;

const vocabAnim = keyframes`
	0%{
		position: relative;
		left: 100%;
		transform: skewX(-20deg) scaleX(4);
		
	}
	75%{
		position: relative;
		left: 30%;
		transform: skewX(-10deg) scale(0.7, 2);
		
	}
	85%{
		position: relative;
		left: -10%;
		transform: skewX(35deg) scaleX(0.3)
		
	}
	100%{
		position: relative;
		left: 0;
	}
`;

const creatorsAnim = keyframes`
	0%{
		opacity: 0%
		
	}
	100%{
		opacity: 100%;
	}
`;

const MainContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: ${colors.inactiveFont};
	font-family: none;
`;

const WelcomeText = styled.div`
	font-size: 5rem;
	font-weight: 700;
	margin-top: 24px;

	animation: ${welcomeAnim} 2s ease;
	animation-fill-mode: backwards;
`;

const ToText = styled.div`
	font-size: 2rem;
	font-weight: 300;
	transform: scale(2, 2);
	font-weight: 700;

	animation: ${toAnim} 2s 0.5s ease;
	animation-fill-mode: backwards;
`;

const PimpMyText = styled.div`
	font-size: 3rem;
	font-weight: 700;
	-webkit-transform: scale(1.7, 1.8);
	-ms-transform: scale(1.7, 1.8);
	transform: scale(1.7, 1.8);
	margin-top: 24px;

	animation: ${pimpAnim} 2s 1s ease;
	animation-fill-mode: backwards;
`;

const VocabularyText = styled.div`
	font-size: 3rem;
	font-weight: 700;
	-webkit-transform: scale(2.16, 2.8);
	-ms-transform: scale(2.16, 2.8);
	transform: scale(2.16, 2.8);
	margin-top: 38px;

	animation: ${vocabAnim} 2s ease;
	animation-fill-mode: backwards;
`;

const Creators = styled.div`
	font-size: 1.2rem;
	font-weight: 300;
	font-family: monospace;
	margin-top: 24px;
	display: flex;
	justify-content: flex-end;
	width: 45rem;

	animation: ${creatorsAnim} 2s 3s ease;
	animation-fill-mode: backwards;
`;

export default function Home() {
	return (
		<MainContainer>
			<MainLogo size={200} />
			<WelcomeText>WELCOME</WelcomeText>
			<ToText>TO</ToText>
			<PimpMyText>PIMP MY</PimpMyText>
			<VocabularyText>VOCABULARY</VocabularyText>
			<Creators>Made by: Petra & Attila</Creators>
		</MainContainer>
	);
}
