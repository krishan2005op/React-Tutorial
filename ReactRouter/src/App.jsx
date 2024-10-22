/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import Login from './components/Login'
import About from './components/About'
import User from './components/user'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/login",
      element: <><Navbar/><Login/></>
    },
    {
      path: "/About",
      element: <><Navbar/><About/></>
    },
    {
      path: "/user/:username",
      element: <><Navbar/><User/></>
    },
  ])
  

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
