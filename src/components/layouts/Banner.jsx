import React from 'react'
import Container from './Container'
import { Link } from 'react-router';
import { FaAngleRight } from "react-icons/fa";


const Banner = () => {
  return (
    <>
    <div className=' border border-b-2 border-[#dad7d7] mt-5 mb-10'></div>
    <Container>
        <div className='flex '>
            <div className='max-w-[300px]'>
                <ul>
                   <li className='mb-4 font-pop text-[16px] text-[#000000]'>
                     <Link className='flex items-center '>Woman’s Fashion <span className='ml-13'><FaAngleRight /></span></Link>
                   </li>
                    <li className='mb-4 font-pop text-[16px] text-[#000000]'>
                        <Link className='flex items-center' >Men’s Fashion <span className='ml-13'><FaAngleRight /></span></Link>
                    </li>
                    <li className='mb-4 font-pop text-[16px] text-[#000000]'>Electronics</li>
                    <li className='mb-4 font-pop text-[16px] text-[#000000]'>Home & Lifestyle</li>
                    <li className='mb-4 font-pop text-[16px] text-[#000000]'>Medicine</li>
                    <li className='mb-4 font-pop text-[16px] text-[#000000]'>Sports & Outdoor</li>
                    <li className='mb-4 font-pop text-[16px] text-[#000000]'>Baby’s & Toys</li>
                    <li className='mb-4 font-pop text-[16px] text-[#000000]'>Groceries & Pets</li>
                    <li className='mb-4 font-pop text-[16px] text-[#000000]'>Health & Beauty</li>
                </ul>
            </div>
            <div>
                
            </div>
        </div>
    </Container>
    </>
  )
}

export default Banner