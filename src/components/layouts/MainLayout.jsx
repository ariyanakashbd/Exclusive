import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../layouts/TopBar'
import Navbar from '../Navbar'

const MainLayout = () => {
  return (
   <>
   <TopBar/>
   <Navbar/>
   <Outlet/>
   </>
  )
}

export default MainLayout