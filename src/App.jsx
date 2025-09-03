import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import './App.css'

function App() {
  const [category,setcategory] = useState("general")

  return (
    <>
        <Navbar setcategory={setcategory}/>
        <Hero category={category}/>
    
       
    </>
  )
}

export default App
