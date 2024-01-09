import { useState } from 'react'
import { ContentWrapper } from './components/ContentWrapper/ContentWrapper.jsx'
import { Navbar } from './components/NavBar/NavBar.jsx'
import './App.scss'
import { Header } from './components/Header/Header.jsx'

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
      <div>
      <ContentWrapper title='Skrrt'></ContentWrapper>
      </div>
    </>
  )
}

export default App
