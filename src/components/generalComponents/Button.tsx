// Interfaces
import { ButtonColorType, ColorType } from "src/utils/interfaces";

// Styles
import { ColoredButton } from "./styles";
import { colors } from "src/utils/colors";

// Util
import get from "lodash/get";
import isString from "lodash/isString";

interface ButtonProps {
	title: string;
	onClick: (args?: any) => void;
	color?: ColorType; // you can either choose from the basic colors of the application or you can customize the button with the colors object
	colors?: ButtonColorType;
}

function getColors(color: ColorType) {
	const startingString = color === "red" ? "reject" : color === "blue" ? "general" : "accept";

	const result: ButtonColorType = {
		background: get(colors, `${startingString}ButtonBackground`),
		gradiendLight: get(colors, `${startingString}ButtonGradientLight`),
		gradientDark: get(colors, `${startingString}ButtonGradientDark`),
	};

	return result;
}

export default function Button({ onClick, title, color, colors }: ButtonProps) {
	return (
		<ColoredButton onClick={onClick} buttonColors={isString(color) ? getColors(color) : (colors as ButtonColorType)}>
			{title}
		</ColoredButton>
	);
}
