import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
       <div>
      <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </div>
    </div>
  )
}

export default App
