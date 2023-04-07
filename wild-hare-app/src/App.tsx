import React from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
import Main from './Main';
import Header from './Header';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Header />
      <div className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
      <Main />
    </div>
  );
}

export default App;
