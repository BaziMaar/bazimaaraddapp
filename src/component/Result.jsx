import { React,useState } from 'react'
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


function Result() {
    const [number,setNumber]=useState("");
    const [buttonClicked,setButtonClicked]=useState(false);
    const [answer,setAnswer]=useState(0);
    const handleButtonClick = () => {
        const randomNumber = Math.floor(Math.random() * 11); // Generates a number between 0 and 10
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

        <div className='text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center'>
            <img src={img1} alt="" className='h-12 w-12'/>
            <h1 className='px-4'>BaziMaar Hack</h1>
        </div>
        <div className='flex px-4 justify-center'>
            <h1>Don't have trianga id,</h1>
            <h1 className='text-[#C1272D] cursor-pointer'>Sign Up Now</h1>
        </div>
        <div className='flex px-4 mt-4 text-lg font-bold justify-center'>
            <h1 className='text-[#2331DF]'>Enter last </h1>
            <h1 className='text-[#1BA553] cursor-pointer px-1'> 4 Digits</h1>
            <h1 className='text-[#2331DF]'>Of round Id</h1>
        </div>


        <div className='flex px-4 mt-4 text-lg font-bold justify-center'>
            <h1 className='text-black px-2 py-2'>2024100789849</h1>
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
                      e.target.value = e.target.value.slice(0, 4); // Limit input to 4 digits
                    }
                }}
            />
        </div>
        <div className='w-80% h-[0.05rem] bg-black'></div>
        {number.length==4&&buttonClicked==false&&<div><button onClick={handleButtonClick} className="  text-xl font-bold mt-10 ml-32 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button></div>}

        {buttonClicked==true&&<div className='flex justify-center'>
            <img src={resultFound} alt="" className='md:h-16 w-fit'/>
        </div>}
        
        {buttonClicked&&<div class="bg-contain bg-center bg-no-repeat h-screen" 
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

       <div className='flex flex-col gap-10 items-center'>
            <img onClick={handleResetClick} src={reset} alt="" className="h-24 w-fit" />
            <img src={vid} alt="" className="h-24 w-fit" />
       </div>
       
      </div>
    </>
  )
}

export default Result
