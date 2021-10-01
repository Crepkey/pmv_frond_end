import React from 'react';
import MenuBar from './components/MenuBar';
import MyWords from './components/MyWords';


function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MenuBar />
      <MyWords />
    </div>
  );
}

export default App;
