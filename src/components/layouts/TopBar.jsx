import React, { useRef, useState } from 'react'
import Container from '../layouts/Container'
import { FaAngleDown } from "react-icons/fa";
import useOutsiteClick from './hooks/OutSiteClick';

const TopBar = () => {
  let [topDropDown, setTopDropDown] = useState(false);
  let topDrop = useRef(null);

  useOutsiteClick(topDrop,() => setTopDropDown(false),topDropDown
  );

  return (
    <>
      <div className='bg-black text-white'>
        <Container>
          <div className='relative flex items-center py-3'>
            <div className='mx-auto font-pop text-sm text-[#fafafa] font-normal'>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
              <button className='ml-2 border-b border-white cursor-pointer'>
                Shop now
              </button>
            </div>

            <div className='absolute right-0' ref={topDrop}>
              <div
                onClick={() => setTopDropDown(!topDropDown)}className='flex items-center gap-1 cursor-pointer'>
                English
                <FaAngleDown />
              </div>

              {topDropDown && 
                <div className='absolute top-8 right-0 bg-[#919191] p-3 rounded-[10px]'>
                  <ul>
                    <li>Bangla</li>
                    <li>Hindi</li>
                    <li>Arabic</li>
                  </ul>
                </div>
              }
            </div>

          </div>
        </Container>
      </div>
    </>
  )
}

export default TopBar