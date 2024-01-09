import { useState } from 'react'
import { ContentWrapper } from './components/ContentWrapper/ContentWrapper.jsx'
import { Navbar } from './components/NavBar/NavBar.jsx'
import './App.scss'
import { Header } from './components/Header/Header.jsx'
import { Gallery } from './components/Gallery/Gallery.jsx'
import {Main } from './components/Main/Main.jsx'
import { Footer } from './components/Footer/footer.jsx'




const NavArr = [
  'Hjem',
  'Koncepter',
  'utm loyalty',
  'om',
  'kontakt'
]

const GalleryArr = [
  './src/assets/Images/Billede-et.png',
  './src/assets/Images/Billede-to.png',
  './src/assets/Images/Billede-3.png',
  './src/assets/Images/Billede-4.png',
  './src/assets/Images/Billede-5.png',
  './src/assets/Images/Billede-6.png',
  './src/assets/Images/Billede-7.png',
  './src/assets/Images/Billede-8.png',
  './src/assets/Images/Billede-9.png',
  './src/assets/Images/Billede-10.png',
  './src/assets/Images/Billede-11.png',
  './src/assets/Images/Billede-12.png',
]

function App() {
  

  return (
    <>
      <Navbar data= {NavArr}></Navbar>
      <Header></Header>
      <Main></Main>
      <Gallery pictures={GalleryArr}></Gallery>
      <Footer></Footer>
    </>
  )
}

export default App
