import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import logo from './images/logo2.png'
import Home from './components/Home';
import Topics from './components/Topics';
import Contact from './components/Contact';
const Header = () => {
    return(
    <header id="header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="logo-text">Wild Hare Ranch</p>
        <ul id="nav">
            <li><Link className="text-link" to='/topics'>Topics</Link></li>
            <li><Link className="text-link" to='/contact'>Contact</Link></li>
            <li><Link className="text-link" to='/'>Home</Link></li>


        </ul>
    </header>
);
}
export default Header;