// React
import { useState } from "react";

// Styles
import { colors } from "src/utils/colors";
import styled from "styled-components";

type Position = string | 0;

const MainContainer = styled.div`
	position: relative;
`;

const TitleContainer = styled.div<{
	top: Position;
	right: Position;
	bottom: Position;
	left: Position;
	transformHorizontal: Position;
	transformVertical: Position;
}>`
	position: absolute;
	font-size: 0.8rem;
	width: max-content;
	padding: 4px 8px;
	background: ${colors.tooltipBackground};
	color: ${colors.tooltipFont};
	z-index: 500;
	border-radius: 4px;
	top: ${({ top }) => top};
	right: ${({ right }) => right};
	bottom: ${({ bottom }) => bottom};
	left: ${({ left }) => left};
	transform: ${({ transformHorizontal, transformVertical }) => `translate(${transformHorizontal}, ${transformVertical})`};
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

	let top: Position = "none";
	let right: Position = "none";
	let bottom: Position = "none";
	let left: Position = "none";
	let transformHorizontal: Position = 0;
	let transformVertical: Position = 0;

	switch (position) {
		case "top-start":
			top = "-30px";
			left = 0;
			break;
		case "top":
			top = "-30px";
			left = "50%";
			transformHorizontal = "-50%";
			break;
		case "top-end":
			top = "-30px";
			right = 0;
			break;

		case "right-start":
			top = 0;
			left = "calc(100% + 6px)";
			break;
		case "right":
			top = "50%";
			left = "calc(100% + 6px)";
			transformVertical = "-50%";
			break;
		case "right-end":
			bottom = 0;
			left = "calc(100% + 6px)";
			break;

		case "bottom-start":
			bottom = "-30px";
			left = 0;
			break;
		case "bottom":
			bottom = "-30px";
			left = "50%";
			transformHorizontal = "-50%";
			break;
		case "bottom-end":
			bottom = "-30px";
			right = 0;
			break;

		case "left-start":
			top = 0;
			right = "calc(100% + 6px)";
			break;
		case "left":
			top = "50%";
			right = "calc(100% + 6px)";
			transformVertical = "-50%";
			break;
		case "left-end":
			bottom = 0;
			right = "calc(100% + 6px)";
			break;

		default:
			break;
	}

	if (displayOn) {
		return (
			<MainContainer>
				<TitleContainer
					top={top}
					right={right}
					bottom={bottom}
					left={left}
					transformHorizontal={transformHorizontal}
					transformVertical={transformVertical}>
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
