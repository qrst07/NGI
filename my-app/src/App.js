import React from 'react';
import './App.css';
import AddPitchForm from "./AddPitchForm.js";
import Header from "./Header.png";
import Footer from "./Footer.png";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img className="App-header-picture" src={Header}></img>
      </header>
      <div className="App-form"> 
        <AddPitchForm />
      </div>
      <div>
        <img className="App-footer-picture" src={Footer}></img>
      </div>
    </div>
  );
}

export default App;
