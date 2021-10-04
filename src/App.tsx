import React from 'react';
import MenuBar from './components/MenuBar';
import PlayingCard from './components/PlayingCard';
import MyWords from './components/MyWords';
import Styled from 'styled-components';

const MainContainer = Styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

const Body = Styled.div`
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
        <PlayingCard />
      </Body>
    </MainContainer>
  );
}

export default App;
