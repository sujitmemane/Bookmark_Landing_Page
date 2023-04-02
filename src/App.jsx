import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Feature from './container/feature/Feature'
import Download from './container/download/Download'
import FAQ from './container/faq/FAQ'
import CAT from './container/CAT/CAT'
import Footer from './container/footer/Footer'
import './App.css'

function App() {


  return (
    <div className="App">
       <Navbar/>
       <Hero/>
       <Feature/>
       <Download/>
       <FAQ/>
       <CAT/>
       <Footer/>
    </div>
  )
}

export default App
