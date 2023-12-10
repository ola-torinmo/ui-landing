import React from "react"
import "./App.css";
import { Navabar,Hero,Services,Designcost,Industry,Offering,Benefit,Footer} from "./component";

// import Hero from "./component/Hero";

export default function App() {
  return (
   <div>
    <Navabar/>
    <Hero/>
    <Services/>
    <Industry/>
    <Offering/>
    <Benefit/>
    <Designcost/>
    
    <Footer/>
   </div>
  )
}