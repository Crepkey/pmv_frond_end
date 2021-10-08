import { colors } from "../../utils/colors";
import styled from "styled-components";

const MainContainer = styled.div<SpinnerBarProps>`
	display: flex;
	width: ${({ size }) => size + "px"};
	height: ${({ size }) => size + "px"};
	flex-wrap: wrap;
	margin-right: 16px;
`;

const RedArea = styled.div`
	width: 47%;
	height: 47%;
	background: ${colors.progressRed};
	border-radius: 50% 0 0 0;
	margin-right: 3%;
	margin-bottom: 3%;
`;

const OrangeArea = styled.div`
	width: 47%;
	height: 47%;
	background: ${colors.progressOrange};
	border-radius: 0 50% 0 0;
	margin-left: 3%;
	margin-bottom: 3%;
`;

const BlueArea = styled.div`
	width: 47%;
	height: 47%;
	background: ${colors.progressBlue};
	border-radius: 0 0 50% 0;
	margin-left: 3%;
	margin-top: 3%;
`;

const GreenArea = styled.div`
	width: 47%;
	height: 47%;
	background: ${colors.progressGreen};
	border-radius: 0 0 0 50%;
	margin-right: 3%;
	margin-top: 3%;
`;

const WhiteCircle = styled.div<SpinnerBarProps>`
	width: 50%;
	height: 50%;
	position: relative;
	bottom: 75%;
	left: 25%;
	border-radius: 100%;
	background: ${({ backgroundColor }) => backgroundColor};
`;
interface SpinnerBarProps {
	size?: number;
	backgroundColor?: string; // A color code in HEX or RGB(a)
}

export default function MainLogo({ size = 50, backgroundColor = "rgba(255, 255, 255, 1)" }: SpinnerBarProps) {
	return (
		<MainContainer size={size}>
			<RedArea />
			<OrangeArea />
			<GreenArea />
			<BlueArea />
			<WhiteCircle backgroundColor={backgroundColor} />
		</MainContainer>
	);
}

/* TODO: It's worth to copy the custom style handling of SpinnerBar */
