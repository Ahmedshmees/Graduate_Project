import './App.css'
import Nav  from './components/Nav'
import Cont from './components/Cont'
import Hiw from './components/Hiw'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'
// import { login } from '../Services/authService'
import Login from './pages/Login'
import Sign from './pages/Sign'


function App() {

  useEffect(() => {
    Aos.init({
      once:true,
      offset:200,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
  },[]);

  return (
    <>
      <Nav/>
      <main id="main-content">
      <Cont/>
      <Hiw/>
      <Testimonial/>
      <Footer/>
      </main>
    </>
  )
}

export default App
