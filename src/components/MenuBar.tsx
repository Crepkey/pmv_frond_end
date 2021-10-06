import React from 'react';

/* Icons */

import { FcPodiumWithSpeaker } from 'react-icons/fc'
import { BsPersonCircle } from 'react-icons/bs';

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
    font-weight: bold;
    font-size: 1.25rem;
    padding: 0 24px 0 24px;
`

const Menu = Styled.div`
    display: flex;
    flex:  1;
    justify-content: flex-end;
`

const MenuItem = Styled.div`
    font-weight: 550;
    margin-right: 8px;
    padding: 8px;
    border-bottom: 3px rgba(86, 171, 227, 0) solid;
    :hover{
        color: rgb(80, 80, 80);
        border-bottom: 3px rgba(86, 171, 227, 1) solid;
    }
`

const UserAvatarContainer = Styled.div`
    display: flex;
    align-items: center;
    padding: 0 24px 0 24px;
`

/* TODO: We need a media query here so that we can handle the lower resolutions for the perfect Menu Bar height */

export default function MenuBar() {
    return (
        <MainContainer>
            <LogoContainer>
                <FcPodiumWithSpeaker size={32} style={{ paddingRight: '16px' }} />
                PIMP MY VOCAB
            </LogoContainer>
            <Menu>
                <MenuItem>My words</MenuItem>
                <MenuItem>Let's play</MenuItem>
            </Menu>
            <UserAvatarContainer>
                <BsPersonCircle size={28} />
            </UserAvatarContainer>
        </MainContainer>
    )
}