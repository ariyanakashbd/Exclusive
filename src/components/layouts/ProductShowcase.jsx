import React, { useEffect, useState } from 'react'
import Container from './Container'
import { Link } from 'react-router'
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import Frame from '../../assets/Frame.webp';
const ProductShowcase = ({ heading, allpro, title,button }) => {

  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            } else {
              hours = 23;

              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push("full");
      } else if (rating >= i - 0.5) {
        stars.push("half");
      } else {
        stars.push("empty");
      }
    }

    return stars;
  };

  return (
    <Container>
      <div className='font-pop'>
        {/* Top Heading */}
      <div className="flex items-center gap-3 mb-4 relative mt-20 font-pop">
        <div className="w-5 h-10 bg-red-500 rounded"></div>
        <h3 className="text-red-500 font-semibold">{title}</h3>

        <div className={`flex gap-x-9 absolute top-21 right-0 z-30 ${heading === "Best Selling Products" && "hidden"}`}>
          <FaArrowLeftLong size={24} />
          <FaArrowRight size={24} />
        </div> 
      </div>

      {/* Heading + Timer */}
      <div className='flex items-center gap-20 mb-12 font-pop '>
        <h3 className='text-[36px] font-pop font-medium text-[#000000]'>
          {heading}
        </h3>

       {heading === "Flash Sales" &&
       <div className='flex items-center gap-4'>

          <div>
            <p className='text-[12px] font-medium text-[#000000]'>Days</p>
            <h4 className='text-[32px] font-bold text-[#000000]'>
              {String(timeLeft.days).padStart(2, "0")}
            </h4>
          </div>

          <span className='text-[#DB4444] text-[28px] font-bold'>:</span>

          <div>
            <p className='text-[12px] font-medium text-[#000000]'>Hours</p>
            <h4 className='text-[32px] font-bold text-[#000000]'>
              {String(timeLeft.hours).padStart(2, "0")}
            </h4>
          </div>

          <span className='text-[#DB4444] text-[28px] font-bold'>:</span>

          <div>
            <p className='text-[12px] font-medium text-[#000000]'>Minutes</p>
            <h4 className='text-[32px] font-bold text-[#000000]'>
              {String(timeLeft.minutes).padStart(2, "0")}
            </h4>
          </div>

          <span className='text-[#DB4444] text-[28px] font-bold'>:</span>

          <div>
            <p className='text-[12px] font-medium text-[#000000]'>Seconds</p>
            <h4 className='text-[32px] font-bold text-[#000000]'>
              {String(timeLeft.seconds).padStart(2, "0")}
            </h4>
          </div>

        </div>
        
        }
      </div>

      {/* Products */}
      <div className="grid grid-cols-4 gap-7.5 font-pop">
        {allpro.map((item) => (
          <div
            key={item.id}
            className="relative group"
          >
            {/* Product Image */}
            <div className="relative bg-[#F5F5F5] overflow-hidden">
              <img
                className="w-full h-[250px] object-contain p-6"
                src={item.thumbnail}
                alt={item.title}
              />

              {/* Icons */}
              <div className="absolute top-3 right-3">
                <CiHeart className="text-[24px] bg-white rounded-full p-1 mb-2 cursor-pointer" />
                <LuEye className="text-[24px] bg-white rounded-full p-1 cursor-pointer" />
              </div>

              {/* Add To Cart */}
              <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link
                  to="/cat"
                  className="block w-full bg-black text-white py-3 text-center text-[14px] font-medium"
                >
                  Add To Cart
                </Link>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-4">
              <h3 className="text-[16px] font-medium text-[#000000] mb-2 line-clamp-1">
                {item.title}
              </h3>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#DB4444] font-medium">
                  ${item.price}
                </span>
              </div>

              <div className="flex items-center gap-1">
                {renderStars(item.rating).map((type, index) => {
                  if (type === "full") {
                    return (
                      <FaStar
                        key={index}
                        className="text-[#FFAD33]"
                      />
                    );
                  }

                  if (type === "half") {
                    return (
                      <FaStarHalfAlt
                        key={index}
                        className="text-[#FFAD33]"
                      />
                    );
                  }

                  return (
                    <FaRegStar
                      key={index}
                      className="text-[#D9D9D9]"
                    />
                  );
                })}

                <span className="text-[#808080] text-[14px] ml-2">
                  ({Math.floor(item.rating * 20)})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
     <div className='relative'>
       <div className={`text-center mt-12 font-pop ${heading === "Best Selling Products" && "absolute bottom-100 font-pop right-5"}`}>
        <Link
          to="/All Products"
          className="bg-[#DB4444] px-12 py-4 text-white rounded-[4px]" >
          {button}
        </Link>
      </div>
     </div>
    {heading ==="Best Selling Products" && <div className='mt-35 mb-10 relative'>
      <img src={Frame} alt="Frame" />
       <div className=''>
      <div className='flex items-center gap-4 absolute top-[270px] left-[55px]'>
      <div className='w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center'>
        <h4 className='text-[16px] font-semibold text-black leading-none'>
          {String(timeLeft.days).padStart(2, "0")}
        </h4>
        <p className='text-[11px] text-black'>Days</p>
      </div>

      <div className='w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center'>
        <h4 className='text-[16px] font-semibold text-black leading-none'>
          {String(timeLeft.hours).padStart(2, "0")}
        </h4>
        <p className='text-[11px] text-black'>Hours</p>
      </div>

      <div className='w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center'>
        <h4 className='text-[16px] font-semibold text-black leading-none'>
          {String(timeLeft.minutes).padStart(2, "0")}
        </h4>
        <p className='text-[11px] text-black'>Minutes</p>
      </div>

      <div className='w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center'>
        <h4 className='text-[16px] font-semibold text-black leading-none'>
          {String(timeLeft.seconds).padStart(2, "0")}
        </h4>
        <p className='text-[11px] text-black'>Seconds</p>
      </div>

    </div>
       </div>
     </div>
     }
      </div>
    </Container>
  )
}

export default ProductShowcase