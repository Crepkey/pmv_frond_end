import React from 'react';
import MenuBar from './components/MenuBar';
import PlayingCard from './components/PlayingCard';
import MyWords from './components/MyWords';
import EditWord from './components/EditWord'

import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

const Body = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  min-width: 0;
  min-height: 0;
`


function App() {
  return (
    <MainContainer>
      <MenuBar />
      {/* <MyWords /> */}


      <Body>
        {/* <PlayingCard /> */}
        <EditWord />
      </Body>
    </MainContainer >
  );
}

export default App;
