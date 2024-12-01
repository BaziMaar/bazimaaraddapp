import { React,useEffect,useState } from 'react'
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
import reset from '../assets/reset.png'
import vid from '../assets/vid.png'
import vip from '../assets/vip.png'
import resultFound from '../assets/resultFound.png'
import res from '../assets/res.png'
import { FaTelegram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
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
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Bazimaar from "/public/BaziMaarIcon.png"

function Result() {
    const [number,setNumber]=useState("");
    const [buttonClicked,setButtonClicked]=useState(false);
    const [answer,setAnswer]=useState(0);
    const [name,setName]=useState('');
    const location=useLocation()
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10).replace(/-/g, '');
    const [link,setLink]=useState('');

    useEffect(()=>{
        const params = new URLSearchParams(location.search);
        const names=params.get("name")
        const links=decodeURIComponent(params.get("url"))
        setLink(links)
        setName(names)
    })
    
    const handleButtonClick = () => {
        const randomNumber = Math.floor(Math.random() * 10); // Generates a number between 0 and 10
        setAnswer(randomNumber)
        setButtonClicked(true);
    };
    
    const handleResetClick = () => {
        setNumber(""); // Clear input
        setButtonClicked(false); // Reset state
      };
  return (
    <>
      <div className='bg-white h-screen flex flex-col p-4 overflow-x-hidden'>
  {
    name == "Bazimaar Hack" && (
      <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
        <img src={Bazimaar} alt="" className="h-12 w-12 rounded-full"/>
        <h1 className="px-4">Bazimaar Hack</h1>
      </div>
    )
  }
    {
    name == "Tiranga Hack" && (
      <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
        <img src={img3} alt="" className="h-12 w-12" />
        <h1 className="px-4">Tiranga Hack</h1>
      </div>
    )
  }
  {
    name == "91 Club Hack" && (
      <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
        <img src={img4} alt="" className="h-12 w-12" />
        <h1 className="px-4">91 Club Hack</h1>
      </div>
    )
  }
  {
    name == "TC Lottery Hack" && (
      <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
        <img src={img2} alt="" className="h-12 w-12" />
        <h1 className="px-4">TC Lottery Hack</h1>
      </div>
    )
  }
  {
    name == "66 Lottery Hack" && (
      <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
        <img src={Lottery} alt="" className="h-12 w-12" />
        <h1 className="px-4">66 Lottery Hack</h1>
      </div>
    )
  }
  {
    name == "Daman Hack" && (
      <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
        <img src={Daman} alt="" className="h-12 w-12" />
        <h1 className="px-4">Daman Hack</h1>
      </div>
    )
  }
  {
    name == "Diu Win Hack" && (
      <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
        <img src={DiuWin} alt="" className="h-12 w-12" />
        <h1 className="px-4">Diu Win Hack</h1>
      </div>
    )
  }
  {
    name == "Raja Luck Hack" && (
      <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
        <img src={Raja} alt="" className="h-12 w-12" />
        <h1 className="px-4">Raja Luck Hack</h1>
      </div>
    )
  }
  {
    name == "Big Daddy Game Hack" && (
      <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
        <img src={Big} alt="" className="h-12 w-12" />
        <h1 className="px-4">Big Daddy Game Hack</h1>
      </div>
    )
  }
  {
    name == "OKWin Hack" && (
      <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
        <img src={Ok} alt="" className="h-12 w-12" />
        <h1 className="px-4">OKWin Hack</h1>
      </div>
    )
  }
  {
    name == "Empire Win Hack" && (
      <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
        <img src={Empire} alt="" className="h-12 w-12" />
        <h1 className="px-4">Empire Win Hack</h1>
      </div>
    )
  }
  {
    name == "Super Game Hack" && (
      <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
        <img src={SuperGame} alt="" className="h-12 w-12" />
        <h1 className="px-4">Super Game Hack</h1>
      </div>
    )
  }
  {
    name == "Elite Bet Hack" && (
      <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
        <img src={EliteBet} alt="" className="h-12 w-12" />
        <h1 className="px-4">Elite Bet Hack</h1>
      </div>
    )
  }
  {
    name == "Golden Club Hack" && (
      <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
        <img src={GoldenClub} alt="" className="h-12 w-12" />
        <h1 className="px-4">Golden Club Hack</h1>
      </div>
    )
  }
  {
  name === "Goa Game Hack" && (
    <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
      <img src={Goa} alt="Hack 4" className="h-12 w-12" />
      <h1 className="px-4">Goa Game Hack</h1>
    </div>
  )
}

{
  name === "82 Lottery Hack" && (
    <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
      <img src={Eight} alt="Hack 3" className="h-12 w-12" />
      <h1 className="px-4">82 Lottery Hack</h1>
    </div>
  )
}

{
  name === "Sikkim Hack" && (
    <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
      <img src={Sikkim} alt="Hack 4" className="h-12 w-12" />
      <h1 className="px-4">Sikkim Hack</h1>
    </div>
  )
}

{
  name === "KWG Hack" && (
    <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
      <img src={KWG} alt="Hack 4" className="h-12 w-12" />
      <h1 className="px-4">KWG Hack</h1>
    </div>
  )
}

{
  name === "IN999 Hack" && (
    <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
      <img src={In} alt="Hack 4" className="h-12 w-12" />
      <h1 className="px-4">IN999 Hack</h1>
    </div>
  )
}

{
  name === "55 Club Hack" && (
    <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
      <img src={Five} alt="Hack 4" className="h-12 w-12" />
      <h1 className="px-4">55 Club Hack</h1>
    </div>
  )
}

{
  name === "51 Club Hack" && (
    <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
      <img src={One} alt="Hack 4" className="h-12 w-12" />
      <h1 className="px-4">51 Game Hack</h1>
    </div>
  )
}

{
  name === "Bharat Club Hack" && (
    <div className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center">
      <img src={Bharat} alt="Hack 4" className="h-12 w-12" />
      <h1 className="px-4">Bharat Club Hack</h1>
    </div>
  )
}


        <div className='flex px-4 justify-center'>
            <h1>Don't have {name},</h1>
            <a href={link}><h1 className='text-[#C1272D] cursor-pointer'>Sign Up Now</h1></a>
        </div>
        <div className='flex px-4 mt-4 text-lg font-bold justify-center'>
            <h1 className='text-[#2331DF]'>Enter last </h1>
            <h1 className='text-[#1BA553] cursor-pointer px-1'> 4 Digits</h1>
            <h1 className='text-[#2331DF]'>Of round Id</h1>
        </div>


        <div className='flex px-4 mt-4 text-lg font-bold justify-center'>
            <h1 className='text-black px-2 py-2'>{formattedDate}*****</h1>
            <input
                type="number"
                id="textInput"
                value={number}
                onChange={(e)=>{setNumber(e.target.value)}}
                placeholder="0000"
                maxLength={4}                
                className="w-16 px-2 py-0 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onInput={(e) => {
                    if (e.target.value.length > 4) {
                      e.target.value = e.target.value.slice(0, 4);
                    }
                }}
            />
        </div>
        <div className='w-80% h-[0.05rem] mt-2 bg-black'></div>
        {number.length==4&&buttonClicked==false&&<div><button onClick={handleButtonClick} className="  text-xl font-bold mt-2 ml-28 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button></div>}

        {buttonClicked==true&&<div className='flex justify-center mt-4'>
            <img src={resultFound} alt="" className='md:h-16 w-fit'/>
        </div>}
        
        {buttonClicked&&<div class="bg-contain bg-center bg-no-repeat h-screen mt-2" 
             style={{ backgroundImage: `url(${res})` }}>
                <div className='flex justify-center items-center flex-col gap-4 self-center h-full'>
                    <div className='flex items-center'>
                        <div   className={`rounded-full w-4 h-4 ${answer === 0 || answer === 5? "bg-purple-600": answer % 2 === 0? "bg-red-600": "bg-green-600"}`}></div>
                        <div className='text-xl font-bold px-1'>{answer==0||answer==5?"purple":answer%2==0?"Red":"Green"}</div>
                    </div>
                    <div className='flex items-center'>
                        <IoCheckmarkDoneCircle className='text-green-600 rounded-full w-4 h-4'></IoCheckmarkDoneCircle>
                        <div className='text-xl font-bold px-1'>{answer<5?"Small":"Big"}</div>
                    </div>
                    <div className='flex items-center'>
                        <IoCheckmarkDoneCircle className='text-green-600 rounded-full w-4 h-4'></IoCheckmarkDoneCircle>
                        <div className='text-xl font-bold px-1'>{answer}</div>
                    </div>
                </div>
        </div>}

       <div className='flex flex-col gap-10 items-center w-24 ml-28'>
            <img onClick={handleResetClick} src={reset} alt="" className="h-24 w-fit" />
            <img src={vid} alt="" className="h-24 w-fit" />
       </div>
       
      </div>
    </>
  )
}

export default Result
