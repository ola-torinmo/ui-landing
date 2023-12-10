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
            <div className="flex flex-col md:flex-row  pt-[300px]">
               <div className="pl-[100px] pr-10"> <img src={frame1} /></div>
               <div className="mt-[70px]">
                <h1 className="pb-3  text-3xl text-[#585395]"> Web/Mobile website Design</h1>
                <p className="w-[412px] text-base">We deliver responsive web design, adaptive mobile design, and user-friendly interfaces to maximize users’ satisfaction.</p>
               </div>
            </div>

            <div className="relative flex flex-col md:flex-row bg-cover bg-center h-screen " >
            <img className="absolute z-0 -top-10  " src={vector2}/>
               <div className="mt-[150px] pl-[100px]">
                <h1 className="pb-3 z-10 text-3xl text-[#0ACF83]"> App and website redesign</h1>
                <p className="w-[412px] text-base">With our assistance, you can profoundly change the design and interface for your outdated projects leaving the backend unaltered if that is needed.</p>
               </div>
               <div className="z-10"> <img src={frame2} /></div>
            </div>
            
            <div className="relative flex flex-col md:flex-row  bg-cover bg-center h-screen " >
            <img className="absolute z-0 -top-10  " src={vector3}/>
               <div className="z-10 pl-[50px] pr-5"> <img src={frame3} /></div>
               <div className="mt-[180px]">
                <h1 className="pb-3 z-10 text-3xl text-[#4B50F5]">UI/UX design audit</h1>
                <p className="w-[412px] text-base">We carefully conduct a UI/UX audit, allowing you to come away with recommendations on what types of design changes you should make to achieve your desired results.</p>
               </div>
               
            </div>

            <div className=" flex flex-col md:flex-row  bg-cover bg-center h-screen  " >
               <div className="mt-[150px] pl-[100px] pr-5">
                <h1 className="pb-3 z-10 text-3xl text-[#4B50F5]">UI/UX design research</h1>
                <p className="w-[412px] text-base">Our Design Studio team can provide you with personalized research to bring comprehensive answers to your questions about the UI/UX within your specific web or mobile solution.</p>
                <button className="bg-sky-600 text-[#fff] px-12 py-4 rounded-md text-sm mt-[100px]">Work with us</button>
               </div>
               <div className="z-10 "> <img src={frame4} /></div>
            </div>

        </div>


    );
}

export default Services;