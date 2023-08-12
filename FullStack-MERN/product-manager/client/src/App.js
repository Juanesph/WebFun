import './App.css';
import Main from './views/Main.view';
import { Route, Routes } from 'react-router-dom';
import Edit from './views/Edit.view';
import Detail from './views/Detail.view';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<Main />}/>
        <Route path='products/:id' element={<Detail />}/>
      </Routes>
    </div>
  );
}

export default App;
