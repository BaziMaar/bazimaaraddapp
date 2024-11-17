import { signInWithEmailAndPassword } from 'firebase/auth';
import { React, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from './firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // Import axios for API calls

function Main() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [orderStatus, setOrderStatus] = useState(null);
    const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        const storedPassword = localStorage.getItem('password');
        const params = new URLSearchParams(location.search);

        const orderId = params.get('order_id');
        const status = params.get('status');
        const email = params.get('email');

        if (orderId && status && email) {
            checkPaymentStatus(orderId, email);
        } else {
            console.log("Payment parameters are missing. Skipping API call.");
        }

        if (storedUserName) setUserName(storedUserName);
        if (storedPassword) setPassword(storedPassword);
    }, [location]);

    const checkPaymentStatus = async (orderId, email) => {
        try {
            const statusResponse = await axios.post('https://sattajodileak.com/payment/order/status', {
                token: "225e3b-5843ec-ddb76d-a14f84-5c4741",
                order_id: orderId,
            });

            const { data } = statusResponse;
            if (data.status) {
                setOrderStatus(data.results);
                setIsPaymentCompleted(true);

                // Notify user
                alert("Payment successful! Now checking subscription...");
                toast.success('Payment successful!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 5000,
                });

                // Check subscription status
                const hasValidSubscription = await checkSubscription(email);
                if (!hasValidSubscription) {
                    // Call subscription API
                    await subscribeUser(orderId, email, data.results.txn_date, data.results.txn_amount);
                }
            } else {
                setOrderStatus(null);
                setIsPaymentCompleted(false);
                toast.error('Payment not completed yet.', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 5000,
                });
            }
        } catch (err) {
            console.error("Error checking payment status", err);
            toast.error('Error checking payment status.', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
            });
        }
    };

    const checkSubscription = async (email) => {
        try {
            const response = await axios.get(`https://sattajodileak.com/payment/subscription/check?email=${email}`);
            return response.data.message === "Valid subscription found.";
        } catch (err) {
            console.error("Error checking subscription:", err);
            return false;
        }
    };

    const subscribeUser = async (orderId, email, txnDate, txnAmount) => {
        try {
            const response = await axios.post('https://sattajodileak.com/payment/subscribe', {
                order_id: orderId,
                customer_email: email,
                txn_date: txnDate,
                txn_amount: txnAmount,
            });
            if (response.data) {
                toast.success('Subscription created successfully!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 5000,
                });
            }
        } catch (err) {
            console.error("Error subscribing user:", err);
            toast.error('Error subscribing user.', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
            });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, userName, password);
            toast.success("User LoggedIn Successfully!", { position: 'top-center' });

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
                <h1 className='text-center text-4xl bg-[#E6E7FB] px-8 py-4 text-[#2331DF] font-bold rounded-2xl'>
                    Colour Trading Hack
                </h1>
                <div className="mt-4 text-center">
                    <h2 className="text-[#878787] font-bold">Unlimited Earning Tool</h2>
                    <h2 className="text-[#878787]">IOS+Android</h2>
                </div>

                <div className="mt-12 w-full max-w-xs mx-auto">
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="border-2 px-4 py-2 border-black rounded-full w-full"
                        placeholder="Email"
                    />
                </div>

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

                <Link to="/signup" className="mt-2">
                    <p className='text-[#878787] text-center'>Signup</p>
                </Link>

                <button
                    className='w-28 bg-[#0066b2] text-white h-10 border rounded-full mx-auto block mt-8'
                    onClick={handleSubmit}
                >
                    Login
                </button>
            </div>
        </>
    );
}

export default Main;
