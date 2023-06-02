import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import HomeSection from "./Components/HomeSection"
import Nav from "./Components/Nav"
import data from './data/data.json'
import Carprojects from "./Components/Carprojects"
import { useState } from "react"
import Car from "./Components/Car"



function App() {
 const [carprojects, setCarprojects] = useState(data.cars)
 const [car, setCar] = useState()

  return (
    <div className="app" >

    <Nav />
    <Routes>

<Route path="/" element={<HomeSection />  } />
<Route path="/carprojects" element={<Carprojects carprojects={carprojects} setCar={setCar}/> } />
<Route path="/car" element= {<Car car={car} />} />


    </Routes>
    <Footer />

    </div>
   
   
    
  )
}

export default App
