import React from 'react';

/* Styles */
import Styled from 'styled-components';

const MainContainer = Styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid red;
`

const ControlBar = Styled.div`
    display: flex;
    padding: 1rem;
    border: 1px solid green;
`

const AddNewWordButton = Styled.button`
    box-shadow:inset 0px 1px 0px 0px #d9fbbe;
	background:linear-gradient(to bottom, #b8e356 5%, #a5cc52 100%);
	background-color:#b8e356;
	border-radius:6px;
	border:1px solid #83c41a;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #86ae47;
    :hover {
	background:linear-gradient(to bottom, #a5cc52 5%, #b8e356 100%);
	background-color:#a5cc52;
    }
    :active {
        position:relative;
        top:1px;
    }
`

const SearchBar = Styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`

const FilterButton = Styled.button`
    box-shadow:inset 0px 1px 0px 0px #bedffb;
	background:linear-gradient(to bottom, #56abe3 5%, #527dcc 100%);
	background-color:##56abe3;
	border-radius:6px;
	border:1px solid #1a69c4;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #4751ae;
    margin-left: 1rem;
    :hover {
	background:linear-gradient(to bottom, #527dcc 5%, ##56abe3 100%);
	background-color:#527dcc;
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
    padding: 1rem;
    margin: 2rem;
    background-image: linear-gradient(to right top, #3f444b, #596468, #798685, #9ea8a2, #c7cac1);
    border-radius: 10px;
    max-height: 70%;
    
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
    border: 1px solid #4d5053;
    border-radius: 10px 10px 0 0;
    background-image: linear-gradient(to right top, #3f444b, #596468, #798685, #9ea8a2, #c7cac1);
    :hover{
        background-image: linear-gradient(to left top, #3f444b, #596468, #798685, #9ea8a2, #c7cac1);
        color: #27e627;
    }
`

const WordContainer = Styled.div`
    display: flex;
    flex: 10;
    flex-direction: column;
    overflow: scroll;
    border-left: 1px solid #4d5053;
    border-right: 1px solid #4d5053;
    border-bottom: 1px solid #4d5053;
    border-radius: 0 0 10px 10px;
`

const WordRow = Styled.div`
    display: flex;
    flex: 1;
    min-height: 2rem;
    background-image: linear-gradient(to right top, #7f848b, #8c969a, #9ca8a7, #b0b9b4, #c7cac1);
    border-bottom: 1px #d0d1d1 solid;
`

const Pagination = Styled.div`
    display: flex;
    border: 1px blue solid;
    justify-content: center;
`


export default function MyWords() {
    return (
        <MainContainer>
            <ControlBar>
                <AddNewWordButton>Add new word</AddNewWordButton>
                <SearchBar>
                    <input type="search" id="lname" name="lname" />
                    <FilterButton>|||</FilterButton>
                </SearchBar>
            </ControlBar>
            <TableMainContainer>
                <TabContainer>
                    <Tab>Active Words</Tab>
                    <Tab>Deleted Words</Tab>
                </TabContainer>
                <WordContainer>
                    <WordRow>
                        English Word 1
                        Magyar szó 1
                        Magyar szó 2
                        <FilterButton>|||</FilterButton>
                        Long Term Memory
                        <FilterButton>H</FilterButton>
                        <FilterButton>E</FilterButton>
                        <FilterButton>D</FilterButton>
                    </WordRow>
                    <WordRow>
                        English Word 1
                        Magyar szó 1
                        Magyar szó 2
                        <FilterButton>|||</FilterButton>
                        Long Term Memory
                        <FilterButton>H</FilterButton>
                        <FilterButton>E</FilterButton>
                        <FilterButton>D</FilterButton>
                    </WordRow>
                    <WordRow>
                        English Word 1
                        Magyar szó 1
                        Magyar szó 2
                        <FilterButton>|||</FilterButton>
                        Long Term Memory
                        <FilterButton>H</FilterButton>
                        <FilterButton>E</FilterButton>
                        <FilterButton>D</FilterButton>
                    </WordRow>
                    <WordRow>
                        English Word 1
                        Magyar szó 1
                        Magyar szó 2
                        <FilterButton>|||</FilterButton>
                        Long Term Memory
                        <FilterButton>H</FilterButton>
                        <FilterButton>E</FilterButton>
                        <FilterButton>D</FilterButton>
                    </WordRow>
                    <WordRow>
                        English Word 1
                        Magyar szó 1
                        Magyar szó 2
                        <FilterButton>|||</FilterButton>
                        Long Term Memory
                        <FilterButton>H</FilterButton>
                        <FilterButton>E</FilterButton>
                        <FilterButton>D</FilterButton>
                    </WordRow>
                    <WordRow>
                        English Word 1
                        Magyar szó 1
                        Magyar szó 2
                        <FilterButton>|||</FilterButton>
                        Long Term Memory
                        <FilterButton>H</FilterButton>
                        <FilterButton>E</FilterButton>
                        <FilterButton>D</FilterButton>
                    </WordRow>
                    <WordRow>
                        English Word 1
                        Magyar szó 1
                        Magyar szó 2
                        <FilterButton>|||</FilterButton>
                        Long Term Memory
                        <FilterButton>H</FilterButton>
                        <FilterButton>E</FilterButton>
                        <FilterButton>D</FilterButton>
                    </WordRow>
                    <WordRow>
                        English Word 1
                        Magyar szó 1
                        Magyar szó 2
                        <FilterButton>|||</FilterButton>
                        Long Term Memory
                        <FilterButton>H</FilterButton>
                        <FilterButton>E</FilterButton>
                        <FilterButton>D</FilterButton>
                    </WordRow>
                    <WordRow>
                        English Word 1
                        Magyar szó 1
                        Magyar szó 2
                        <FilterButton>|||</FilterButton>
                        Long Term Memory
                        <FilterButton>H</FilterButton>
                        <FilterButton>E</FilterButton>
                        <FilterButton>D</FilterButton>
                    </WordRow>
                    <WordRow>
                        English Word 1
                        Magyar szó 1
                        Magyar szó 2
                        <FilterButton>|||</FilterButton>
                        Long Term Memory
                        <FilterButton>H</FilterButton>
                        <FilterButton>E</FilterButton>
                        <FilterButton>D</FilterButton>
                    </WordRow>
                    <WordRow>
                        English Word 1
                        Magyar szó 1
                        Magyar szó 2
                        <FilterButton>|||</FilterButton>
                        Long Term Memory
                        <FilterButton>H</FilterButton>
                        <FilterButton>E</FilterButton>
                        <FilterButton>D</FilterButton>
                    </WordRow>
                    <WordRow>
                        English Word 1
                        Magyar szó 1
                        Magyar szó 2
                        <FilterButton>|||</FilterButton>
                        Long Term Memory
                        <FilterButton>H</FilterButton>
                        <FilterButton>E</FilterButton>
                        <FilterButton>D</FilterButton>
                    </WordRow>
                    <WordRow>
                        English Word 1
                        Magyar szó 1
                        Magyar szó 2
                        <FilterButton>|||</FilterButton>
                        Long Term Memory
                        <FilterButton>H</FilterButton>
                        <FilterButton>E</FilterButton>
                        <FilterButton>D</FilterButton>
                    </WordRow>
                    <WordRow>
                        English Word 1
                        Magyar szó 1
                        Magyar szó 2
                        <FilterButton>|||</FilterButton>
                        Long Term Memory
                        <FilterButton>H</FilterButton>
                        <FilterButton>E</FilterButton>
                        <FilterButton>D</FilterButton>
                    </WordRow>
                    <WordRow>
                        English Word 1
                        Magyar szó 1
                        Magyar szó 2
                        <FilterButton>|||</FilterButton>
                        Long Term Memory
                        <FilterButton>H</FilterButton>
                        <FilterButton>E</FilterButton>
                        <FilterButton>D</FilterButton>
                    </WordRow>
                    <WordRow>
                        English Word 1
                        Magyar szó 1
                        Magyar szó 2
                        <FilterButton>|||</FilterButton>
                        Long Term Memory
                        <FilterButton>H</FilterButton>
                        <FilterButton>E</FilterButton>
                        <FilterButton>D</FilterButton>
                    </WordRow>
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