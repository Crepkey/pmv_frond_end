import React from 'react';

/* Styles */
import Styled from 'styled-components';

const MainContainer = Styled.div`
    background-image: linear-gradient(to top,#d8d7dd,#dbdee7,#e2e5eb);
    border-bottom: 1px solid #b1bcc7;
    display: flex;
    justify-content: space-between;
`

const LogoContainer = Styled.div`
    display: flex;
    align-items: center;
`

const Menu = Styled.div`
    display: flex;
    flex:  1;
    justify-content: flex-end;
    padding: 0.25rem;
`

const MenuItem = Styled.div`
    margin: 0;
    padding: 0.5rem;
`

const UserAvatar = Styled.div`
    display: flex;
    align-items: center;
`

/* TODO: We need a media query here so that we can handle the lower resolutions for the perfect Menu Bar height */

export default function MenuBar() {
    return (
        <MainContainer>
            <LogoContainer>
                Pimp My Vocabulary
            </LogoContainer>
            <Menu>
                <MenuItem>My words</MenuItem>
                <MenuItem>Let's play</MenuItem>
            </Menu>
            <UserAvatar>avatar</UserAvatar>
        </MainContainer>
    )
}