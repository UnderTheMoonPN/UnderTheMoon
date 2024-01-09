import { useState } from 'react'
import { ContentWrapper } from './components/ContentWrapper/ContentWrapper.jsx'
import { Navbar } from './components/NavBar/NavBar.jsx'

import './App.scss'

const NavArr = [
  'Hjem',
  'Koncepter',
  'utm loyalty',
  'om',
  'kontakt'
]

function App() {
  

  return (
    <>
      <Navbar data= {NavArr}></Navbar>
    </>
  )
}

export default App
