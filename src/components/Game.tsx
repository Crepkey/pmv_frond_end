import React from "react";

// Styles
import styled from "styled-components";

// Components
import PlayingCard from "./PlayingCard";

const Body = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	min-width: 0;
	min-height: 0;
`;

export default function Game() {
	return (
		<Body>
			<PlayingCard />
		</Body>
	);
}
