import React from "react";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import vector2 from "../assets/vector2.png";
import vector3 from "../assets/vector3.png";
import "./style.css";

const Services =()=>{
    return(

      <div className="w-full bg-white pt-10">
            <div className="flex flex-col md:flex-row  md:pt-[300px] pt-[200px] md:pl-[100px] pl-[50px] mb-[50px]">
               <div className=""> <img src={frame1} /></div>
               <div className="mt-[70px] md:pl-[50px]">
               <h1 className="pb-3  md:text-3xl text-2xl text-[#585395]"> Web/Mobile website Design</h1>
               <p className="w-[370px] md:text-base text-sm">We deliver responsive web design, adaptive mobile design, and user-friendly interfaces to maximize users’ satisfaction.</p>
               </div>
            </div>

            <div className="relative flex flex-col md:flex-row bg-cover bg-center mb-[50px] " >
            <img className="absolute z-0 -top-10" src={vector2}/>
               <div className="md:mt-[150px] mt-[50px] md:pl-[100px] pl-[50px]">
               <h1 className="pb-3 z-10 md:text-3xl text-2xl text-[#0ACF83]"> App and website redesign</h1>
               <p className="w-[370px] md:text-base text-sm">With our assistance, you can profoundly change the design and interface for your outdated projects leaving the backend unaltered if that is needed.</p>
               </div>
               <div className="z-10 md:order-last order-first"> <img src={frame2} /></div>
            </div>
            
            <div className="relative flex flex-col md:flex-row  bg-cover bg-center mb-[50px]  " >
            <img className="absolute z-0 -top-10  " src={vector3}/>
               <div className="z-10 md:pl-[10px] pl-[50px] "> <img src={frame3} /></div>
               <div className="md:mt-[180px] mt-[50px] md:pl-[100px] pl-[50px]">
               <h1 className="pb-3 z-10 md:text-3xl text-2xl text-[#4B50F5]">UI/UX design audit</h1>
               <p className="w-[370px] md:text-base text-sm">We carefully conduct a UI/UX audit, allowing you to come away with recommendations on what types of design changes you should make to achieve your desired results.</p>
               </div>
               
            </div>

            <div className=" flex flex-col md:flex-row  bg-cover bg-center mb-[50px] " >
               <div className="md:mt-[150px] mt-[50px] md:pl-[100px] pl-[50px]">
               <h1 className="pb-3 z-10 md:text-3xl text-2xl text-[#4B50F5]">UI/UX design research</h1>
               <p className="w-[370px] md:text-base text-sm">Our Design Studio team can provide you with personalized research to bring comprehensive answers to your questions about the UI/UX within your specific web or mobile solution.</p>
               <button className="bg-sky-600 text-[#fff] px-12 py-4 rounded-md text-sm md:mt-[100px] mt-[50px]">Work with us</button>
               </div>
               <div className="z-10 md:pl-[10px] pl-[50px] md:order-last order-first"> <img src={frame4} /></div>
            </div>

      </div>



    );
}

export default Services;