import React from "react";
import commerce from "../assets/commerce.png";
import enterprise from "../assets/enterprise.png";
import estate from "../assets/estate.png";
import health from "../assets/health.png";
import saas from "../assets/saas.png";


const Industry =()=>{
    return(

        <div className="mt-[50px]">
            <h1 className="text-[#009387] text-center md:text-3xl text-2xl md:ml-[0px] ml-[50px]">Industries we service</h1>
            <div className="flex md:flex-row flex-col py-12 md:ml-[0px] ml-[50px]">
                <div className="text-white text-center w-[400px] md:mb-[0px] mb-[100px] ">
                    <img src={commerce} className=""/>
                    <h2 className="md:-mt-[150px] -mt-[170px] md:-ml-[0px] -ml-[50px]"> E-commerce</h2>
                </div>
                <div className="text-white text-center w-[400px] md:mb-[0px] mb-[100px] md:-mx-[50px] ">
                <img src={enterprise} className=""/>
                <h2 className="md:-mt-[150px] -mt-[170px] md:-ml-[0px] -ml-[50px]"> Enterprise</h2>
                </div>
                <div className="text-white text-center w-[400px] md:mb-[0px] mb-[100px]">
                <img src={estate} className=""/>
                <h2 className="md:-mt-[150px] -mt-[170px] md:-ml-[0px] -ml-[50px]"> Real Estate</h2>

                </div>
                <div className="text-white text-center w-[400px] md:mb-[0px] mb-[100px] md:-mx-[50px]">
                <img src={health} className=""/>
                <h2 className="md:-mt-[150px] -mt-[170px] md:-ml-[0px] -ml-[50px]"> Health</h2>

                </div>
                <div className="text-white text-center w-[400px] md:mb-[0px] mb-[100px]">
                <img src={saas} className=""/>
                <h2 className="md:-mt-[150px] -mt-[170px] md:-ml-[0px] -ml-[50px]"> Saas</h2>

                
                </div>
            </div>

        </div>
    )
}

export default Industry;