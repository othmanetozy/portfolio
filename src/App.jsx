import { useState } from 'react'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'

function App() {


  
  return (
    <div className='container'>
     <Header />
     <Hero />
     <div className='divider'></div>
     <Main />
     <div className='divider'></div>
     <Contact />
     <div className='divider'></div>
     <Footer />
    </div>
  )
}

export default App
