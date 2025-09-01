import './App.css'
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {


  return (
    <>
      <BrowserRouter>
      <div>
        <header>
          <NavBar />
        </header>
        
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
