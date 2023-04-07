import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Topics from './components/Topics';
import Contact from './components/Contact';
const Main = () => {
return (         
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/topics' element={<Topics/>} />
    <Route path='/contact' element={<Contact/>} />
  </Routes>
);
}
export default Main;