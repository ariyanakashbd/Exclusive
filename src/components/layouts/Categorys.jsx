import React from 'react'
import Container from './Container';
import mobaile from '../../assets/Category-CellPhone.webp';
import computers from '../../assets/Category-Computer.webp';
import SmartWatch from '../../assets/Category-SmartWatch.webp';
import HeadPhones from '../../assets/Category-Headphone.webp';
import Gaming from '../../assets/Category-Gamepad.webp';
import { CiCamera } from "react-icons/ci";


const Categorys = () => {
  return (
    <>
    <Container>
        <div className='mt-20 mb-100'>
            <div>
             <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-10 bg-red-500 rounded"></div>
             <span className="text-red-500 font-semibold">Categories </span>
            </div>
            <h3 className='font-medium text-[36px] font-pop text-[#000000] mt-5 mb-15'>Browse By Category</h3>
            <div  className='flex justify-between items-center text-center gap-x-6 group'>
              <div className='flex flex-col items-center border-2 border-[#b4b0b0d7] px-10 py-6 rounded-[5px] hover:bg-[#DB4444] group-hover:text-[#ffffff]'>
                <img src={mobaile} alt="mobaile" />
                <h3 className='text-[#000000] text-[16px] font-medium font-pop mt-4 mb-6 text-center'>Phones</h3>
              </div>
              <div className='flex flex-col items-center border-2 border-[#b4b0b0d7] px-10 py-6 rounded-[5px] hover:bg-[#DB4444] hover:text-[#ffffff]'>
                <img src={computers} alt="computers" />
                <h3 className='text-[#000000] text-[16px] font-medium font-pop mt-4 mb-6 text-center'>Computers</h3>
              </div>
              <div className='flex flex-col items-center border-2 border-[#b4b0b0d7] px-10 py-6 rounded-[5px] hover:bg-[#DB4444] hover:text-[#ffffff]'>
                <img src={SmartWatch} alt="SmartWatch" />
                <h3 className='text-[#000000] text-[16px] font-medium font-pop mt-4 mb-6'>SmartWatch</h3>
              </div>
              <div className='flex flex-col items-center border-2 border-[#b4b0b0d7] px-10 py-6 rounded-[5px] hover:bg-[#DB4444] hover:text-[#ffffff]'>
               <CiCamera className='text-[52px]'/>
               <h3 className='text-[#000000] text-[16px] font-medium font-pop mt-4 mb-6'>Camera</h3>
              </div>
              <div className='flex flex-col items-center border-2 border-[#b4b0b0d7] px-10 py-6 rounded-[5px] hover:bg-[#DB4444] hover:text-[#ffffff]'>
                <img src={HeadPhones} alt="HeadPhones" />
                <h3 className='text-[#000000] text-[16px] font-medium font-pop mt-4 mb-6'>HeadPhones</h3>
              </div>
              <div className='flex flex-col items-center border-2 border-[#b4b0b0d7] px-10 py-6 rounded-[5px] hover:bg-[#DB4444] hover:text-[#ffffff]'>
                <img src={Gaming} alt="Gaming" />
                <h3 className='text-[#000000] text-[16px] font-medium font-pop mt-4 mb-6'>Gaming</h3>
              </div>
            </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Categorys