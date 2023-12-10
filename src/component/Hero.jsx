import React from "react";
import heroImg from "../assets/vector.png"

const Hero =()=>{
    return(

        <div className="relative w-full bg-white ">
            <h1 className="absolute text-2xl md:text-3xl md:w-[1241px]  text-center  font-semibold pt-10 z-10 leading-5 tracking-wide  ">Start <span className="text-[#036BE3]">winning</span> In <span className="text-[#036BE3]" >the game of Website Conversion</span> with<br/> attention gripping Aesthetics and User Experience</h1>
            <img className="absolute z-0 -top-10  " src={heroImg}/>

        </div>
        )
    }
    
    export default Hero;