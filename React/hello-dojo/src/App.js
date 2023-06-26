import React from 'react';
import './App.css';

import SayHello from './componentes/SayHello';
import MyList from './componentes/MyList';

function App() {
  return (
    <div className="App">
      <SayHello/>
      <MyList/>
    </div>
  );
}

export default App;
