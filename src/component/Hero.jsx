import React from "react";
import heroImg from "../assets/vector.png"

const Hero =()=>{
    return(

        <div className="relative w-full">
            <h1 className="absolute text-lg md:text-3xl md:w-full w-[450px]  text-center  font-semibold pt-10 z-10 leading-5 tracking-normal  ">Start <span className="text-[#036BE3]">winning</span> In <span className="text-[#036BE3]" >the game of Website Conversion</span> with<br/> attention gripping Aesthetics and User Experience</h1>
            <img className="absolute z-0 -top-10 md:w-full w-[600px] md:h-max h-96" src={heroImg}/>

        </div>
        )
    }
    
    export default Hero;