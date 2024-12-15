import { React, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function Main() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [orderStatus, setOrderStatus] = useState(null);
    const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);
    const [hadSubscription,setHadSubscription]=useState(false);
    const [txn,setTxn]=useState("")

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        const storedPassword = localStorage.getItem('password');
        const params = new URLSearchParams(location.search);

        const orderId = params.get('order_id');
        const status = params.get('status');
        const email = params.get('email');
        const txn_note=params.get('txn_note')
        setTxn(txn_note)

        if (orderId && status && email) {
            checkPaymentStatus(orderId, email);
        } else {
            ("Payment parameters are missing. Skipping API call.");
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
            if (data.status &&data.results.status=="Success") {
                
                setOrderStatus(data.results);
                setIsPaymentCompleted(true);
                setHadSubscription(true);

                // Notify user with native alert
                alert('Payment Successful! Your payment has been processed successfully. Now checking subscription...');

                // Check subscription status
                const hasValidSubscription = await checkSubscription(email);
                if(hasValidSubscription){
                    alert("You have previously buy subscription please login for vip access")
                }
                if (!hasValidSubscription) {
                    // Call subscription API
                    await subscribeUser(orderId, email, data.results.txn_date, data.results.txn_amount,data.results.txn_note);
                }
            } else {
                setOrderStatus(null);
                setIsPaymentCompleted(false);
                alert('Payment Not Completed! Please try again later.');
            }
        } catch (err) {
            console.error("Error checking payment status", err);
            alert('An error occurred while checking payment status.');
        }
    };

    const checkSubscription = async (email) => {
        try {
            const response = await axios.get(`https://sattajodileak.com/payment/subscription/check?email=${email}&txn_note=Colour Trading Subscription`);
            return response.data.message === "Valid subscription found.";
        } catch (err) {
            console.error("Error checking subscription:", err);
            return false;
        }
    };

    const subscribeUser = async (orderId, email, txnDate, txnAmount,txn_note) => {
        try {
            const response = await axios.post('https://sattajodileak.com/payment/subscribe', {
                order_id: orderId,
                customer_email: email,
                txn_date: txnDate,
                txn_amount: txnAmount,
                txn_note:txn_note

            });
            if (response.data) {
                alert('Subscription Successful! Your subscription has been activated.Login and Get vip access');
            }
        } catch (err) {
            console.error("Error subscribing user:", err);
            alert('An error occurred while creating subscription.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const postData={
                email:userName.toLowerCase(),
                password:password,
                app_name:"colorTradingHack"
            }
            await axios.post('https://sattajodileak.com/payment/login',postData)
            const check=await checkSubscription(userName);
            (`>>>>>>checking>>>>>${check}`);
            if(check){
                alert('Login Successful! Welcome VIP user back!');
                navigate('/vip');
            }
            else{
                alert('Login Successful! Welcome back!');
                navigate('/home');
            }
            

            localStorage.setItem('userName', userName);
            localStorage.setItem('password', password);
            
        } catch (error) {
            console.error(error.message);
            alert('Login Failed! ' + error.message);
        }
    };

    return (
        <>
            <div className='bg-white h-screen flex flex-col p-4 overflow-x-hidden justify-center items-center'>
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
