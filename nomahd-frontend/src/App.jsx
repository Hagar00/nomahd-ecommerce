import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import './index.css';
import 'ionicons/icons';


function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
    </div>

  )
}

export default App