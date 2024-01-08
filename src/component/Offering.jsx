import React from 'react'
import star from '../assets/star-outline.svg.png';

 const Offering = () => {
  return (
    <div className='w-full bg-white'>
       <h1 className="text-[#009387] text-center text-3xl pt-[150px] md:ml-[0px] ml-[50px]">Our other service offerings</h1>
      
      <div className='md:max-w-full max-w-[600px] flex flex-col md:flex-row  m-auto pt-[100px] md:pl-[100px] pl-[50px]'>
        
                <div className="flex md:mr-12">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5   "><img src={star}/></span>
                    <h1 className="pb-5 text-[#2484DC] text-[22px]    "> UX Research & Interviews</h1>
                </div>
                <div className="flex md:mr-12">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5   "><img src={star}/></span>
                    <h1 className="pb-5 text-[#2484DC] text-[22px]    "> Graphic design</h1>
                </div>
                <div className="flex md:mr-12">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5   "><img src={star}/></span>
                    <h1 className="pb-5 text-[#2484DC] text-[22px]    "> Logos</h1>
                </div>
                <div className="flex ">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5   "><img src={star}/></span>
                    <h1 className="pb-5 text-[#2484DC] text-[22px]    "> Illustration</h1>
                </div>

      </div>
      <div>
      <div className='md:max-w-full max-w-[600px] flex flex-col md:flex-row  m-auto py-[100px] md:pl-[100px] pl-[50px]'>
                <div className="flex md:mr-12">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5   "><img src={star}/></span>
                    <h1 className="pb-5 text-[#2484DC] text-[22px]    "> UI design</h1>
                </div>
                <div className="flex md:mr-12">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5   "><img src={star}/></span>
                    <h1 className="pb-5 text-[#2484DC] text-[22px]    "> Brand design</h1>
                </div>
                <div className="flex md:mr-12">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5   "><img src={star}/></span>
                    <h1 className="pb-5 text-[#2484DC] text-[22px]    "> Motion design</h1>
                </div>
                <div className="flex ">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5   "><img src={star}/></span>
                    <h1 className="pb-5 text-[#2484DC] text-[22px]    "> Interaction design</h1>
                </div>

      </div>
      </div>
        
    </div>
  )
}
 export default Offering;
