import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from "./pages/Menu"
import About from './pages/About';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
function App() {
  return (
   <BrowserRouter  >
   <Routes>
    {/* <Route  path='' element={<Layout/>} /> */}
    <Route exact path='/'  element={<Home/>} />
    <Route path='menu'  element={<Menu/>} />
    <Route path='about'  element={<About/>} />
    <Route path='contact'  element={<Contact/>} />
    <Route  path='*'  element={<Pagenotfound/>}  />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
