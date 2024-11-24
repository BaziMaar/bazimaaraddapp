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
import vipLogo from '../assets/vipCut.png'
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
import VIP from '../assets/vipLogos.png'

function vipHack() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [upiLinks, setUpiLinks] = useState(null);
  const [isCongratsOpen,setIsCongratsOpen]=useState(false);
  const [waLink,setWaLink]=useState("");
  const [tlLink,setTlLink]=useState("")
  const [ytLinks,setYtLink]=useState("")

  // Function to handle the order creation
  useEffect(() => {
    const getLinks = async () => {
      try {
        const response = await axios.get('https://sattajodileak.com/payment/get_links');
        for(let i=0;i<response.data.length;i++){
          if(response.data[i].game_code==1){
            setWaLink(response.data[i].wa_link)
            setTlLink(response.data[i].tl_link)
            setYtLink(response.data[i].yt_link)
          }
        }
      } catch (error) {
        console.error("Error fetching links:", error.message); // Handle errors
      }
    };
    getLinks()
    
  }, []);
 
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
          <img className='w-10' src={VIP}/>
          <h1 className='text-md px-2 text-[#B4D7FF] font-bold text-start'>You’re on VIP TIER</h1>
        </div>
        
        <h1 className='text-2xl px-8 text-[#2331DF] font-bold text-center'>Colour Trading Hack</h1>
        
        {/* Link for the first hack */}
        <Link to="/result?name=Bazimaar Hack&url=https://bazimaargames.com/login" className='text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center relative'>
          <img src={Bazimaar} alt="" className='h-12 w-12 rounded-full '/>
          <h1 className='px-4'>BaziMaar Hack</h1>
        </Link>
        <Link to="/result?name=Tiranga Hack&url=https://www.tirangagames.top/#/register?invitationCode=87854589447" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
          <div className="flex items-center">
            <img src={img3} alt="" className="h-12 w-12" />
            <h1 className="px-4">Tiranga Hack</h1>
          </div>
        </Link>
        <Link to="/result?name=91 Club Hack&url=https://91club.bet/#/register?invitationCode=87134963862" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
          <div className="flex items-center">
            <img src={img4} alt="" className="h-12 w-12" />
            <h1 className="px-4">91Club Hack</h1>
          </div>
        </Link>
        <Link to="/result?name=TC Lottery Hack&url=https://www.9987up.co/#/register?invitationCode=2ETva2184281" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
          <div className="flex items-center">
            <img src={img2} alt="" className="h-12 w-12" />
            <h1 className="px-4">TC Lottery Hack</h1>
          </div>
        </Link>
        < Link to="/result?name=66 Lottery Hack&url=https://www.66lottery21.com/#/pages/login/register?invitationCode=0100161148" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Lottery} alt="Hack 3" className="h-12 w-12" />
          <h1 className="px-4">66 Lottery Hack</h1>
        </div>
      </Link>
      <Link  to="/result?name=Daman Hack&url=https://damangames.bet/#/register?invitationCode=1824814406257" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Daman} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">Daman Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=Diu Win Hack&url=https://diuwin.club/#/register?invitationCode=573322133054" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={DiuWin} alt="Hack 3" className="h-12 w-12" />
          <h1 className="px-4">Diu Win Hack</h1>
        </div>
      </Link>
      <Link  to="/result?name=Raja Luck Hack&url=https://rajaluck.com/#/register?invitationCode=RWVuj62448" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Raja} alt="Hack 4" className="h-12 w-12 rounded-full" />
          <h1 className="px-4">Raja Luck Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=Big Daddy Game Hack&url=https://www.bigdaddygame.org/#/register?invitationCode=5162610746590" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Big} alt="Hack 3" className="h-12 w-12" />
          <h1 className="px-4">Big Daddy Game Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=Lottery 7 Hack&url=https://www.lottery77appinin.com/#/register?invitationCode=1475713204859" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Lot} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">Lottery 7 Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=OKWin Hack&url= https://www.okwinappinin.org//#/register?invitationCode=743786243833" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Ok} alt="Hack 3" className="h-12 w-12" />
          <h1 className="px-4">OKWin Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=Goa Game Hack&url=https://goagame.com/#/register?invitationCode=16181495976" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Goa} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">Goa Game Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=82 Lottery Hack&url=https://india82appinin.org/#/register?invitationCode=666533745649" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Eight} alt="Hack 3" className="h-12 w-12" />
          <h1 className="px-4">82 Lottery Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=Sikkim Hack&url=https://sikkim111.com/#/register?invitationCode=123832167786" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Sikkim} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">Sikkim Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=KWG Hack&url=https://kwgvip1.com/#/register?invitationCode=1449288C67" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={KWG} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">KWG Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=IN999 Hack&url=https://in999.game/#/register?invitationCode=631342504375" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={In} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">IN999 Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=55 Club Hack&url=https://55wingo.in/#/register?invitationCode=152182688038" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Five} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">55 Club Hack</h1>
        </div>
      </Link>
      <Link  to="/result?name=51 Game Hack&url=https://51game3.com/#/register?invitationCode=184442747831" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={One} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">51 Game Hack</h1>
        </div>
      </Link>
      <Link to="/result?name=Bharat Club Hack&url=https://bharatclub.net/#/register?invitationCode=644332372640" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={Bharat} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">Bharat Club Hack</h1>
        </div>
      </Link>

        {/* VIP Mode access */}
        <div className='items-center  '>
            <img src={vipLogo} alt="vip Logo" className='mr-6 w-3/5 mx-16 m-2 rounded-lg'/>
        </div>

        {/* Social Media Icons */}
        <div className='w-80% h-16 m-8 flex justify-center items-center'>
            <div className="grid grid-cols-3 gap-3">
              <a href={waLink} target="_blank" rel="noopener noreferrer"className="flex justify-center items-center">
                <FaWhatsapp className="w-14 h-14 text-green-500" />
              </a>
            
              <a href={tlLink} target="_blank" rel="noopener noreferrer"className="flex justify-center items-center border-2 border-blue-500 rounded-full">
                <FaTelegramPlane alt="" className="w-10 h-10 text-blue-500" />
              </a>
              <a href={ytLinks} target="_blank" rel="noopener noreferrer"className="flex justify-center items-center border-2 border-red-500 rounded-full">
                <CgYoutube alt="" className="w-10 h-10 text-red-700" />
              </a>
            </div>
        </div>
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
