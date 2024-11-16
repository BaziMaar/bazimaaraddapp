import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import upiSvg from '../assets/upi.webp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpiPayment() {
  const location = useLocation();
  const { orderId, token, transaction } = location.state || {};
  const [paytmUrl, setPaytmUrl] = useState('');
  const [phonePayUrl, setPhonePayUrl] = useState('');
  const [gPayUrl, setGPayUrl] = useState('');
  const [bhimUrl, setBhimPayUrl] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  useEffect(() => {
    if (transaction) {
      setPaytmUrl(transaction?.upi_intent?.paytm || '');
      setPhonePayUrl(transaction?.upi_intent?.phonepe || '');
      setGPayUrl(transaction?.upi_intent?.gpay || '');
      setBhimPayUrl(transaction?.upi_intent?.bhim || '');
    }
  }, [transaction]);

  const checkPaymentStatus = async () => {
    if (!orderId || !token) return;

    try {
      const statusResponse = await axios.post('https://paymentapibackend.onrender.com/api/order/create', {
        token: '225e3b-5843ec-ddb76d-a14f84-5c4741',
        order_id: orderId,
      });

      const { data } = statusResponse;

      if (data.status) {
        setOrderStatus(data.results);
        setIsPaymentCompleted(true);
        toast.success('Payment successful!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
      } else {
        setOrderStatus(null);
        toast.error('Payment not completed yet.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
      }
    } catch (err) {
      toast.error('Error checking payment status.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
      console.error('Error checking payment status:', err);
    }
  };

  useEffect(() => {
    if (orderId) {
      const interval = setInterval(() => {
        checkPaymentStatus();
      }, 10000); // Check every 10 seconds

      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [orderId]);

  return (
    <div className="w-screen h-screen flex justify-center items-center z-50 bg-gray-800 bg-opacity-60">
      <ToastContainer position="top-center" autoClose={5000} style={{ zIndex: 9999 }} />
      <div className="relative border-2 border-[#c1272d] shadow-lg text-center bg-[#e1f5fe] p-8 rounded-2xl max-w-md w-full">
        <h1 className="text-2xl font-extrabold text-[#c1272d] mb-6">
          ACCESS VIP HACK IN <span className="text-[#1ba553]">₹650</span>
        </h1>
        <h2 className="text-xl font-semibold text-[#333] mb-6">VIP Mode Payment</h2>

        <div className="flex flex-col items-center space-y-4 mb-6">
          <a
            href={paytmUrl}
            className="bg-blue-500 text-xl font-bold text-white py-3 px-4 rounded-full shadow-md hover:bg-[#d41723] transition duration-300 w-3/4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../public/paytm-icon.png" alt="Paytm" className="inline-block w-12 h-12 mr-12 ml-1 bg-white rounded-full" />
            Paytm
          </a>
          <a
            href={phonePayUrl}
            className="bg-purple-800 text-xl font-bold text-white py-3 px-4 rounded-full shadow-md hover:bg-[#d41723] transition duration-300 w-3/4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../phonepe-icon.png" alt="PhonePe" className="inline-block w-8 h-8 mr-12" />
            PhonePe
          </a>
          <a
            href={gPayUrl}
            className="bg-white text-xl font-bold text-black py-3 px-4 rounded-full shadow-md hover:bg-blue-400 transition duration-300 w-3/4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../google-pay-icon.png" alt="GooglePay" className="inline-block w-8 h-8 mr-12" />
            GooglePay
          </a>
          <a
            href={bhimUrl}
            className="bg-white text-xl font-bold text-black py-3 px-4 rounded-full shadow-md hover:bg-[#d41723] transition duration-300 w-3/4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../bhim-upi-icon.png" alt="BHIM UPI" className="inline-block w-8 h-8 mr-12" />
            BHIM UPI
          </a>
        </div>

        <div className="text-sm text-[#c1272d] font-semibold mb-4">INSTANT ACTIVATION</div>
        <div className="mb-4">
          <img src={upiSvg} alt="UPI QR" className="mx-auto max-w-[200px]" />
        </div>
        <div className="text-blue-600 font-bold mt-4">
          <p>No money - No Accuracy</p>
        </div>
      </div>
    </div>
  );
}

export default UpiPayment;
