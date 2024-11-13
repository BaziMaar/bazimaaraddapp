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
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import upiSvg from '../assets/upi.webp'
import UpiCongrats from '../assets/upiCongrats.png'
import congratsLogo from '../assets/congratsLogo-removebg-preview.png'
import vipLogo from '../assets/vipLogo.png'
function Hack() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [upiLinks, setUpiLinks] = useState(null);
  const [isModalOpen,setIsModalOpen]=useState(false);
  const [isCongratsOpen,setIsCongratsOpen]=useState(false);
  const navigate=useNavigate();

  const handlePayment = async () => {
        setLoading(true);
        setError(null);

        const postData = {
            token: "225e3b-5843ec-ddb76d-a14f84-5c4741",
            order_id: "ORDS073319032036",
            txn_amount: 1,
            txn_note: "Pay For PanMitra",
            product_name: "Redmi Note 12 Pro",
            customer_name: "Adarsh Ranoji",
            customer_mobile: "9694668873",
            customer_email: "customer@gmail.com",
            redirect_url: "https://peaceful-cheesecake-50562a.netlify.app/wallet.php"
        };
        console.log(`>>>>>>>>>>>postDara${JSON.stringify(postData)}`)

        try {
            const response = await axios.post('https://cors-anywhere.herokuapp.com/https://allapi.in/order/create', postData);
            const { data } = response;
            console.log(data);

            if (data.status) {
                setPaymentUrl(data.results.payment_url);
                window.location.href = data.results.payment_url;  // Redirects to the payment page
            } else {
                setError(data.message || 'Order creation failed');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };


  // Function to handle the order creation
  const handleCreateOrder = () => {
    const data = {
      key: "a951c329-2895-44a6-8950-b7a28766762d",
      client_txn_id: "9694668873",
      amount: "100",
      p_info: "Product Name",
      customer_name: "Jon Doe",
      customer_email: "jondoe@gmail.com",
      customer_mobile: "9694668873",
      redirect_url: "http://google.com",
      udf1: "user defined field 1 (max 25 char)",
      udf2: "user defined field 2 (max 25 char)",
      udf3: "user defined field 3 (max 25 char)"
    };

    setLoading(true);
    setError(null);
    setSuccess(null);
    setPaymentUrl(null);
    setUpiLinks(null);


    // Call the API to create an order
    axios.post('http://localhost:5000/api/create_order', data)
      .then(response => {
        const responseData = response.data;

        // Check if the order was created successfully
        if (responseData.status === true) {
          setSuccess(responseData.msg); // "Order Created"
          setPaymentUrl(responseData.data.payment_url);
          setUpiLinks(responseData.data.upi_intent);

          // Redirect the user to the payment page (optional)
          window.location.href = responseData.data.payment_url;
        } else {
          setError('Failed to create order');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Failed to create order');
      })
      .finally(() => {
        setLoading(false);
      });
  };
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
          <div className='w-20 h-8 justify-end flex items-center'>
            <img src={free} alt="" />
          </div>
          <h1 className='text-md px-2 text-[#B4D7FF] font-bold text-start'>You’re on FREE TIER</h1>
        </div>
        
        <h1 className='text-2xl px-8 text-[#2331DF] font-bold text-center'>Colour Trading Hack</h1>
        
        {/* Link for the first hack */}
        <Link to="/result" className='text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center relative'>
          <img src={freeTag} alt="" className='h-8 w-8 absolute -mt-8 -ml-6'/>
          <img src={img1} alt="" className='h-12 w-12'/>
          <h1 className='px-4'>BaziMaar Hack</h1>
        </Link>

        {/* Order creation button */}
        <button 
          onClick={handlePayment} 
          className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between"
          disabled={loading}
        >
          <div className="flex items-center">
            <img src={img3} alt="" className="h-12 w-12" />
            <h1 className="px-4">Trianga Hack</h1>
          </div>
          <img src={vip} alt="" className="h-8 w-8" />
        </button>

        {/* Other hacks */}
        <Link to="/result" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
          <div className="flex items-center">
            <img src={img4} alt="" className="h-12 w-12" />
            <h1 className="px-4">91Club Hack</h1>
          </div>
          <img src={vip} alt="" className="h-8 w-8" />
        </Link>
        <Link to="/result" className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
          <div className="flex items-center">
            <img src={img2} alt="" className="h-12 w-12" />
            <h1 className="px-4">TC Lottery Hack</h1>
          </div>
          <img src={vip} alt="" className="h-8 w-8" />
        </Link>

        {/* VIP Mode access */}
        <div onClick={toggleModal} className="text-2xl bg-red-600 px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="px-4">Access VIP Mode</h1>
          </div>
          <img src={vip} alt="" className="h-8 w-8" />
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
                  onClick={() => {
                    // Handle UPI Payment option
                    alert('UPI Payment Option Selected');
                    toggleModal();
                    navigate("/vip")
                  }}
                  className="bg-[#e21e2c] text-xl font-bold text-white py-2 px-2 border-2 border-white rounded-full w-2/3 mb-3"
                >
                  PAY VIA UPI
                </button>

                <div><p>____________OR____________</p></div>

                <button
                  onClick={() => {
                    // Handle QR Payment option
                    alert('QR Payment Option Selected');
                    toggleModal();
                    toggleCongrats();
                  }}
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

export default Hack;
