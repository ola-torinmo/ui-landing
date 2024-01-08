import React,{ useState } from "react";
import alogo from "../assets/logo.svg"
import close from "../assets/close.svg"
import hamburgerMenu from "../assets/hamburgerMenu.svg"


const Navabar = ()=>{
    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

    return(
        <div className="w-full h-[70px] bg-white  ">
            <div className='md:max-w-[1028px] max-w-[600px] m-auto  h-full flex justify-between items-center  px-[0px]'>
                <img src={alogo} className="pt-5"/>
                <div className="hidden md:flex items-center">
                    {/* <ul className="flex gap-6">
                        <li>Business</li>
                        <li>About</li>
                        <li>Clients</li>
                        <li>Services</li>
                    </ul> */}
                    <button className="bg-sky-600 text-[#fff] px-6 py-2 rounded-md text-sm">Get Started</button>
                </div>

                <div className='md:hidden'  onClick={handleClick}>
                    <img src={toggle?close:hamburgerMenu} />
                </div>

            </div>

            <div className={toggle?'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b':'hidden'}>
            <ul>
                    <li className='p-4 hover:bg-gray-100'>Business</li>
                    <li className='p-4 hover:bg-gray-100'>About</li>
                    <li className='p-4 hover:bg-gray-100'>Clients</li>
                    <li className='p-4 hover:bg-gray-100'>Services</li>
                    
            </ul>
        </div>

        </div>
    )
}

export default Navabar;