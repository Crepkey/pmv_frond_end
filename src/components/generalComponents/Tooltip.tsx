// React
import { useState } from "react";

// Styles
import { colors } from "src/utils/colors";
import styled from "styled-components";

// Utils
import isNumber from "lodash/isNumber";

const MainContainer = styled.div`
	position: relative;
`;

const TitleContainer = styled.div<{ top: number | null; right: number | null; bottom: number | null; left: number | null }>`
	position: absolute;
	font-size: 0.8rem;
	width: max-content;
	padding: 4px 8px;
	background: ${colors.tooltipBackground};
	color: ${colors.tooltipFont};
	z-index: 500;
	border-radius: 4px;
	top: ${({ top }) => (isNumber(top) ? `${top}px` : "none")};
	right: ${({ right }) => (isNumber(right) ? `${right}px` : "none")};
	bottom: ${({ bottom }) => (isNumber(bottom) ? `${bottom}px` : "none")};
	left: ${({ left }) => (isNumber(left) ? `${left}px` : "none")};
	margin-left: auto;
	margin-right: auto;
`;

type PositionType =
	| "top-start"
	| "top"
	| "top-end"
	| "right-start"
	| "right"
	| "right-end"
	| "bottom-start"
	| "bottom"
	| "bottom-end"
	| "left-start"
	| "left"
	| "left-end";

interface TooltipProps {
	title: string;
	position?: PositionType;
	children: React.ReactNode;
}

export default function Tooltip({ title, position = "top", children }: TooltipProps) {
	const [displayOn, setDisplayOn] = useState<boolean>(false);

	let top = null;
	let right = null;
	let bottom = null;
	let left = null;

	switch (position) {
		case "top-start":
			top = -30;
			left = 0;
			break;
		case "top":
			top = -30;
			left = 0;
			right = 0;
			break;
		case "top-end":
			top = -30;
			right = 0;
			break;

		// TODO rights an lefts

		case "bottom-start":
			bottom = -30;
			left = 0;
			break;
		case "bottom":
			bottom = -30;
			left = 0;
			right = 0;
			break;
		case "bottom-end":
			bottom = -30;
			right = 0;
			break;
		default:
			break;
	}

	if (displayOn) {
		return (
			<MainContainer>
				<TitleContainer top={top} right={right} bottom={bottom} left={left}>
					{title}
				</TitleContainer>
				<div onMouseLeave={() => setDisplayOn(false)}>{children}</div>
			</MainContainer>
		);
	}
	return (
		<MainContainer onMouseEnter={() => setDisplayOn(true)}>
			<div>{children}</div>
		</MainContainer>
	);
}
