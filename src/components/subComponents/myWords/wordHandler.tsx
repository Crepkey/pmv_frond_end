import React from "react";

/* Interfaces */
import { ExtendedWord } from "../../../utils/interfaces";

/* Styles */
import { BsSuitHeart, BsSuitHeartFill, BsPencil, BsTrash } from "react-icons/bs";
import { IoArrowUndoOutline } from "react-icons/io5";
import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
	padding-right: 12px;
`;

interface WordHandlerProps {
	word: ExtendedWord;
}
export default function WordHandler({ word }: WordHandlerProps) {
	function calculateHandlerIcons() {
		if (word.active === true) {
			return (
				<React.Fragment>
					{word.favourite ? (
						<BsSuitHeartFill size={25} style={{ marginRight: 12 }} />
					) : (
						<BsSuitHeart size={25} style={{ marginRight: 12 }} />
					)}
					<BsPencil size={25} style={{ marginRight: 12 }} />
					<BsTrash size={25} />
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					<IoArrowUndoOutline size={25} style={{ marginRight: 12 }} />
					<BsTrash size={25} />
				</React.Fragment>
			);
		}
	}

	return <MainContainer>{calculateHandlerIcons()}</MainContainer>;
}

/* TODO: Handler icons' hover FXs are missing */
