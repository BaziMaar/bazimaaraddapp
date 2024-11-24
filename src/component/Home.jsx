import { React ,useState,useEffect} from 'react'
import { CgProfile, CgYoutube } from "react-icons/cg";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import { FaTelegram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { Link } from 'react-router-dom';
import axios from 'axios';
function Home() {
  const [waLink,setWaLink]=useState("");
  const [tlLink,setTlLink]=useState("")
  const [ytLinks,setYtLink]=useState("")
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
  return (
    <>
      <div className='bg-white h-screen flex flex-col p-4 overflow-x-hidden'>
        <div className='flex justify-center w-full h-fit '>
            <div className='w-full'>
            </div>
            <h1 className='text-3xl bg-[#E6E7FB] px-8 py-4 text-[#2331DF] font-bold rounded-2xl'>Categories</h1>
            <div className='w-full justify-end flex items-center'>
                <CgProfile className='text-5xl'/>
            </div>
        </div>
        <Link to='/hack' className='bg-[#86B499] w-80% h-32 m-8 rounded-2xl grid grid-rows-2'>
            <div className='flex'>
                <div className='bg-[#BD3020] h-8 w-8 m-3 rounded-full'></div>
                <h1 className='text-3xl text-white font-bold m-2'>HACK & MOD</h1>
            </div>
            <div className="grid grid-cols-4">
              <div className="flex justify-center items-center">
                <img src={img1} alt="" className="w-16 h-16" />
              </div>
              <div className="flex justify-center items-center">
                <img src={img2} alt="" className="w-16 h-16 " />
              </div>
              <div className="flex justify-center items-center">
                <img src={img3} alt="" className="w-16 h-16 " />
              </div>
              <div className="flex justify-center items-center">
                <img src={img4} alt="" className="w-16 h-16" />
              </div>
            </div>

        </Link>
        <Link to="/hack" className='bg-[#86B499] w-80% h-32 m-8 rounded-2xl grid grid-rows-2'>
            <div className='flex'>
                <div className='bg-[#BD3020] h-8 w-8 m-3 rounded-full'></div>
                <h1 className='text-3xl text-white font-bold m-2'>GIFT CODES</h1>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex justify-center items-center">
                <img src={img9} alt="" className="w-16 h-16" />
              </div>
              <div className='grid grid-cols-1'
              style={{ gridTemplateRows: '40% 60%' }}>
                <h1 className='text-center text-white text-md font-bold p-0 m-0'>xxxx-xxxx-xxxx</h1>
                <div className="flex justify-center items-center">
                    <img src={img10} alt="" className="h-6 " />
                </div>
              </div>
              
            </div>

        </Link>
        <Link to="/hack" className='bg-[#86B499] w-80% h-32 m-8 rounded-2xl grid grid-rows-2'>
            <div className='flex'>
                <div className='bg-[#BD3020] h-8 w-8 m-3 rounded-full'></div>
                <h1 className='text-3xl text-white font-bold m-2'>NEW LOOTS</h1>
            </div>
            <div className="grid grid-cols-4">
              <div className="flex justify-center items-center">
                <img src={img7} alt="" className="w-14 h-14" />
              </div>
              <div className="flex justify-center items-center">
                <img src={img5} alt="" className="w-14 h-14 " />
              </div>
              <div className="flex justify-center items-center">
                <img src={img6} alt="" className="w-14 h-14 " />
              </div>
              <div className="flex justify-center items-center">
                <img src={img8} alt="" className="w-14 h-14" />
              </div>
            </div>

        </Link>
        <div className='w-80% h-16 m-8 flex justify-center items-center'>
            <div className="grid grid-cols-3 gap-3">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
                <FaWhatsapp className="w-14 h-14 text-green-500" />
              </a>
            
              <a href={tlLink} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center border-2 border-blue-500 rounded-full">
                <FaTelegramPlane alt="" className="w-10 h-10 text-blue-500" />
              </a>
              <a href={ytLinks} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center border-2 border-red-500 rounded-full">
                <CgYoutube alt="" className="w-10 h-10 text-red-700" />
              </a>
            </div>

        </div>
      </div>
    </>
  )
}

export default Home
