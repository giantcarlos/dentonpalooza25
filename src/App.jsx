import './App.css'
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Sponsors from './components/Sponsors';
import Images from './components/Images';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <BrowserRouter>
      <div>
        <header>
          <NavBar />
        </header>
          <Sponsors />
          <Images />
          <Footer />  
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
