import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';

const Home = () => {
  return (
  <div>
    <h1>Home</h1>
  </div>
  );
};

const About = () => {
  return (
  <div>
    <h1>About</h1>
  </div>
  );
};
function App() {
  return (
    <div className="App">
        <Link to="/">Home</Link>

        <Link to="/About">About</Link>

    </div>
  );
}

export default App;
