import { React, useState,useEffect } from 'react';
import { CgProfile, CgYoutube } from "react-icons/cg";
import { FaTelegram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';

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
import upiSvg from '../assets/upi.webp';
import UpiCongrats from '../assets/upiCongrats.png';
import congratsLogo from '../assets/congratsLogo-removebg-preview.png';
import vipLogo from '../assets/vipLogo.png';

function Hack() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [upiModel,setUpiModel]=useState(false);
  const [paytmurl,setPaytmUrl]=useState("");
  const [phonePayUrl,setPhonePayUrl]=useState("");
  const [gPayUrl,setgPayUrl]=useState("");
  const [bhimUrl,setbhimPayUrl]=useState("");
  const [orderStatus, setOrderStatus] = useState(null); // For tracking payment status
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);
  const [orderId, setOrderId] = useState(null); // Store the order ID
  const navigate=useNavigate();
  



  const handlePayment = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Generate unique order ID
    const num = Date.now() + Math.floor(Math.random() * 1000);
    const postData = {
      token: "225e3b-5843ec-ddb76d-a14f84-5c4741",
      order_id: num,
      txn_amount: 650,
      txn_note: "Pay For Premium Subscription",
      product_name: "Premium Subscription",
      customer_name: localStorage.getItem('userName'),
      customer_mobile: "7878982321",
      customer_email: localStorage.getItem('userName'),
      redirect_url: "https://peaceful-cheesecake-50562a.netlify.app/wallet.php"
    };

    console.log(postData)
    try {
      const response = await axios.post('https://paymentapibackend.onrender.com/api/order/create', postData);
      const { data } = response;
      console.log(data)
      if (data.status) {
        setPaymentUrl(data.results.payment_url);
        window.location.href = data.results.payment_url;  // Redirect to the payment page
      } else {
        setError(data.message || 'Order creation failed');
      }
    } catch (err) {
      toast.error('Server not working, please try after 1 minute.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000, // Duration in milliseconds (5 seconds)
      });
      setError('An error occurred. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const handlePaymentUpi = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    

    // Generate unique order ID
    const num = Date.now() + Math.floor(Math.random() * 1000);
    const postData = {
      token: "225e3b-5843ec-ddb76d-a14f84-5c4741",
      order_id: num,
      txn_amount: 10,
      txn_note: "Pay For Premium Subscription",
      product_name: "Premium Subscription",
      customer_name: localStorage.getItem('userName'),
      customer_mobile: "7878982321",
      customer_email: localStorage.getItem('userName'),
      redirect_url: `https://localhost:5173/hack?order_id=${num}&status=success`
    };

    console.log(postData)
    try {
      const response = await axios.post('https://paymentapibackend.onrender.com/api/order/create', postData);
      const { data } = response;
      console.log(data)
      if (data.status) {
        navigate('/paymentUpi',{
          state:{
            orderId:postData.order_id,
            token:postData.token,
            transaction:data.results
          }
        })
        setPaytmUrl(data.results.upi_intent.paytm)
        setPhonePayUrl(data.results.upi_intent.phonepe)
        setgPayUrl(data.results.upi_intent.gpay)
        setbhimPayUrl(data.results.upi_intent.bhim)
        // setPaymentUrl(data.results.payment_url);
        // window.location.href = data.results.payment_url;  // Redirect to the payment page
      } else {
        setError(data.message || 'Order creation failed');
      }
    } catch (err) {
      toast.error('Server not working, please try after 1 minute.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000, // Duration in milliseconds (5 seconds)
      });
      setError('An error occurred. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const toggleUpiModal = () => {
    setUpiModel(!upiModel);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const checkPaymentStatus = async () => {
    if (orderId) {
      alert(orderId)
      console.log(`>>>>>>>>orderId`)
      try {
        const statusResponse = await axios.post('https://paymentapibackend.onrender.com/api/order/create', {
            token: "225e3b-5843ec-ddb76d-a14f84-5c4741",
            order_id: orderId,
        });
        const { data } = statusResponse;
        if (data.status) {
          setOrderStatus(data.results); // Store the transaction details
          setIsPaymentCompleted(true);
          toast.success('Payment successful!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
          });
        } else {
          setOrderStatus(null);
          console.log("payment not done")
          toast.error('Payment not completed yet.', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
          });
        }
      } catch (err) {
        console.log("Payment not checking")
        toast.error('Error checking payment status.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
      }
    }
  };
  useEffect(() => {
    if (orderId && !isPaymentCompleted) {
      console.log(`>>>>>>>orderId is >>>>>>>${orderId}`)
      const interval = setInterval(() => {
        checkPaymentStatus(); // Check the status every 10 seconds
      }, 1000);
      return () => clearInterval(interval); // Cleanup the interval on component unmount
    }
  }, [orderId, isPaymentCompleted]);

  return (
    <div className='bg-white h-screen flex flex-col p-4 overflow-x-hidden'>
      <div className='flex justify-center w-full items-center py-2'>
        <div className='w-20 h-8 justify-end flex items-center'>
          <img src={free} alt="Free Tier" />
        </div>
        <h1 className='text-md px-2 text-[#B4D7FF] font-bold text-start'>You’re on FREE TIER</h1>
      </div>

      <h1 className='text-2xl px-8 text-[#2331DF] font-bold text-center'>Colour Trading Hack</h1>

      {/* Link for the first hack */}
      <Link to="/result" className='text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center relative'>
        <img src={freeTag} alt="Free Tag" className='h-8 w-8 absolute -mt-8 -ml-6'/>
        <img src={img1} alt="Hack 1" className='h-12 w-12'/>
        <h1 className='px-4'>BaziMaar Hack</h1>
      </Link>

      {/* Order creation button */}
      <button 
        onClick={handlePayment} 
        className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between"
        disabled={loading}
      >
        <div className="flex items-center">
          <img src={img3} alt="Hack 2" className="h-12 w-12" />
          <h1 className="px-4">Trianga Hack</h1>
        </div>
        <img src={vip} alt="VIP" className="h-8 w-8" />
      </button>

      {/* Other hacks */}
      <Link to="/result" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={img4} alt="Hack 3" className="h-12 w-12" />
          <h1 className="px-4">91Club Hack</h1>
        </div>
        <img src={vip} alt="VIP" className="h-8 w-8" />
      </Link>
      <Link to="/result" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={img2} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">TC Lottery Hack</h1>
        </div>
        <img src={vip} alt="VIP" className="h-8 w-8" />
      </Link>
      <Link to="/result" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={img4} alt="Hack 3" className="h-12 w-12" />
          <h1 className="px-4">91Club Hack</h1>
        </div>
        <img src={vip} alt="VIP" className="h-8 w-8" />
      </Link>
      <Link to="/result" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={img2} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">TC Lottery Hack</h1>
        </div>
        <img src={vip} alt="VIP" className="h-8 w-8" />
      </Link>
      <Link to="/result" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={img4} alt="Hack 3" className="h-12 w-12" />
          <h1 className="px-4">91Club Hack</h1>
        </div>
        <img src={vip} alt="VIP" className="h-8 w-8" />
      </Link>
      <Link to="/result" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={img2} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">TC Lottery Hack</h1>
        </div>
        <img src={vip} alt="VIP" className="h-8 w-8" />
      </Link>
      <Link to="/result" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={img4} alt="Hack 3" className="h-12 w-12" />
          <h1 className="px-4">91Club Hack</h1>
        </div>
        <img src={vip} alt="VIP" className="h-8 w-8" />
      </Link>
      <Link to="/result" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={img2} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">TC Lottery Hack</h1>
        </div>
        <img src={vip} alt="VIP" className="h-8 w-8" />
      </Link>
      <Link to="/result" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={img4} alt="Hack 3" className="h-12 w-12" />
          <h1 className="px-4">91Club Hack</h1>
        </div>
        <img src={vip} alt="VIP" className="h-8 w-8" />
      </Link>
      <Link to="/result" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={img2} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">TC Lottery Hack</h1>
        </div>
        <img src={vip} alt="VIP" className="h-8 w-8" />
      </Link>
      <Link to="/result" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={img4} alt="Hack 3" className="h-12 w-12" />
          <h1 className="px-4">91Club Hack</h1>
        </div>
        <img src={vip} alt="VIP" className="h-8 w-8" />
      </Link>
      <Link to="/result" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={img2} alt="Hack 4" className="h-12 w-12" />
          <h1 className="px-4">TC Lottery Hack</h1>
        </div>
        <img src={vip} alt="VIP" className="h-8 w-8" />
      </Link>


      {/* VIP Mode access */}
      <div onClick={toggleModal} className="text-2xl bg-red-600 px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="px-4">Access VIP Mode</h1>
        </div>
        <img src={vip} alt="VIP" className="h-8 w-8" />
      </div>

      {/* Social Media Icons */}
      <div className='w-80% h-16 m-8 flex justify-center items-center'>
            <div className="grid grid-cols-3 gap-3">
              <a href="https://wa.me/+917414837658" target="_blank" rel="noopener noreferrer"className="flex justify-center items-center">
                <FaWhatsapp className="w-14 h-14 text-green-500" />
              </a>
            
              <a href="https://telegram.me/ashuwithme" target="_blank" rel="noopener noreferrer"className="flex justify-center items-center border-2 border-blue-500 rounded-full">
                <FaTelegramPlane alt="" className="w-10 h-10 text-blue-500" />
              </a>
              <a href="https://youtube.com/@dtboss2023" target="_blank" rel="noopener noreferrer"className="flex justify-center items-center border-2 border-red-500 rounded-full">
                <CgYoutube alt="" className="w-10 h-10 text-red-700" />
              </a>
            </div>

        </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-50">
          <div className="border-red-500 border-2 shadow-opacity-100 text-center bg-[#b4d7ff] p-6 rounded-lg shadow-xl max-w-sm w-full">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 bg-red-500 w-10 h-10 rounded-full font-bold text-white"
            >
              X
            </button>
            <div className='flex items-center justify-center mb-4'>
              <h1 className="text-lg font-bold text-[#c1272d]">
                ACCESS VIP HACK IN <span className="text-[#1ba553]">₹650</span>
              </h1>
            </div>

            <h2 className="text-xl font-bold text-center mb-4">VIP Mode Payment</h2>

            <div className="text-center mb-4">
              <button
                onClick={handlePayment}
                className="bg-[#e21e2c] text-xl font-bold text-white py-2 mt-3 px-2 rounded-full w-2/3 border-2 border-white"
              >
                PAY VIA QR
              </button>
            </div>

            <div className="text-red-500">INSTANT ACTIVATION</div>
            <div>
              <img src={upiSvg} alt="UPI QR" />
            </div>
            <div className="text-blue-600 font-bold"><p>No money - No Accuracy</p></div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Hack;
