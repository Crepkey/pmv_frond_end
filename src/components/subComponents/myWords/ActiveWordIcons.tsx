import { useState, useContext, Fragment } from "react";

/* Interfaces */
import { WordOperationType } from "../../../utils/interfaces";
import {Word} from "sharedInterfaces";

/* Styles */
import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { BsSuitHeart, BsSuitHeartFill, BsPencil, BsPencilFill, BsTrash, BsTrashFill } from "react-icons/bs";
import { AppContext } from "../../../AppContext";

const MainContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
	padding-right: 12px;
	color: ${colors.iconFill};
`;

interface WordHandlerProps {
	word: Word;
	updateWord(updatedWord: Word, operation: WordOperationType): void;
}

export default function ActiveWordIcons({ word, updateWord }: WordHandlerProps) {
	const [isTrashIconHovered, setTrashIconHover] = useState(false);
	const [isFavoriteIconHovered, setFavoriteIconHover] = useState(false);
	const [isEditIconHovered, setEditIconHover] = useState(false);
	const { setActiveModal: setIsModalOpen, setWordForEditing } = useContext(AppContext);

	function toggleWordFavorite() {
		word.favourite = !word.favourite;
		updateWord(word, "edit");
	}

	return (
		<MainContainer>
			{/* FAVORITE */}

			{word.favourite ? (
				<div
					onClick={() => toggleWordFavorite()}
					onMouseEnter={() => setFavoriteIconHover(true)}
					onMouseLeave={() => setFavoriteIconHover(false)}>
					{isFavoriteIconHovered ? (
						<BsSuitHeart size={25} style={{ marginRight: 12 }} />
					) : (
						<BsSuitHeartFill size={25} style={{ marginRight: 12 }} />
					)}
				</div>
			) : (
				<div
					onClick={() => toggleWordFavorite()}
					onMouseEnter={() => setFavoriteIconHover(true)}
					onMouseLeave={() => setFavoriteIconHover(false)}>
					{isFavoriteIconHovered ? (
						<BsSuitHeartFill size={25} style={{ marginRight: 12 }} />
					) : (
						<BsSuitHeart size={25} style={{ marginRight: 12 }} />
					)}
				</div>
			)}

			{/* EDIT ICON */}

			<div onMouseEnter={() => setEditIconHover(true)} onMouseLeave={() => setEditIconHover(false)}>
				{isEditIconHovered ? (
					<BsPencilFill
						size={25}
						style={{ marginRight: 12 }}
						onClick={() => {
							setWordForEditing(word);
							setIsModalOpen("Edit word");
						}}
					/>
				) : (
					<BsPencil size={25} style={{ marginRight: 12 }} />
				)}
			</div>

			{/* DELETE ICON */}

			<div
				onMouseEnter={() => setTrashIconHover(true)}
				onMouseLeave={() => setTrashIconHover(false)}
				onClick={() => updateWord(word, "delete")}>
				{isTrashIconHovered ? <BsTrashFill size={25} /> : <BsTrash size={25} />}
			</div>
		</MainContainer>
	);
}
