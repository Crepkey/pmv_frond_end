import { useState, useEffect, useContext } from "react";
import { Route, Link } from "react-router-dom";

/* Context */
import { AppContext } from "../../../AppContext";

/* Interfaces */
import { WordOperationType } from "../../../utils/interfaces";
import { Word, ServerError } from "sharedInterfaces";

/* Icons */
import { BsFilter, BsChevronLeft, BsChevronRight, BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

/* Styles */
import { colors } from "../../../utils/colors";
import styled from "styled-components";

/* Components */
import Words from "../../subComponents/myWords/Words";
import Modal from "../../generalComponents/Modal";
import EditWord from "../../subComponents/myWords/EditWord";
import { generateID } from "src/utils/utils";

const MainContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	min-width: 0;
	min-height: 0;
`;

const Title = styled.div`
	display: flex;
	justify-content: center;
	padding: 24px;
	font-weight: 600;
	font-size: 1.5rem;
`;

const TableContainer = styled.div`
	display: flex;
	flex: 1;
	min-width: 0;
	min-height: 0;
	padding: 12px 24px 12px 24px;
`;

const TableBlock = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	min-width: 0;
	min-height: 0;
	padding: 32px;
	background: ${colors.blockBackground};
	border-radius: 24px;
`;

const WordContainer = styled.div`
	display: flex;
	flex: 10;
	flex-direction: column;
	overflow: scroll;
	min-width: 0;
	min-height: 0;
	border: 1px solid ${colors.border};
	border-radius: 16px;
	background: ${colors.background};
`;

export default function Scoreboard() {
	return (
		<MainContainer>
			<Title>THE RESULT OF YOUR PRACTICE</Title>
			<TableContainer>
				<TableBlock>
					<WordContainer></WordContainer>
				</TableBlock>
			</TableContainer>
		</MainContainer>
	);
}
