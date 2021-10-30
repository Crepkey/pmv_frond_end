import { useState, useContext, Fragment } from "react";

/* Interfaces */
import { WordOperationType } from "../../../utils/interfaces";
import { Word } from "sharedInterfaces";

/* Styles */
import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { IoArrowUndoOutline, IoArrowUndo } from "react-icons/io5";
import { BsTrash, BsTrashFill } from "react-icons/bs";

const MainContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
	padding-right: 12px;
	color: ${colors.iconFill};
`;

interface DeletedWordIconsProps {
	word: Word;
	deleteWord(word: Word): void;
	updateWord(word: Word, operation: WordOperationType): void;
}

export default function DeletedWordIcons({ word, deleteWord, updateWord }: DeletedWordIconsProps) {
	const [isRestoreIconHovered, setRestoreIconHover] = useState(false);
	const [isTrashIconHovered, setTrashIconHover] = useState(false);

	return (
		<MainContainer>
			<div
				onMouseEnter={() => setRestoreIconHover(true)}
				onMouseLeave={() => setRestoreIconHover(false)}
				onClick={() => updateWord(word, "restore")}>
				{isRestoreIconHovered ? (
					<IoArrowUndo size={25} style={{ marginRight: 12 }} />
				) : (
					<IoArrowUndoOutline size={25} style={{ marginRight: 12 }} />
				)}
			</div>
			<div
				onMouseEnter={() => setTrashIconHover(true)}
				onMouseLeave={() => setTrashIconHover(false)}
				onClick={() => {
					deleteWord(word);
				}}>
				{isTrashIconHovered ? <BsTrashFill size={25} /> : <BsTrash size={25} />}
			</div>
		</MainContainer>
	);
}
