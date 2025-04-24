import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './First/Header';
import Home from './First/Home';
import SecondHome from './Second/Home';
import About from './First/About';
import SecondAbout from './Second/About';
import Contact from './Second/Contact';
import Navbar from './Second/Navbar';

function App() {
  return (
    <div className="App">
    {/* <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </BrowserRouter> */}
    <BrowserRouter>
    <Navbar/>
        <Routes>
        <Route path='/' element={<SecondHome/>}></Route>
        <Route path='/about' element={<SecondAbout/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
