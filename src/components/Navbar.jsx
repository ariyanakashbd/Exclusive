import React from 'react'
import Container from './layouts/Container';
import logo from '../assets/Exclusive.webp';
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from 'react-router';


const Navbar = () => {
  return (
    <div>
      <Container>
        <div className='flex justify-between mt-10 items-center'>
          <div><img src={logo} alt="" /></div>
          <div>
            <ul className='flex gap-x-12 text-[#000000] font-pop text-[16px]'>
             <Link><li className="border-b-2 border-transparent hover:border-gray-500 transition-all duration-300 ease-in-out">Home</li></Link>
              <Link><li className="border-b-2 border-transparent hover:border-gray-500 transition-all duration-300 ease-in-out">Contact</li></Link>
              <Link><li className="border-b-2 border-transparent hover:border-gray-500 transition-all duration-300 ease-in-out">About</li></Link>
              <Link><li className="border-b-2 border-transparent hover:border-gray-500 transition-all duration-300 ease-in-out">Sing Up</li></Link>
            </ul>
          </div>  
          <div className='flex'>
           <div className='relative'>
             <input className='w-[300px] h-[18px] pl-5 p-4 placeholder:text-[#646060] placeholder:font-pop placeholder:text-[16px] border-1 border-[#868686] rounded-[5px]' type="text" placeholder='What are you looking for?' />
            <div className='absolute top-[5px]  right-[10px] text-[24px]'>
              <CiSearch />
            </div>

           </div>
            <div className='ml-6 text-[32px] text-[#000000] flex gap-x-4'>
              <CiHeart />
              <LuShoppingCart />
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  )
}

export default Navbar