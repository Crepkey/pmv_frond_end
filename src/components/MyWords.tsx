import React from 'react';

/* Icons */
import { CgSpinnerTwo } from 'react-icons/cg';
import { BsSuitHeartFill, BsSuitHeart, BsTrash, BsFilter } from "react-icons/bs";
import { MdEdit } from "react-icons/md";


/* Styles */
import Styled from 'styled-components';

const MainContainer = Styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    padding: 10px;
`

const ControlBar = Styled.div`
    display: flex;
    padding: 16px;
`

const AddNewWordButton = Styled.button`
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:1rem;
	font-weight: bold;
	padding:6px 24px;
	text-decoration:none;
	border-radius:16px;
	border: none;
	background-color:#51cb33;
    :hover {
	background:linear-gradient(to bottom, #a5cc52 5%, #7e9c39 100%);
	background-color:#a5cc52;
    }
    :active {
        position:relative;
        top:1px;
    }
`

const SearchContainer = Styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`

const SearchBar = Styled.input`
    width: 32%;
    padding: 0 16px 0 16px;
    border: 1px #b1bcc7 solid;
    border-radius: 16px;
`

const FilterButton = Styled.button`
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight: 550;
	text-decoration:none;
	padding: 2px 12px 0 12px;
    margin-left: 16px;
	background-color:#56abe3;
	border-radius:16px;
	border: none;
    :hover {
	background:linear-gradient(to bottom, #81cdff 5%, #5d8fec 100%);
	background-color:#81cdff;
    }
    :active {
        position:relative;
        top:1px;
    }
`

const TableMainContainer = Styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    padding: 32px;
    margin: 16px;
    background: #F7F6FC;
    border-radius: 24px;  
`

const TabContainer = Styled.div`
    display: flex;
    flex: 1;
`

const Tab = Styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-weight: 550;
    border: 1px solid #b1bcc7;
    border-radius: 8px 8px 0 0;
    background: white; /* Use this #e9e9e9 for inactive tabs in the later developments*/
    :hover{
        color: #27e627;
    }
`

const WordContainer = Styled.div`
    display: flex;
    flex: 10;
    flex-direction: column;
    overflow: scroll;
    min-width: 0;
    min-height: 0;
    border-left: 1px solid #b1bcc7;
    border-right: 1px solid #b1bcc7;
    border-bottom: 1px solid #b1bcc7;
    border-radius: 0 0 16px 16px;
`

const WordRowWhite = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 2rem;
    padding: 3px 10px 3px 10px;
    background: white;
    border-bottom: 1px #e1e1e1 solid;
`
const WordRowGray = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 2rem;
    padding: 3px 10px 3px 10px;
    background: #ecebf0;
    border-bottom: 1px #c7c7c7 solid;
`

const EnglishWord = Styled.div`
    display: flex;
    flex: 2;
    padding: 0 10px 0 10px; 
    font-weight: 450;
`

const HungarianWords = Styled.div`
    display: flex;
    flex: 5;
    padding: 0 10px 0 10px; 
    font-weight: 300;
`

const MemoryLevel = Styled.div`
    display: flex;
    flex: 2;
    align-items: center;
    padding: 0 10px 0 10px; 
`

const MemoryState = Styled.div`
    font-weight: 350;
`

const WordHandler = Styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 0 10px 0 10px; 
`

const Pagination = Styled.div`
    display: flex;
    justify-content: center;
`


export default function MyWords() {
    return (
        <MainContainer>
            <ControlBar>
                <AddNewWordButton>Add new word</AddNewWordButton>
                <SearchContainer>
                    <SearchBar type="search" id="lname" name="lname" placeholder="Type here for searching" />
                    <FilterButton><BsFilter size={24} /></FilterButton>
                </SearchContainer>
            </ControlBar>
            <TableMainContainer>
                <TabContainer>
                    <Tab>Active Words</Tab>
                    <Tab style={{ backgroundColor: '#ECEBF1' }}>Deleted Words</Tab>
                </TabContainer>
                <WordContainer>

                    <WordRowWhite>
                        <EnglishWord>English Word 1</EnglishWord>
                        <HungarianWords>
                            Magyar szó 1,
                            Magyar szó 2
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeartFill size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowWhite>
                    <WordRowGray>
                        <EnglishWord>Longer English Word about...</EnglishWord>
                        <HungarianWords>
                            Bélapátfalva,
                            Budapest,
                            Ugod,
                            Pápa,
                            Harci majom,
                            Elkelkáposztástalanítottátok
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeart size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowGray>

                    <WordRowWhite>
                        <EnglishWord>English Word 1</EnglishWord>
                        <HungarianWords>
                            Magyar szó 1,
                            Magyar szó 2
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeartFill size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowWhite>
                    <WordRowGray>
                        <EnglishWord>Longer English Word about...</EnglishWord>
                        <HungarianWords>
                            Bélapátfalva,
                            Budapest,
                            Ugod,
                            Pápa,
                            Harci majom,
                            Elkelkáposztástalanítottátok
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeart size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowGray>

                    <WordRowWhite>
                        <EnglishWord>English Word 1</EnglishWord>
                        <HungarianWords>
                            Magyar szó 1,
                            Magyar szó 2
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeartFill size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowWhite>
                    <WordRowGray>
                        <EnglishWord>Longer English Word about...</EnglishWord>
                        <HungarianWords>
                            Bélapátfalva,
                            Budapest,
                            Ugod,
                            Pápa,
                            Harci majom,
                            Elkelkáposztástalanítottátok
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeart size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowGray>

                    <WordRowWhite>
                        <EnglishWord>English Word 1</EnglishWord>
                        <HungarianWords>
                            Magyar szó 1,
                            Magyar szó 2
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeartFill size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowWhite>
                    <WordRowGray>
                        <EnglishWord>Longer English Word about...</EnglishWord>
                        <HungarianWords>
                            Bélapátfalva,
                            Budapest,
                            Ugod,
                            Pápa,
                            Harci majom,
                            Elkelkáposztástalanítottátok
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeart size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowGray>

                    <WordRowWhite>
                        <EnglishWord>English Word 1</EnglishWord>
                        <HungarianWords>
                            Magyar szó 1,
                            Magyar szó 2
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeartFill size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowWhite>
                    <WordRowGray>
                        <EnglishWord>Longer English Word about...</EnglishWord>
                        <HungarianWords>
                            Bélapátfalva,
                            Budapest,
                            Ugod,
                            Pápa,
                            Harci majom,
                            Elkelkáposztástalanítottátok
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeart size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowGray>

                    <WordRowWhite>
                        <EnglishWord>English Word 1</EnglishWord>
                        <HungarianWords>
                            Magyar szó 1,
                            Magyar szó 2
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeartFill size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowWhite>
                    <WordRowGray>
                        <EnglishWord>Longer English Word about...</EnglishWord>
                        <HungarianWords>
                            Bélapátfalva,
                            Budapest,
                            Ugod,
                            Pápa,
                            Harci majom,
                            Elkelkáposztástalanítottátok
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeart size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowGray>

                    <WordRowWhite>
                        <EnglishWord>English Word 1</EnglishWord>
                        <HungarianWords>
                            Magyar szó 1,
                            Magyar szó 2
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeartFill size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowWhite>
                    <WordRowGray>
                        <EnglishWord>Longer English Word about...</EnglishWord>
                        <HungarianWords>
                            Bélapátfalva,
                            Budapest,
                            Ugod,
                            Pápa,
                            Harci majom,
                            Elkelkáposztástalanítottátok
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeart size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowGray>

                    <WordRowWhite>
                        <EnglishWord>English Word 1</EnglishWord>
                        <HungarianWords>
                            Magyar szó 1,
                            Magyar szó 2
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeartFill size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowWhite>
                    <WordRowGray>
                        <EnglishWord>Longer English Word about...</EnglishWord>
                        <HungarianWords>
                            Bélapátfalva,
                            Budapest,
                            Ugod,
                            Pápa,
                            Harci majom,
                            Elkelkáposztástalanítottátok
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeart size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowGray>

                    <WordRowWhite>
                        <EnglishWord>English Word 1</EnglishWord>
                        <HungarianWords>
                            Magyar szó 1,
                            Magyar szó 2
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeartFill size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowWhite>
                    <WordRowGray>
                        <EnglishWord>Longer English Word about...</EnglishWord>
                        <HungarianWords>
                            Bélapátfalva,
                            Budapest,
                            Ugod,
                            Pápa,
                            Harci majom,
                            Elkelkáposztástalanítottátok
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeart size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowGray>

                    <WordRowWhite>
                        <EnglishWord>English Word 1</EnglishWord>
                        <HungarianWords>
                            Magyar szó 1,
                            Magyar szó 2
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeartFill size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowWhite>
                    <WordRowGray>
                        <EnglishWord>Longer English Word about...</EnglishWord>
                        <HungarianWords>
                            Bélapátfalva,
                            Budapest,
                            Ugod,
                            Pápa,
                            Harci majom,
                            Elkelkáposztástalanítottátok
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeart size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowGray>

                    <WordRowWhite>
                        <EnglishWord>English Word 1</EnglishWord>
                        <HungarianWords>
                            Magyar szó 1,
                            Magyar szó 2
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeartFill size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowWhite>
                    <WordRowGray>
                        <EnglishWord>Longer English Word about...</EnglishWord>
                        <HungarianWords>
                            Bélapátfalva,
                            Budapest,
                            Ugod,
                            Pápa,
                            Harci majom,
                            Elkelkáposztástalanítottátok
                        </HungarianWords>
                        <MemoryLevel>
                            <CgSpinnerTwo size={30} style={{ marginRight: '10px' }} />
                            <MemoryState>Long Term Memory</MemoryState>
                        </MemoryLevel>
                        <WordHandler>
                            <BsSuitHeart size={25} />
                            <MdEdit size={25} />
                            <BsTrash size={25} />
                        </WordHandler>
                    </WordRowGray>


                </WordContainer>




            </TableMainContainer>
            <Pagination>
                <FilterButton>|||</FilterButton>
                <FilterButton>|||</FilterButton>
                <FilterButton>|||</FilterButton>
            </Pagination>
        </MainContainer>
    )
}