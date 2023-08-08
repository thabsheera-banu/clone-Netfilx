import React from 'react';
import './App.css';
import Banner from './component/Banner/Banner';
import RowPost from './component/Row poster/RowPost';
import NavBar from './component/navbar/NavBar';
import { actions,originals } from './urls';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url={actions} title='Action' isSmall/>
     <RowPost url={actions} title='Action' isSmall/>

     

    </div>
  );
}

export default App;
