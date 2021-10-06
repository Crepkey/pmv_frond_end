import React from "react";

/* Styles */
import styled from "styled-components";

const RedArea = styled.div`
	width: 50px;
	height: 50px;
	background: red;
	border-radius: 100px 0 0;
`;

export default function SpinnerBar() {
	return <RedArea />;
}
