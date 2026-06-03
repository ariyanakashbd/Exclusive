import React from 'react'
import Container from './layouts/Container';
import logo from '../assets/Exclusive.webp';
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";


const Navbar = () => {
  return (
    <div>
      <Container>
        <div className='flex justify-between mt-10'>
          <div><img src={logo} alt="" /></div>
          <div>
            <ul className='flex gap-x-12 text-[#000000] font-pop text-[16px]'>
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
              <li>Sing Up</li>
            </ul>
          </div>
          <div className='flex relative '>
           <div>
             <input className='w-[300px] h-[18px] pl-5 py-3 placeholder:text-[#807d7d] placeholder:font-pop placeholder:text-[16px] border-1 rounded-[5px]' type="text" placeholder='What are you looking for?' />
            <div className='absolute top-0  right-[20px] text-[24px]'><CiSearch /></div>
           </div>
            <div className='ml-10'><CiHeart /></div>
          </div>
          
        </div>
      </Container>
    </div>
  )
}

export default Navbar