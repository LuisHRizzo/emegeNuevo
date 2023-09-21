import React from 'react'
import Navbar from '../components/navbar/navbar.jsx'
import Footer from '../components/footer/footer.jsx'
import { Outlet } from 'react-router-dom'




const MainLayout = () => {
  return (
    <div className='appLayout'>
        <Navbar/>
        <main className='flex-grow-1'>
        <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout