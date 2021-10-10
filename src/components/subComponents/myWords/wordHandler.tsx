/* Interfaces */
import { ExtendedWord } from "../../../utils/interfaces";

/* Styles */
import { BsSuitHeart, BsSuitHeartFill, BsPencil, BsTrash } from "react-icons/bs";
import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-between;
	padding-right: 12px;
`;

interface WordHandlerProps {
	word: ExtendedWord;
}
export default function WordHandler({ word }: WordHandlerProps) {
	return (
		<MainContainer>
			{word.favourite ? <BsSuitHeartFill size={25} /> : <BsSuitHeart size={25} />}
			<BsPencil size={25} />
			<BsTrash size={25} />
		</MainContainer>
	);
}

/* TODO: Handler icons' hover FXs are missing */
