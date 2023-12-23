import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>Route React Learning</div> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
