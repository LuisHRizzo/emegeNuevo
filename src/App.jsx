import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx';
import Market from './pages/Market/Market.jsx';
import Brands from './pages/Brands/Brands.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contacto',
        element: <Contact />,
      },
      {
        path: '/market',
        element: <Market />,
      },
      {
        path: '/marcas/:marca',
        element: <Brands/>,
      }
    ] 
  }
])

function App() {
  
    return (
    <>          
      <RouterProvider router={router} />
    </>
  )
}
export default App

