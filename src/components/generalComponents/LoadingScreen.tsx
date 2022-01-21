import { colors } from "src/utils/colors";
import styled, { keyframes } from "styled-components";
import MainLogo from "./MainLogo";

const logoAnim = keyframes`
	0%{
		position: relative;
		top: 0px;
		transform: rotate(0deg);
	}
	50%{
		position: relative;
		top: -150px;
		transform: rotate(360deg);
	}
	100%{
		position: relative;
		top: 0px;
		transform: rotate(720deg);
	}
`;

function calcLetterAnim(
	horizontalDirection: "left" | "right",
	horizontalDepth: `${number}px`,
	verticalDepth: `${number}px`,
	rotation: `${number}deg`,
	returnPoint: `${number}%`,
) {
	const key = keyframes`
    0%{
        position: relative;
        ${horizontalDirection}: 0;
        bottom: 0;
    }
    50%{
        position: relative;
        ${horizontalDirection}: ${horizontalDepth};
        transform: rotate(${rotation});
        bottom: ${verticalDepth};
    }

    ${returnPoint}{
        position: relative;
        ${horizontalDirection}: 0;
        transform: rotate(0deg);
        bottom: 0;
    }
    100%{
        position: relative;
        ${horizontalDirection}: 0;
        bottom: 0;
    }
`;
	return key;
}

const MainContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const AnimatedLogo = styled(MainLogo)`
	animation: ${logoAnim} 3s ease-in-out infinite;
`;

const TextContainer = styled.div`
	display: flex;
	margin-top: 24px;
	font-family: none;
	font-size: 5rem;
	font-weight: 700;
	color: ${colors.inactiveFont};
`;

const LChar = styled.div`
	animation: ${calcLetterAnim("right", "600px", "0px", "360deg", "65%")} 3s ease-in-out infinite;
`;
const OChar = styled.div`
	animation: ${calcLetterAnim("right", "600px", "-300px", "540deg", "70%")} 3s ease-in-out infinite;
`;
const AChar = styled.div`
	animation: ${calcLetterAnim("right", "600px", "-600px", "720deg", "75%")} 3s ease-in-out infinite;
`;
const DChar = styled.div`
	animation: ${calcLetterAnim("right", "300px", "-900px", "720deg", "80%")} 3s ease-in-out infinite;
`;
const IChar = styled.div`
	animation: ${calcLetterAnim("left", "100px", "-900px", "360deg", "85%")} 3s ease-in-out infinite;
`;
const NChar = styled.div`
	animation: ${calcLetterAnim("left", "600px", "-600px", "360deg", "90%")} 3s ease-in-out infinite;
`;
const GChar = styled.div`
	animation: ${calcLetterAnim("left", "600px", "0px", "540deg", "95%")} 3s ease-in-out infinite;
`;

export default function LoadingScreen() {
	return (
		<MainContainer>
			<AnimatedLogo size={200} />
			<TextContainer>
				<LChar>L</LChar>
				<OChar>O</OChar>
				<AChar>A</AChar>
				<DChar>D</DChar>
				<IChar>I</IChar>
				<NChar>N</NChar>
				<GChar>G</GChar>
			</TextContainer>
		</MainContainer>
	);
}
