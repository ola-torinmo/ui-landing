import React from "react";
import commerce from "../assets/commerce.png";
import enterprise from "../assets/enterprise.png";
import estate from "../assets/estate.png";
import health from "../assets/health.png";
import saas from "../assets/saas.png";


const Industry =()=>{
    return(

        <div className="">
            <h1 className="text-[#009387] text-center text-3xl">Industries we service</h1>
            <div className="flex md:flex-row flex-col py-12">
                <div className="text-white text-center w-[400px] ">
                    <img src={commerce} className=""/>
                    <h2 className="-mt-[150px]"> E-commerce</h2>
                </div>
                <div className="text-white text-center w-[400px] -mx-[50px]">
                <img src={enterprise} className=""/>
                <h2 className="-mt-[150px]"> Enterprise</h2>
                </div>
                <div className="text-white text-center w-[400px]">
                <img src={estate} className=""/>
                <h2 className="-mt-[150px]"> Real Estate</h2>

                </div>
                <div className="text-white text-center w-[400px] -mx-[50px]">
                <img src={health} className=""/>
                <h2 className="-mt-[150px]"> Health</h2>

                </div>
                <div className="text-white text-center w-[400px]">
                <img src={saas} className=""/>
                <h2 className="-mt-[150px]"> Saas</h2>

                
                </div>
            </div>

        </div>
    )
}

export default Industry;