import './App.css'
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Sponsors from './components/Sponsors';

function App() {


  return (
    <>
      <BrowserRouter>
      <div>
        <header>
          <NavBar />
        </header>
          <Sponsors />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
