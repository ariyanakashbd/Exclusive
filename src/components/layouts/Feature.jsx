import React from 'react'
import Container from './Container';
import Frame1 from '../../assets/Frame1.webp'
import Frame2 from '../../assets/Frame2.webp'
import Frame3 from '../../assets/Frame3.webp'
import Frame4 from '../../assets/Frame4.webp'
import { TbTruckDelivery } from 'react-icons/tb';
import { FiHeadphones } from "react-icons/fi";
import { GoShieldCheck } from 'react-icons/go';
const Feature = () => {
  return (
    <>
        <Container>  
        <div className='mb-35 font-pop'>
             <div className='mb-35'>
            <div className="flex items-center gap-3 mb-4 relative mt-20 font-pop">
                <div className="w-5 h-10 bg-red-500 rounded"></div>
                <h3 className="text-red-500 font-semibold">Featured</h3>
                </div>
                <h3 className='text-[36px] font-semibold font-pop text-[#000000] mb-15'>New Arrival</h3>
                <div className='flex gap-x-7.5'>
                    <div>
                        <img src={Frame1} alt="" />
                    </div>
                    <div>                        
                        <div className='mb-7.5'>
                            <img src={Frame2} alt="" /> 
                        </div>
                        <div>
                         <div className='flex gap-x-7.5'>
                             <img src={Frame3} alt="" />
                              <img src={Frame4} alt="" />
                         </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center text-center">
          <div className="flex flex-col items-center max-w-[300px]">
            <div className="w-20 h-20 bg-gray-300 bg-opacity-60 rounded-full flex items-center justify-center mb-6">
              <div className="w-13 h-13 bg-black rounded-full flex items-center justify-center">
                <TbTruckDelivery className="text-white text-[40px]" />
              </div>
            </div>
            <h3 className="font-bold text-base text-black tracking-wider mb-2 uppercase whitespace-nowrap">
              FREE AND FAST DELIVERY
            </h3>
            <p className="text-sm text-gray-500 font-normal leading-relaxed">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[300px]">
            <div className="w-20 h-20 bg-gray-300 bg-opacity-60 rounded-full flex items-center justify-center mb-6">
              <div className="w-13 h-13 bg-black rounded-full flex items-center justify-center">
                <FiHeadphones className="text-white text-[40px]" />
              </div>
            </div>
            <h3 className="font-bold text-base text-black tracking-wider mb-2 uppercase whitespace-nowrap">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="text-sm text-gray-500 font-normal leading-relaxed">
              Friendly 24/7 customer support
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[300px]">
            <div className="w-20 h-20 bg-gray-300 bg-opacity-60 rounded-full flex items-center justify-center mb-6">
              <div className="w-13 h-13 bg-black rounded-full flex items-center justify-center">
                <GoShieldCheck className="text-white text-[40px]" />
              </div>
            </div>
            <h3 className="font-bold text-base text-black tracking-wider mb-2 uppercase whitespace-nowrap">
              MONEY BACK GUARANTEE
            </h3>
            <p className="text-sm text-gray-500 font-normal leading-relaxed">
              We return money within 30 days
            </p>
          </div>

        </div>
      </div>
        <div/>
        </div>
        </Container>
    </>
  )
}

export default Feature