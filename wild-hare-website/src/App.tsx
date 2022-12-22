import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter, Outlet } from 'react-router-dom';
import Main from './Main';
function Home() {
  return <p>Home</p>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <ul>
            <BrowserRouter>
              <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/topics/'>Topics</Link></li>
                <li><Link to='/settings/'>Settings</Link></li>
                </nav>
                
            </BrowserRouter>
          </ul>
          <Main />
      </header>

    </div>


  );
}

export default App;
