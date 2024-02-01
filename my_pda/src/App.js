
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import './App.css';
import Homepage from './pages/HomePage';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Events from './components/Upcomingevents';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signin from './pages/Signin';
function App() {
  return (
      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/event' element={<Events/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signin' element={<Signin/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
