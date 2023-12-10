import React from 'react'
import be1 from '../assets/be1.svg';
import be2 from '../assets/be2.svg';
import be3 from '../assets/be3.svg';

const Benefit = () => {
  return (
    <div className='w-full bg-white '>
        <h1 className="text-[#009387] text-center text-3xl ">Here are some benefits of working with us</h1>
        <p className='text-[#009387] text-center text-base mt-3'>Asides our track record of great design solutions and professionalism <br/> here some advantages of trusting us</p>
        <div className='py-[80px] px-[150px] flex flex-col md:flex-row'>
            

            <div class="w-[280px] h-[280px] p-6 bg-[#C3C3C31A] border border-gray-200 rounded-lg  ">
                <img src={be1} className='mx-auto' />
                
                 <h1 class="mb-2 text-xl text-center font-semibold tracking-tight text-[#2484DC] ">Increase in users</h1>
                
                <p class="mb-3 text-xs text-center ">The winning UI/UX provides your customers with compelling content and user friendly navigation. This results in customer growth.</p>
                
            </div>
            <div class="w-[280px] h-[280px] p-6 bg-[#C3C3C31A] border border-gray-200 rounded-lg mx-[80px] ">
                <img src={be2} className='mx-auto' />
                
                 <h1 class="mb-2 text-xl text-center font-semibold tracking-tight text-[#2484DC] ">Greater ROI</h1>
                
                <p class="mb-3 text-xs text-center ">Your application will attract the audience for which you make it. UI/UX allows you to allocate the audience which is essential for understanding the worries of each user group.</p>
                
            </div>
            <div class="w-[280px] h-[280px] p-6 bg-[#C3C3C31A] border border-gray-200 rounded-lg  ">
                <img src={be3} className='mx-auto pt-8' />
                
                 <h1 class="mb-2 text-xl text-center font-semibold tracking-tight text-[#2484DC] ">High traffic</h1>
                
                <p class="mb-3 text-xs text-center ">A well-developed UI/UX constantly keeps users on the site. If your web or mobile app is superbly designed and has an incredible customer experience. It will increase continued usage and reduce churn rate.</p>
                
            </div>

        </div>

    </div>
  )
}

export default Benefit;
