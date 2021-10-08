/* Util */
import get from "lodash/get";

/* Styles */
import styled from "styled-components";
import { colors } from "../../utils/colors";

const MainContainer = styled.div<SpinnerBarStyle>`
	display: flex;
	width: ${({ size }) => size};
	height: ${({ size }) => size};
	min-width: ${({ size }) => size};
	min-height: ${({ size }) => size};
	margin: ${({ margin }) => margin};
	padding: ${({ padding }) => padding};
	flex-wrap: wrap;
`;

const RedArea = styled.div<SpinnerBarState>`
	width: 47%;
	height: 47%;
	background: ${({ red }) => red};
	border-radius: 100% 0 0 0;
	margin-right: 3%;
	margin-bottom: 3%;
`;

const OrangeArea = styled.div<SpinnerBarState>`
	width: 47%;
	height: 47%;
	background: ${({ orange }) => orange};
	border-radius: 0 100% 0 0;
	margin-left: 3%;
	margin-bottom: 3%;
`;

const BlueArea = styled.div<SpinnerBarState>`
	width: 47%;
	height: 47%;
	background: ${({ blue }) => blue};
	border-radius: 0 0 100% 0;
	margin-left: 3%;
	margin-top: 3%;
`;

const GreenArea = styled.div<SpinnerBarState>`
	width: 47%;
	height: 47%;
	background: ${({ green }) => green};
	border-radius: 0 0 0 100%;
	margin-right: 3%;
	margin-top: 3%;
`;

const InnerCircle = styled.div<SpinnerBarStyle>`
	width: 50%;
	height: 50%;
	position: relative;
	bottom: 75%;
	left: 25%;
	border-radius: 100%;
	background: ${({ background }) => background};
`;

interface SpinnerBarStyle {
	size?: string;
	padding?: string; // String is only acceptable in the following format: '0 12px 0 20%'
	margin?: string; // String is only acceptable in the following format: '0 12px 0 20%'
	background?: string; // A color code in HEX or RGB(a)
}

interface SpinnerBarState {
	red: string; //RGBa only
	orange: string; //RGBa only
	blue: string; //RGBa only
	green: string; //RGBa only
}

interface SpinnerBarProps {
	status: number; // This number can be between 0 and 100
	size?: number;
	style?: SpinnerBarStyle;
}

export default function SpinnerBar({ status, size, style }: SpinnerBarProps) {
	const actualState: SpinnerBarState = (function () {
		const result = {
			red: "rgba(0, 0, 0, 0)",
			orange: "rgba(0, 0, 0, 0)",
			blue: "rgba(0, 0, 0, 0)",
			green: "rgba(0, 0, 0, 0)",
		};

		if (status > 0) {
			result.red = `${colors.progressRed}`;
		}
		if (status > 25) {
			result.orange = `${colors.progressOrange}`;
		}
		if (status >= 50) {
			result.blue = `${colors.progressBlue}`;
		}
		if (status >= 75) {
			result.green = `${colors.progressGreen}`;
		}

		return result;
	})();

	style = {
		size: (size ? size : 50) + "px",
		padding: get(style, "padding", "0"),
		margin: get(style, "margin", "0"),
		background: get(style, "background", "rgba(255, 255, 255, 1)"),
	};

	return (
		<MainContainer {...style}>
			<RedArea {...actualState} />
			<OrangeArea {...actualState} />
			<GreenArea {...actualState} />
			<BlueArea {...actualState} />
			<InnerCircle {...style} />
		</MainContainer>
	);
}
