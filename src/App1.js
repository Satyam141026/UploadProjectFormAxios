import React from 'react'
import Login from './Pages/Login'
import Page404 from './Pages/Page404'
import Linknav from './Pages/Linknav'
import Register2 from './Register2'
import { Routes, Route, Link } from "react-router-dom";

const App1 = () => {
  return (
    <div>
<Linknav/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register2" element={<Register2 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>







    </div>
  )
}

export default App1