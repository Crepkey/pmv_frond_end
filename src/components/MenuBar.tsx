import React from 'react';

/* Icons */

import { FcPodiumWithSpeaker } from 'react-icons/fc'
import { BsPersonCircle } from 'react-icons/bs';

/* Styles */
import styled from 'styled-components';
import { colors } from './colors';

const MainContainer = styled.div`
    background-image: linear-gradient(to top,${colors.headerGradientDarker},${colors.headerGradientDark},${colors.headerGradientLight});
    border-bottom: 1px solid ${colors.border};
    display: flex;
    justify-content: space-between;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.25rem;
    padding: 0 24px 0 24px;
`

const Menu = styled.div`
    display: flex;
    flex:  1;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-weight: 550;
    margin-right: 8px;
    padding: 8px;
    border-bottom: 3px rgba(86, 171, 227, 0) solid;
    :hover{
        color: ${colors.activeFont};
        border-bottom: 3px ${colors.activeBorder} solid;
    }
`

const UserAvatarContainer = styled.div`
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