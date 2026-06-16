import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../layouts/TopBar'
import Navbar from '../Navbar'
import Banner from './Banner'
import FlashSales from '../FlashSeles'

const MainLayout = () => {
  return (
   <>
   <TopBar/>
   <Navbar/>
   <Banner/>
   <FlashSales/>
   <Outlet/>
   </>
  )
}

export default MainLayout