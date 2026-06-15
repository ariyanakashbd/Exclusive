import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../layouts/TopBar'
import Navbar from '../Navbar'
import Banner from './Banner'

const MainLayout = () => {
  return (
   <>
   <TopBar/>
   <Navbar/>
   <Banner/>
   <Outlet/>
   </>
  )
}

export default MainLayout