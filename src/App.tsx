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


function App() {
  return (
    <MainContainer>
      <MenuBar />
      <MyWords />


      {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PlayingCard />
      </div> */}
    </MainContainer>
  );
}

export default App;
