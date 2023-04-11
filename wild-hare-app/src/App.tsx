import React from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
import Main from './Main';
import Header from './Header';
import fbLogo from './images/facebook.png'
import igLogo from './images/instagram.png'
import tiktokLogo from './images/tiktok.png'
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Header />
      <div className="App-content">
        <Main />  
      </div>
      <div id="footer" className="App-footer">
                <p>Wild Hare Ranch LLC. 2023</p>
                <div id="footer-socials">
                  <a href="https://www.facebook.com/WildHareRanchLLC/" target="_blank" rel="noreferrer">
                    <img src={fbLogo} alt="fbLogo"></img>
                  </a>
                  <a href="https://www.instagram.com/wild_hare_ranch/" target="_blank" rel="noreferrer">
                    <img src={igLogo} alt="igLogo"></img>
                  </a>
                  <a href="https://www.tiktok.com/@wildhareranch" target="_blank" rel="noreferrer">
                    <img src={tiktokLogo} alt="tiktokLogo"></img>
                  </a>
                  
                </div>
            </div>
    </div>
  );
}

export default App;
