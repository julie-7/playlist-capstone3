import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './ScreenComponent/Login'
import { Form } from './ScreenComponent/Form'
import { Report } from './ScreenComponent/Report'
import {Navbar} from './Component/Navbar'


function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/report' element={<Report />} />
          <Route path='/form' element={<form />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
