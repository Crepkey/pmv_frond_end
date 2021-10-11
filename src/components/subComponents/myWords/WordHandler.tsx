import { useState, Fragment } from "react";

/* Interfaces */
import { ExtendedWord } from "../../../utils/interfaces";

/* Styles */
import { BsSuitHeart, BsSuitHeartFill, BsPencil, BsPencilFill, BsTrash, BsTrashFill } from "react-icons/bs";
import { IoArrowUndoOutline, IoArrowUndo } from "react-icons/io5";
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
	const [isRestoreIconHovered, setRestoreIconHover] = useState(false);
	const [isTrashIconHovered, setTrashIconHover] = useState(false);
	const [isFavoriteIconHovered, setFavoriteIconHover] = useState(false);
	const [isEditIconHovered, setEditIconHover] = useState(false);

	function calculateHandlerIcons() {
		if (word.active === true) {
			return (
				<Fragment>
					{word.favourite ? (
						<div onMouseEnter={() => setFavoriteIconHover(true)} onMouseLeave={() => setFavoriteIconHover(false)}>
							{isFavoriteIconHovered ? (
								<BsSuitHeartFill size={25} style={{ marginRight: 12 }} />
							) : (
								<BsSuitHeart size={25} style={{ marginRight: 12 }} />
							)}
						</div>
					) : (
						<div onMouseEnter={() => setFavoriteIconHover(true)} onMouseLeave={() => setFavoriteIconHover(false)}>
							{isFavoriteIconHovered ? (
								<BsSuitHeart size={25} style={{ marginRight: 12 }} />
							) : (
								<BsSuitHeartFill size={25} style={{ marginRight: 12 }} />
							)}
						</div>
					)}
					<div onMouseEnter={() => setEditIconHover(true)} onMouseLeave={() => setEditIconHover(false)}>
						{isEditIconHovered ? (
							<BsPencilFill size={25} style={{ marginRight: 12 }} />
						) : (
							<BsPencil size={25} style={{ marginRight: 12 }} />
						)}
					</div>
					<div onMouseEnter={() => setTrashIconHover(true)} onMouseLeave={() => setTrashIconHover(false)}>
						{isTrashIconHovered ? <BsTrashFill size={25} /> : <BsTrash size={25} />}
					</div>
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					<div onMouseEnter={() => setRestoreIconHover(true)} onMouseLeave={() => setRestoreIconHover(false)}>
						{isRestoreIconHovered ? (
							<IoArrowUndo size={25} style={{ marginRight: 12 }} />
						) : (
							<IoArrowUndoOutline size={25} style={{ marginRight: 12 }} />
						)}
					</div>
					<div onMouseEnter={() => setTrashIconHover(true)} onMouseLeave={() => setTrashIconHover(false)}>
						{isTrashIconHovered ? <BsTrashFill size={25} /> : <BsTrash size={25} />}
					</div>
				</Fragment>
			);
		}
	}

	return <MainContainer>{calculateHandlerIcons()}</MainContainer>;
}
/* REFACTOR: Icons --> their standalone comps */
