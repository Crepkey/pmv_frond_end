import React from 'react';
import MenuBar from './components/MenuBar';
import PlayingCard from './components/PlayingCard';


function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flex: 1, flexDirection: 'column' }}>
      <MenuBar />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PlayingCard />
      </div>
    </div>
  );
}

export default App;
