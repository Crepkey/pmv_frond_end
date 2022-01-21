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

const LCharAnim = keyframes`
    0%{
        position: relative;
        right: 0
    }
    50%{
        position: relative;
        right: 600px;
        transform: rotate(360deg)
    }
    100%{
        position: relative;
        right: 0
    }
`;

const OCharAnim = keyframes`
    0%{
        position: relative;
        right: 0;
        bottom: 0;
    }
    50%{
        position: relative;
        right: 600px;
        transform: rotate(540deg);
        bottom: -300px;
    }
    100%{
        position: relative;
        right: 0;
        bottom: 0;
    }
`;

const ACharAnim = keyframes`
    0%{
        position: relative;
        right: 0;
        bottom: 0;
    }
    50%{
        position: relative;
        right: 600px;
        transform: rotate(720deg);
        bottom: -600px;
    }
    100%{
        position: relative;
        right: 0;
        bottom: 0;
    }
`;

const DCharAnim = keyframes`
    0%{
        position: relative;
        right: 0;
        bottom: 0;
    }
    50%{
        position: relative;
        right: 300px;
        transform: rotate(720deg);
        bottom: -900px;
    }
    100%{
        position: relative;
        right: 0;
        bottom: 0;
    }
`;

const ICharAnim = keyframes`
    0%{
        position: relative;
        left: 0;
        bottom: 0;
    }
    50%{
        position: relative;
        left: 100px;
        transform: rotate(360deg);
        bottom: -900px;
    }
    100%{
        position: relative;
        left: 0;
        bottom: 0;
    }
`;

const NCharAnim = keyframes`
    0%{
        position: relative;
        left: 0;
        bottom: 0;
    }
    50%{
        position: relative;
        left: 600px;
        transform: rotate(360deg);
        bottom: -600px;
    }
    100%{
        position: relative;
        left: 0;
        bottom: 0;
    }
`;

const GCharAnim = keyframes`
    0%{
        position: relative;
        left: 0
    }
    50%{
        position: relative;
        left: 600px;
        transform: rotate(540deg)
    }
    100%{
        position: relative;
        left: 0
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

const AnimatedLogo = styled(MainLogo)`
	animation: ${logoAnim} 3s ease-in-out infinite;
	animation-fill-mode: backwards;
`;

const TextContainer = styled.div`
	display: flex;
`;

const LChar = styled.div`
	font-size: 5rem;
	font-weight: 700;
	margin-top: 24px;

	animation: ${LCharAnim} 3s ease-in-out infinite;
`;
const OChar = styled.div`
	font-size: 5rem;
	font-weight: 700;
	margin-top: 24px;

	animation: ${OCharAnim} 3s ease-in-out infinite;
`;
const AChar = styled.div`
	font-size: 5rem;
	font-weight: 700;
	margin-top: 24px;

	animation: ${ACharAnim} 3s ease-in-out infinite;
`;
const DChar = styled.div`
	font-size: 5rem;
	font-weight: 700;
	margin-top: 24px;

	animation: ${DCharAnim} 3s ease-in-out infinite;
`;
const IChar = styled.div`
	font-size: 5rem;
	font-weight: 700;
	margin-top: 24px;

	animation: ${ICharAnim} 3s ease-in-out infinite;
`;
const NChar = styled.div`
	font-size: 5rem;
	font-weight: 700;
	margin-top: 24px;

	animation: ${NCharAnim} 3s ease-in-out infinite;
`;
const GChar = styled.div`
	font-size: 5rem;
	font-weight: 700;
	margin-top: 24px;

	animation: ${GCharAnim} 3s ease-in-out infinite;
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
