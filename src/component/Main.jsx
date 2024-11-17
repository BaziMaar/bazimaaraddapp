import { signInWithEmailAndPassword } from 'firebase/auth';
import { React, useState, useEffect } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; // Import axios to make the POST request

function Main() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // State for storing payment status and order details
    const [orderStatus, setOrderStatus] = useState(null);
    const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

    // Load user data from localStorage (if available) and check payment status
    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        const storedPassword = localStorage.getItem('password');
        const params = new URLSearchParams(location.search); // Get search (query string)

        // Get the query parameters (or set to null if not available)
        const orderId = params.get('order_id');  // Get 'order_id' or null if not present
        const status = params.get('status');    // Get 'status' or null if not present
        const email = params.get('email');      // Get 'email' or null if not present

        // Check if all necessary parameters are available before calling the API
        if (orderId && status && email) {
            // Function to check the payment status
            const checkPaymentStatus = async () => {
                try {
                    const statusResponse = await axios.post('https://paymentapibackend.onrender.com/api/order/status', {
                        token: "225e3b-5843ec-ddb76d-a14f84-5c4741",
                        order_id: orderId,
                    });
                    console.log(statusResponse)
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
                        setIsPaymentCompleted(false);
                        toast.error('Payment not completed yet.', {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 5000,
                        });
                    }
                } catch (err) {
                    console.log("Error checking payment status", err);
                    toast.error('Error checking payment status.', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 5000,
                    });
                }
            };

            // Call the payment status function
            checkPaymentStatus();
        } else {
            // If the necessary parameters are not available, just load the page normally
            console.log("Payment parameters are missing. Skipping API call.");
        }

        // Populate the fields if there is any saved data in localStorage
        if (storedUserName) setUserName(storedUserName);
        if (storedPassword) setPassword(storedPassword);
    }, [location]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, userName, password);
            toast.success("User LoggedIn Successfully!", { position: 'top-center' });

            // Store user data in localStorage
            localStorage.setItem('userName', userName);
            localStorage.setItem('password', password);

            navigate('/home');
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, { position: 'bottom-center' });
        }
    };

    return (
        <>
            <div className='bg-white h-screen flex flex-col p-4 overflow-x-hidden justify-center items-center'>
                <ToastContainer />
                <div className='flex justify-center w-full'>
                    <h1 className='text-center text-4xl bg-[#E6E7FB] px-8 py-4 text-[#2331DF] font-bold rounded-2xl'>
                        Colour Trading Hack
                    </h1>
                </div>

                <div className="mt-4 text-center">
                    <h2 className="text-[#878787] font-bold">Unlimited Earning Tool</h2>
                    <h2 className="text-[#878787]">IOS+Android</h2>
                </div>

                {/* Username Input */}
                <div className="mt-12 w-full max-w-xs mx-auto">
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="border-2 px-4 py-2 border-black rounded-full w-full"
                        placeholder="Email"
                    />
                </div>

                {/* Password Input */}
                <div className="mt-6 w-full max-w-xs mx-auto">
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-2 px-4 py-2 border-black rounded-full w-full"
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-600 hover:text-black"
                        >
                            {showPassword ? '👁️' : '🙈'}
                        </button>
                    </div>
                </div>

                {/* Forgot Password Link */}
                <Link to="/signup" className="mt-2">
                    <p className='text-[#878787] text-center'>Signup</p>
                </Link>

                {/* Login Button */}
                <div className="mt-8">
                    <button
                        className='w-28 bg-[#0066b2] text-white h-10 border rounded-full mx-auto block'
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                </div>

                {/* Features Section */}
                <div className="pt-10 text-center">
                    <h1 className="font-bold text-lg">Features</h1>
                    <div className="pt-4">
                        <h1>All Sites Hacks</h1>
                        <h1>Unlimited Loots</h1>
                        <h1>Unlimited Gift Codes</h1>
                        <h1>Trial + Paid</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
