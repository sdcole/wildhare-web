import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Topics from './components/Topics';
import Settings from './components/Settings';

const Main = () => {
return (        
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/topics/' element={<Topics />} />
            <Route path='/settings/' element={<Settings />} />
        </Routes>
    </BrowserRouter>

);
}
export default Main;