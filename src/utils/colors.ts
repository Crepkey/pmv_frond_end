import { ColorCodeType } from "./interfaces";

interface Colors {
	[name: string]: ColorCodeType;
}

export const colors: Colors = {
	//FONTS
	buttonFont: "rgba(255, 255, 255, 1)",
	activeFont: "rgba(80, 80, 80, 1)",
	inactiveFont: "rgba(150, 150, 150, 1)",
	placeholderFont: "rgba(225, 225, 225, 1)",
	labelFont: "rgba(135, 135, 135, 1)",
	tooltipFont: "rgba(255, 255, 255, 1)",
	activeCardFont: "rgba(255, 255, 255, 1)",

	// BUTTONS & ICONS
	acceptButtonBackground: "rgba(81, 203, 51, 1)",
	acceptButtonGradientLight: "rgba(165, 204, 82, 1)",
	acceptButtonGradientDark: "rgba(126, 156, 57, 1)",

	rejectButtonBackground: "rgba(203, 51, 93, 1)",
	rejectButtonGradientLight: "rgba(243, 60, 112, 1)",
	rejectButtonGradientDark: "rgba(161, 40, 75, 1)",

	generalButtonBackground: "rgba(86, 171, 227, 1)",
	generalButtonGradientLight: "rgba(129, 205, 255, 1)",
	generalButtonGradientDark: "rgba(93, 143, 236, 1)",

	buttonBackground: "rgba(86, 171, 227, 1)", // TODO delete, check usages
	buttonGradientLight: "rgba(129, 205, 255, 1)",
	buttonGradientDark: "rgba(93, 143, 236, 1)",

	iconFill: "rgba(163, 163, 163, 1)",

	// BACKGROUNDS
	background: "rgba(255, 255, 255, 1)",
	blockBackground: "rgba(247, 246, 252, 1)",
	activeBackground: "rgba(255, 255, 255, 1)",
	inactiveBackground: "rgba(236, 235, 240, 1)",
	tagBackground: "rgba(236, 235, 240, 1)",

	headerGradientDarker: "rgba(216, 215, 221, 1)",
	headerGradientDark: "rgba(219, 222, 231, 1)",
	headerGradientLight: "rgba(226, 229, 235, 1)",

	rowBackgroundDark: "rgba(236, 235, 240, 1)",
	rowBackgroundLight: "rgba(255, 255, 255, 1)",

	tooltipBackground: "rgba(80, 80, 80, 1)",

	activeCardBackground1: "rgba(222, 89, 86, 0.8)",
	activeCardBackground2: "rgba(255, 143, 35, 0.8)",
	activeCardBackground3: "rgba(11, 201, 0, 0.8)",
	activeCardBackground4: "rgba(86, 171, 227, 0.8)",
	inactiveCardBackground: "rgba(242, 241, 247, 1)",

	// BORDERS
	activeBorder: "rgba(86, 171, 227, 1)",
	selectedBorder: "rgba(86, 171, 227, .5)",
	border: "rgba(177, 188, 199, 1)",
	rowBorder: "rgba(225, 225, 225, 1)",
	inputBorder: "rgba(216, 215, 221, 1)",

	//STANDARD COLORS
	info: "rgba(86, 171, 227, 1)",
	success: "rgba(11, 201, 0, 1)",
	warning: "rgba(255, 143, 35, 1)",
	error: "rgba(243, 78, 123, 1)",

	// PROGRESS
	progressRed: "rgba(222, 89, 86, 1)",
	progressOrange: "rgba(255, 143, 35, 1)",
	progressBlue: "rgba(86, 171, 227, 1)",
	progressGreen: "rgba(11, 201, 0, 1)",
};
