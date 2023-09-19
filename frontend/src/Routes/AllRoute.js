import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
import RegisterFrom from '../Components/RegisterForm'
import DashBoard from '../Components/DashBoard'
import Error from '../Components/Error'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<RegisterFrom/>}/>
            <Route path='/Dashboard' element={<DashBoard/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </div>
  )
}

export default AllRoute
