import React from 'react'
import Container from './Container'
import { Link } from 'react-router'
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";

const ProductShowcase = ({ allpro }) => {

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
      <div className=" relative grid grid-cols-4 gap-7.5 font-pop text-[16px] font-medium text-[#000000]">
        {allpro.map((item) => (
          <div className="relative">
            <img className='bg-[#F5F5F5] mb-2' src={item.thumbnail} alt={item.title} />
            <h3 className='mb-2'>{item.title}</h3>
            <p className='mb-2'>${item.price}</p>
            <div className="flex gap-1">
              {renderStars(item.rating).map((type) => {
                if (type === "full") {
                  return <FaStar className="text-yellow-400" />;
                }
                if (type === "half") {
                  return <FaStarHalfAlt className="text-yellow-400" />;
                }
                return <FaRegStar className="text-gray-300" />;
              })}
            </div>
             <div className='absolute top-4 right-4 text-[24px]'>
               <CiHeart className='mb-4 bg-white rounded-2xl' />
               <LuEye className=' bg-white rounded-2xl' />
              </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/cat" className="bg-red-500 px-10 py-3 text-white">
          View All Products
        </Link>
      </div>
    </Container>
  )
}

export default ProductShowcase