import React from 'react'
import Home from './Home'
import Navbar from './Navbar'
import {Routes,Route} from "react-router-dom"
import Destination from './Destination'
import Crew from './Crew'
import Technology from './Technology'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/crew' element={<Crew/>}/>
        <Route path='/technology' element={<Technology/>}/>
      </Routes>
    </div>
  )
}

export default App