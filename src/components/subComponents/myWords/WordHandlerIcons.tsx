import { useState, useContext, Fragment } from "react";

/* Interfaces */
import { Word } from "../../../utils/interfaces";

/* Styles */
import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { IoArrowUndoOutline, IoArrowUndo } from "react-icons/io5";
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
	saveWord(word: Word): void;
	deleteWord(word: Word): void;
	restoreWord?(word: Word): void;
}

/* REFACTOR: I have to split this compenent in two */
export default function WordHandlerIcons({ word, saveWord, deleteWord, restoreWord }: WordHandlerProps) {
	const [isRestoreIconHovered, setRestoreIconHover] = useState(false);
	const [isTrashIconHovered, setTrashIconHover] = useState(false);
	const [isFavoriteIconHovered, setFavoriteIconHover] = useState(false);
	const [isEditIconHovered, setEditIconHover] = useState(false);
	const { setActiveModal: setIsModalOpen, setWordForEditing } = useContext(AppContext);

	function toggleWordFavorite() {
		word.favourite = !word.favourite;
		saveWord(word);
	}

	function calculateHandlerIcons() {
		if (word.deletionDate === null) {
			return (
				<Fragment>
					{/* FAVORITE */}
					{word.favourite ? (
						<div
							onMouseEnter={() => setFavoriteIconHover(true)}
							onMouseLeave={() => setFavoriteIconHover(false)}
							onClick={() => toggleWordFavorite()}>
							{isFavoriteIconHovered ? (
								<BsSuitHeartFill size={25} style={{ marginRight: 12 }} />
							) : (
								<BsSuitHeart size={25} style={{ marginRight: 12 }} />
							)}
						</div>
					) : (
						<div
							onMouseEnter={() => setFavoriteIconHover(true)}
							onMouseLeave={() => setFavoriteIconHover(false)}
							onClick={() => toggleWordFavorite()}>
							{isFavoriteIconHovered ? (
								<BsSuitHeart size={25} style={{ marginRight: 12 }} />
							) : (
								<BsSuitHeartFill size={25} style={{ marginRight: 12 }} />
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

					<div onMouseEnter={() => setTrashIconHover(true)} onMouseLeave={() => setTrashIconHover(false)} onClick={() => deleteWord(word)}>
						{isTrashIconHovered ? <BsTrashFill size={25} /> : <BsTrash size={25} />}
					</div>
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					{/* DELETED WORDS */}

					<div
						onMouseEnter={() => setRestoreIconHover(true)}
						onMouseLeave={() => setRestoreIconHover(false)}
						onClick={() => {
							return restoreWord ? restoreWord(word) : () => {};
						}}>
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
				</Fragment>
			);
		}
	}

	return <MainContainer>{calculateHandlerIcons()}</MainContainer>;
}
/* REFACTOR: Icons --> their standalone comps */
