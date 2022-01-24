import { useState } from "react";

// Style
import { colors } from "src/utils/colors";
import styled from "styled-components";

const MainContainer = styled.div`
	position: relative;
`;

const ListContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	width: max-content;
	padding: 8px;
	z-index: 500;
	border-radius: 8px;
	top: 37px;
	left: 50%;
	transform: translate(-50%, 0);
	background-image: linear-gradient(to top, ${colors.headerGradientDarker}, ${colors.headerGradientDark}, ${colors.headerGradientLight});
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border: 1px solid ${colors.border};
`;

const Title = styled.div`
	text-decoration: none;
	color: ${colors.inactiveFont};
	font-weight: 550;
	margin-right: 8px;
	padding: 8px;
	border-bottom: 3px rgba(0, 0, 0, 0) solid; // invisible border, but needed for the fix height
	:hover {
		cursor: pointer;
		color: ${colors.activeFont};
		border-bottom: 3px ${colors.activeBorder} solid;
	}
`;

interface DropDownProps {
	children: JSX.Element | JSX.Element[];
	title: string;
}

export default function DropDown({ children, title }: DropDownProps) {
	const [displayOn, setDisplayOn] = useState<boolean>(false);

	if (displayOn) {
		return (
			<MainContainer onMouseLeave={() => setDisplayOn(false)}>
				<Title>{title}</Title>
				<ListContainer onClick={() => setDisplayOn(false)}>{children}</ListContainer>
			</MainContainer>
		);
	}
	return (
		<MainContainer onMouseEnter={() => setDisplayOn(true)}>
			<Title>{title}</Title>
		</MainContainer>
	);
}
