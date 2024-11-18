import { React, useState } from 'react';
import { CgProfile, CgYoutube } from "react-icons/cg";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import free from '../assets/free.png';
import freeTag from '../assets/freeTag.png';
import vip from '../assets/vip.png';
import okwin from '../assets/okwin.png';
import { FaTelegram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { Link } from 'react-router-dom';
import axios from 'axios';
import upiSvg from '../assets/upi.webp'
import UpiCongrats from '../assets/upiCongrats.png'
import congratsLogo from '../assets/congratsLogo-removebg-preview.png'
import vipLogo from '../assets/vipLogo.png'
import Lottery from  '/public/66Lottery Logo.png'
import Daman from '/public/Daman Game Logo.png'
import DiuWin from '/public/DiuWin Hack New Logo.png'
import Raja from '/public/Raja Luck Logo.png'
import Big from '/public/Bigdaddygame logo.png'
import Lot from '/public/lottery7.png'
import Ok from '/public/okwin logo.png'
import Goa from '/public/goa game.png'
import Eight from '/public/82 Lottery.png'
import Sikkim from '/public/sikkim game logo.png'
import KWG from '/public/kwg logo.png'
import In from '/public/in999 logo.png'
import Five from '/public/55club logo.png'
import One from '/public/51game.png'
import Bharat from '/public/Bharat-Club-new-logo.png'
import Bazimaar from "/public/BaziMaarIcon.png"

function vipHack() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [upiLinks, setUpiLinks] = useState(null);
  const [isCongratsOpen,setIsCongratsOpen]=useState(false);

  // Function to handle the order creation
 
  const toggleModal=()=>{
    setIsModalOpen(!isModalOpen);
  }
  const toggleCongrats=()=>{
    setIsCongratsOpen(!isCongratsOpen);
  }

  return (
    <>
      <div className='bg-white h-screen flex flex-col p-4 overflow-x-hidden'>
        <div className='flex justify-center w-full items-center py-2'>

          <h1 className='text-md px-2 text-[#B4D7FF] font-bold text-start'>You’re on VIP TIER</h1>
        </div>
        
        <h1 className='text-2xl px-8 text-[#2331DF] font-bold text-center'>Colour Trading Hack</h1>
        
        {/* Link for the first hack */}
        <Link to="/result?name=Bazimaar Hack" className='text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center relative'>
          <img src={Bazimaar} alt="" className='h-12 w-12 rounded-full '/>
          <h1 className='px-4'>BaziMaar Hack</h1>
        </Link>

        {/* Order creation button */}


        {/* Other hacks */}
        <Link to="/result?name=91 Club Hack" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
          <div className="flex items-center">
            <img src={img4} alt="" className="h-12 w-12" />
            <h1 className="px-4">91Club Hack</h1>
          </div>
        </Link>
        <Link to="/result?name=TC Lottery Hack" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
          <div className="flex items-center">
            <img src={img2} alt="" className="h-12 w-12" />
            <h1 className="px-4">TC Lottery Hack</h1>
          </div>
        </Link>
        < Link to="/result?name=66 Lottery Hack" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Lottery} alt="Hack 3" className="h-12 w-12" />
          <h1 className="px-4">66 Lottery Hack</h1>
        </div>
      </Link>
      <Link  to="/result?name=Daman Hack" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Daman} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">Daman Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=Diu Win Hack" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={DiuWin} alt="Hack 3" className="h-12 w-12" />
          <h1 className="px-4">Diu Win Hack</h1>
        </div>
      </Link>
      <Link  to="/result?name=Raja Luck Hack" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Raja} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">Raja Luck Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=Big Daddy Game Hack" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Big} alt="Hack 3" className="h-12 w-12" />
          <h1 className="px-4">Big Daddy Game Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=Hack 4" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Lot} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">Lottery 7 Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=OKWin Hack" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Ok} alt="Hack 3" className="h-12 w-12" />
          <h1 className="px-4">OKWin Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=Goa Game Hack" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Goa} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">Goa Game Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=82 Lottery Hack" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Eight} alt="Hack 3" className="h-12 w-12" />
          <h1 className="px-4">82 Lottery Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=Sikkim Hack" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Sikkim} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">Sikkim Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=KWG Hack" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={KWG} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">KWG Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=IN999 Hack" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={In} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">IN999 Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=55 Club Hack" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Five} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">55 Club Hack</h1>
        </div>
      </Link>
      <Link  to="/result?name=51 Club Hack" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={One} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">51 Club Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=Bharat Club Hack" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Bharat} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">Bharat Club Hack</h1>
        </div>
      </Link>

        {/* VIP Mode access */}
        <div className='items-center  '>
            <img src={vipLogo} alt="vip Logo" className=' h-12 w-72 mt-2 ml-6 rounded-lg'/>
        </div>

        {/* Social Media Icons */}
        <div className='w-80% h-16 m-8 flex justify-center items-center'>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex justify-center items-center">
              <FaWhatsapp className="w-14 h-14 text-green-500" />
            </div>
            <div className="flex justify-center items-center border-2 border-blue-500 rounded-full">
              <FaTelegramPlane className="w-10 h-10 text-blue-500" />
            </div>
            <div className="flex justify-center items-center border-2 border-red-500 rounded-full">
              <CgYoutube className="w-10 h-10 text-red-700" />
            </div>
          </div>
        </div>

        {/* Loading/Success/Error Messages */}
        {loading && <div className="text-center text-xl text-blue-500">Processing your request...</div>}
        {success && <div className="success-message text-center text-xl text-green-500">{success}</div>}
        {error && <div className="error-message text-center text-xl text-red-500">{error}</div>}
        {isCongratsOpen && (
          <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-50">
            <div className="border-red-500 border-2 shadow-opacity-100 text-center bg-[#b4d7ff] p-6 rounded-lg shadow-xl max-w-sm w-full">
              <button
                onClick={toggleCongrats}
                className="absolute top-2 right-2 bg-red-500 w-10 h-10 rounded-full font-bold text-white"
              >
                X
              </button>
              <div>
                <img src={UpiCongrats} alt="UPI QR" className='w-40 text-center align-items-center'/>
              </div>
              <div className='flex items-center justify-center mb-4'>
                <h1 className="text-lg font-bold text-[#1ba553]">
                   PAYMENT SUCCESSFUL !
                </h1>
              </div>
              <div>
                <p>
                  TRANSACTION ID : XXX-XXX-XXXX-XXX

                </p>
              </div>
              <div>
                <img src={congratsLogo} alt="congrats logo" />
              </div>
              <div>
                <img src={vipLogo} alt="vip logo" />
              </div>
              <div className=" mt-4 text-xl font-bold"><p>Validity : </p></div>
            </div>
          </div>
        )}
      </div>
    
    </>
  );
}

export default vipHack;
