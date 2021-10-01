import React from 'react';

/* Styles */
import Styled from 'styled-components';

const MainContainer = Styled.div`
    display: flex;
    flex: 1;
    padding: 1rem;
    border: 1px solid red;
`

const ControlBar = Styled.div`
    display: flex;
    flex: 1;
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
        </MainContainer>
    )
}