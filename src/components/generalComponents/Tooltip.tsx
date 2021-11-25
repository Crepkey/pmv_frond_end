// React
import { useState } from "react";

// Styles
import { colors } from "src/utils/colors";
import styled from "styled-components";

const MainContainer = styled.div`
	position: relative;
`;

const TitleContainer = styled.div`
	position: absolute;
	top: -30px;
	right: 0;
	font-size: 0.8rem;
	width: max-content;
	padding: 4px 8px;
	background: ${colors.tooltipBackground};
	color: ${colors.tooltipFont};
	z-index: 500;
	border-radius: 4px;
`;

interface TooltipProps {
	title: string;
	children: React.ReactNode;
}

export default function Tooltip({ title, children }: TooltipProps) {
	const [displayOn, setDisplayOn] = useState<boolean>(false);

	if (displayOn) {
		return (
			<MainContainer>
				<TitleContainer>{title}</TitleContainer>
				<div onMouseLeave={() => setDisplayOn(false)}>{children}</div>
			</MainContainer>
		);
	}
	return <div onMouseEnter={() => setDisplayOn(true)}>{children}</div>;
}
