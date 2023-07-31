import React from 'react'
import Header from './components/header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Contactus from './pages/Contactus';
import Footer from './components/footer/Footer';
import About from './pages/About';
import Carrier from './pages/Carrier';
import Portfolio from './pages/Portfolio';
import SinglePage from './components/singlepage/SinglePage';
import ErrorPage from './pages/ErrorPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
 <ToastContainer  position="top-center"
autoClose={1000}/>
   <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/contact-us' element={<Contactus/>}></Route>
     <Route path='/about' element={<About/>}/>
     <Route path='/carrier' element={<Carrier/>}/>
     <Route path='/portfolio' element={<Portfolio/>}/>
     <Route path='/singlepage/:id' element={<SinglePage/>}/>
     <Route path='*' element={<ErrorPage/>}/>

    </Routes>
   
    <Footer/>
    </>
  )
}

export default App