import React from 'react'
import Container from './Container';
import mobaile from '../../assets/Category-CellPhone.webp';
import computers from '../../assets/Category-Computer.webp';
import SmartWatch from '../../assets/Category-SmartWatch.webp';
import HeadPhones from '../../assets/Category-Headphone.webp';
import Gaming from '../../assets/Category-Gamepad.webp';
import { CiCamera } from "react-icons/ci";
import { FaArrowLeftLong,FaArrowRight } from "react-icons/fa6";


const Categorys = () => {
  return (
    <>
      <Container>
        <div className='border-1 border-[#a8a6a6ab] mt-23'></div>
        <div className='mt-20 mb-20'>
          <div>
            <div className="flex items-center gap-3 mb-4 relative">
              <div className="w-5 h-10 bg-red-500 rounded"></div>
              <h3 className="text-red-500 font-semibold">Categories</h3>
                <div className='flex gap-x-9 absolute top-21 right-0'>
                  <FaArrowLeftLong size={24}/>
                   <FaArrowRight size={24}/>
                </div>
            </div>

            <h3 className='font-medium text-[36px] font-pop text-[#000000] mt-5 mb-15'>
              Browse By Category
            </h3>

            <div className='flex justify-between items-center text-center gap-x-6'>

              <div className='flex flex-col items-center border-2 border-[#b4b0b0d7] px-10 py-6 rounded-[5px] hover:bg-[#DB4444] group cursor-pointer'>
                <img src={mobaile} alt="mobaile" className='group-hover:brightness-0 group-hover:invert' />
                <h3 className='text-[#000000] text-[16px] font-medium font-pop mt-4 mb-6 text-center group-hover:text-white'>
                  Phones
                </h3>
              </div>

              <div className='flex flex-col items-center border-2 border-[#b4b0b0d7] px-10 py-6 rounded-[5px] hover:bg-[#DB4444] group cursor-pointer'>
                <img src={computers} alt="computers" className='group-hover:brightness-0 group-hover:invert' />
                <h3 className='text-[#000000] text-[16px] font-medium font-pop mt-4 mb-6 text-center group-hover:text-white'>
                  Computers
                </h3>
              </div>

              <div className='flex flex-col items-center border-2 border-[#b4b0b0d7] px-10 py-6 rounded-[5px] hover:bg-[#DB4444] group cursor-pointer'>
                <img src={SmartWatch} alt="SmartWatch" className='group-hover:brightness-0 group-hover:invert' />
                <h3 className='text-[#000000] text-[16px] font-medium font-pop mt-4 mb-6 group-hover:text-white'>
                  SmartWatch
                </h3>
              </div>

              <div className='flex flex-col items-center border-2 border-[#b4b0b0d7] px-10 py-6 rounded-[5px] hover:bg-[#DB4444] group cursor-pointer'>
                <CiCamera className='text-[52px] group-hover:text-white' />
                <h3 className='text-[#000000] text-[16px] font-medium font-pop mt-4 mb-6 group-hover:text-white'>
                  Camera
                </h3>
              </div>

              <div className='flex flex-col items-center border-2 border-[#b4b0b0d7] px-10 py-6 rounded-[5px] hover:bg-[#DB4444] group cursor-pointer'>
                <img src={HeadPhones} alt="HeadPhones" className='group-hover:brightness-0 group-hover:invert' />
                <h3 className='text-[#000000] text-[16px] font-medium font-pop mt-4 mb-6 group-hover:text-white'>
                  HeadPhones
                </h3>
              </div>

              <div className='flex flex-col items-center border-2 border-[#b4b0b0d7] px-10 py-6 rounded-[5px] hover:bg-[#DB4444] group cursor-pointer'>
                <img src={Gaming} alt="Gaming" className='group-hover:brightness-0 group-hover:invert' />
                <h3 className='text-[#000000] text-[16px] font-medium font-pop mt-4 mb-6 group-hover:text-white'>
                  Gaming
                </h3>
              </div>

            </div>
          </div>
        </div>
        <div className='border-1 border-[#a8a6a6ab] mt-23'></div>
      </Container>
    </>
  )
}

export default Categorys