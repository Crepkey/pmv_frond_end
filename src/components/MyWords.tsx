import React from "react";

/* Icons */
import { CgSpinnerTwo } from "react-icons/cg";
import {
	BsSuitHeartFill,
	BsSuitHeart,
	BsTrash,
	BsFilter,
	BsChevronLeft,
	BsChevronRight,
	BsChevronDoubleLeft,
	BsChevronDoubleRight,
	BsPencil,
} from "react-icons/bs";

/* Styles */
import { colors } from "./colors";
import styled from "styled-components";
import SpinnerBar from "./SpinnerBar";

const MainContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	min-width: 0;
	min-height: 0;
`;

const ControlBarContainer = styled.div`
	display: flex;
	padding: 24px 24px 12px 24px;
`;

const AddNewWordButton = styled.button`
	display: inline-block;
	cursor: pointer;
	color: ${colors.buttonFont};
	font-size: 1rem;
	font-weight: bold;
	padding: 6px 24px;
	text-decoration: none;
	border-radius: 16px;
	border: none;
	background-color: ${colors.acceptButtonBackground};
	:hover {
		background: linear-gradient(to bottom, ${colors.acceptButtonGradientLight} 5%, ${colors.acceptButtonGradientDark} 100%);
		background-color: ${colors.acceptButtonGradientLight};
	}
	:active {
		position: relative;
		top: 1px;
	}
`;

const SearchContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
`;

const SearchBar = styled.input`
	width: 32%;
	padding: 0 16px 0 16px;
	border: 1px ${colors.border} solid;
	border-radius: 16px;
`;

const FilterButton = styled.button`
	display: inline-block;
	cursor: pointer;
	color: ${colors.buttonFont};
	font-family: Arial;
	font-size: 15px;
	font-weight: 550;
	text-decoration: none;
	padding: 2px 12px 0 12px;
	margin-left: 16px;
	background-color: ${colors.buttonBackground};
	border-radius: 16px;
	border: none;
	:hover {
		background: linear-gradient(to bottom, ${colors.buttonGradientLight} 5%, ${colors.buttonGradientDark} 100%);
		background-color: ${colors.buttonGradientLight};
	}
	:active {
		position: relative;
		top: 1px;
	}
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

const TabContainer = styled.div`
	display: flex;
	flex: 1;
`;

const Tab = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	font-weight: 550;
	border: 1px solid ${colors.border};
	border-radius: 8px 8px 0 0;
	background: ${colors.background};
	:hover {
		color: ${colors.activeFont};
		border-bottom: 3px ${colors.activeBorder} solid;
	}
`;

const WordContainer = styled.div`
	display: flex;
	flex: 10;
	flex-direction: column;
	overflow: scroll;
	min-width: 0;
	min-height: 0;
	border-left: 1px solid ${colors.border};
	border-right: 1px solid ${colors.border};
	border-bottom: 1px solid ${colors.border};
	border-radius: 0 0 16px 16px;
	background: ${colors.background};
`;

const WordRowWhite = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 2rem;
	padding: 3px 12px 3px 12px;
	background: ${colors.rowBackgroundLight};
	border-bottom: 1px ${colors.rowBorder} solid;
`;
const WordRowGray = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 2rem;
	padding: 3px 12px 3px 12px;
	background: ${colors.rowBackgroundDark};
	border-bottom: 1px ${colors.rowBorder} solid;
`;

const EnglishWord = styled.div`
	display: flex;
	flex: 2;
	padding-right: 12px;
	font-weight: 450;
`;

const HungarianWords = styled.div`
	display: flex;
	flex: 5;
	padding-right: 12px;
	font-weight: 300;
`;

const MemoryLevel = styled.div`
	display: flex;
	flex: 2;
	align-items: center;
	padding-right: 12px;
`;

const MemoryState = styled.div`
	font-weight: 350;
`;

const WordHandler = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-between;
	padding-right: 12px;
`;

const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 12px 24px 24px 24px;
`;

const PaginationButton = styled.button`
	display: inline-block;
	cursor: pointer;
	color: ${colors.buttonFont};
	font-family: Arial;
	font-size: 15px;
	font-weight: 550;
	text-decoration: none;
	padding: 2px 12px 0 12px;
	margin: 0 8px 0 8px;
	background-color: ${colors.buttonBackground};
	border-radius: 16px;
	border: none;
	:hover {
		background: linear-gradient(to bottom, ${colors.buttonGradientLight} 5%, ${colors.buttonGradientDark} 100%);
		background-color: ${colors.buttonGradientLight};
	}
	:active {
		position: relative;
		top: 1px;
	}
`;

const PageNumber = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.25rem;
	padding: 0 8px 0 8px;
`;

export default function MyWords() {
	return (
		<MainContainer>
			<ControlBarContainer>
				<AddNewWordButton>Add new word</AddNewWordButton>
				<SearchContainer>
					<SearchBar type="search" id="lname" name="lname" placeholder="Type here for searching" />
					<FilterButton>
						<BsFilter size={24} />
					</FilterButton>
				</SearchContainer>
			</ControlBarContainer>
			<TableContainer>
				<TableBlock>
					<TabContainer>
						<Tab>Active Words</Tab>
						<Tab style={{ backgroundColor: `${colors.inactiveBackground}`, color: `${colors.inactiveFont}` }}>Deleted Words</Tab>
					</TabContainer>
					<WordContainer>
						<WordRowWhite>
							<EnglishWord>English Word 1</EnglishWord>
							<HungarianWords>Magyar szó 1, Magyar szó 2</HungarianWords>
							<MemoryLevel>
								<SpinnerBar size={24} status={34} style={{ margin: "0 12px 0 0" }} />
								<MemoryState>Long Term Memory</MemoryState>
							</MemoryLevel>
							<WordHandler>
								<BsSuitHeartFill size={25} />
								<BsPencil size={25} />
								<BsTrash size={25} />
							</WordHandler>
						</WordRowWhite>
						<WordRowGray>
							<EnglishWord>Longer English Word about...</EnglishWord>
							<HungarianWords>Bélapátfalva, Budapest, Ugod, Pápa, Harci majom, Elkelkáposztástalanítottátok</HungarianWords>
							<MemoryLevel>
								<SpinnerBar size={24} status={96} style={{ margin: "0 12px 0 0", background: `${colors.rowBackgroundDark}` }} />
								<MemoryState>Long Term Memory</MemoryState>
							</MemoryLevel>
							<WordHandler>
								<BsSuitHeart size={25} />
								<BsPencil size={25} />
								<BsTrash size={25} />
							</WordHandler>
						</WordRowGray>
					</WordContainer>
				</TableBlock>
			</TableContainer>
			<PaginationContainer>
				<PaginationButton>
					<BsChevronDoubleLeft />
				</PaginationButton>
				<PaginationButton>
					<BsChevronLeft />
				</PaginationButton>
				<PageNumber>2</PageNumber>
				<PaginationButton>
					<BsChevronRight />
				</PaginationButton>
				<PaginationButton>
					<BsChevronDoubleRight />
				</PaginationButton>
			</PaginationContainer>
		</MainContainer>
	);
}
