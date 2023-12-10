import React from "react";
import complex from "../assets/complex.svg";
import scope from "../assets/scope.svg";
import time from "../assets/time.svg";
import team from "../assets/team.svg";
import tcom from "../assets/t-com.svg";
import specialist from "../assets/specialist.svg";


const Designcost =()=>{
    return(
        <div>
            <div className="md:max-w-[1028px] max-w-[600px]  m-auto w-full bg-white py-5">
            <div className="h-[90px]">
                <h1 className=" border-b pb-2 text-3xl text-[#009387] font-medium md:text-center text-center">DESIGN SOLUTION COST</h1>
            </div>
            <div className="  pb-2 text-[#121212BF] md:pl-0 pl-5 ">
                        <h1 className="text-[18px] pb-5 ">The ultimate cost of your  project is defined by a number of factors: </h1>
                        
            </div>
            <div className="  m-auto grid md:grid-cols-3 grid-cols-1 md:py-10 py-2 md:pl-0 pl-5">
                <div className="py-6 flex">
                    <img src={complex} className="shrink-0 w-[30px]"/>
                    <h1 className="pl-4 pt-1">Project complexity</h1>
                </div>
                <div className="py-6 flex">
                    <img src={scope} className="shrink-0 w-[30px] border-[#2484DC]"/>
                    <h1 className="pl-4 pt-1">Scope of work</h1>
                </div>
                <div className="py-6 flex">
                    <img src={time} className="shrink-0 w-[30px]"/>
                    <h1 className="pl-4 pt-1">Project duration</h1>
                </div>
                <div className="py-6 flex">
                    <img src={team} className="shrink-0 w-[30px]"/>
                    <h1 className="pl-4 pt-1">Team size</h1>
                </div>

                <div className="py-6 flex">
                    <img src={tcom} className="shrink-0 w-[30px]"/>
                    <h1 className="pl-4 pt-1">Team composition</h1>
                </div>
                <div className="py-6 flex">
                    <img src={specialist} className="shrink-0 w-[30px]"/>
                    <h1 className="pl-4 pt-1">Level of specialists</h1>
                </div>
                
                
            </div>
            <div className="  m-auto  md:pl-0 pl-5 ">
            <button className="bg-sky-600 text-[#fff] px-12 py-4 rounded-md text-sm mt-[10px]">Speak with a design specialist</button>
                        
            </div>
            </div>
        </div>
    )
}

export default Designcost;