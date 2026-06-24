import React from 'react';
import Container from './layouts/Container';
import { RiSendPlaneLine } from 'react-icons/ri';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { FiTwitter, FiInstagram } from 'react-icons/fi'; // এখানে ফিক্স করা হয়েছে
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className="bg-black font-pop text-white font-poppins pt-20 pb-6 border-t border-gray-800">
      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          
          {/* Column 1: Exclusive / Subscribe */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[24px] font-bold tracking-wide">Exclusive</h2>
            <h3 className="text-xl font-medium">Subscribe</h3>
            <p className="text-sm text-gray-300">Get 10% off your first order</p>
            {/* Email Input Box */}
            <div className="relative max-w-[217px] mt-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border border-white rounded py-3 pl-4 pr-10 text-sm text-gray-400 placeholder-gray-600 focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-xl hover:text-gray-400 transition-colors">
                <RiSendPlaneLine />
              </button>
            </div>
          </div>

          {/* Column 2: Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">Support</h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-[200px]">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <Link to="mailto:exclusive@gmail.com" className="text-sm text-gray-300 hover:underline">
              exclusive@gmail.com
            </Link>
            <Link href="tel:+88015888889999" className="text-sm text-gray-300 hover:underline">
              +88015-88888-9999
            </Link>
          </div>

          {/* Column 3: Account */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">Account</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><Link href="#" className="hover:underline">My Account</Link></li>
              <li><Link href="#" className="hover:underline">Login / Register</Link></li>
              <li><Link href="#" className="hover:underline">Cart</Link></li>
              <li><Link href="#" className="hover:underline">Wishlist</Link></li>
              <li><Link href="#" className="hover:underline">Shop</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Link */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">Quick Link</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Terms Of Use</Link></li>
              <li><Link href="#" className="hover:underline">FAQ</Link></li>
              <li><Link href="#" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Column 5: Download App */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">Download App</h3>
            <p className="text-xs text-gray-400 font-medium">Save $3 with App New User Only</p>
            
            {/* QR and App Stores */}
            <div className="flex gap-3 items-center">
              {/* QR Code Placeholder */}
              <div className="w-20 h-20 bg-white p-1 flex items-center justify-center rounded">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.apple.com/app-store/" 
                  alt="QR Code" 
                  className="w-full h-full object-contain"
                />
              </div>
              {/* App Buttons */}
              <div className="flex flex-col gap-2">
                <Link href="#" className="block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8 object-contain" />
                </Link>
                <Link href="#" className="block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8 object-contain" />
                </Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-xl mt-4">
              <Link href="#" className="hover:text-gray-400 transition-colors"><FaFacebookF /></Link>
              <Link href="#" className="hover:text-gray-400 transition-colors"><FiTwitter /></Link>
              <Link href="#" className="hover:text-gray-400 transition-colors"><FiInstagram /></Link>
              <Link href="#" className="hover:text-gray-400 transition-colors"><FaLinkedinIn /></Link>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-900 pt-6 text-center text-sm text-gray-600">
          <p>&copy; Copyright Rimel 2022. All right reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;