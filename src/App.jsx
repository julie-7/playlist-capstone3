import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Login } from './ScreenComponent/Login'
import { Form } from './ScreenComponent/Form'
import { Report } from './ScreenComponent/Report'
import {Navbar} from './Component/Navbar'


function App() {


  return (
    <>
      <HashRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/report' element={<Report />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
