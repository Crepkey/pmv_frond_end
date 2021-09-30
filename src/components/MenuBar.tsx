import React from 'react';

/* Styles */
import Styled from 'styled-components';

const MainContainer = Styled.div`
    border: 1px white solid;
    width: 100%;
    height: 5%;
`

/* TODO: We need a media query here so that we can handle the lower resolutions for the perfect Menu Bar height */

export default function MenuBar() {
    return (
        <MainContainer>
            Whatever is this
        </MainContainer>
    )
}