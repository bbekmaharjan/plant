import React from 'react'

import Steps from '../components/Steps'
import About from '../components/About'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Products from '../components/Products'
import Questions from '../components/Questions'
import HomeContainer from '../components/HomeContainer'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
      <Header/>
      <main className="main">
        <HomeContainer/>
        <About/>
        <Steps/>
        <Products/>
        <Questions/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}

export default Home