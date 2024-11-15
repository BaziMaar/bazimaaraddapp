import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from './firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update display name in Firebase Auth
            await updateProfile(user, { displayName: userName });
            console.log("User created:", user);

            // Add user data to Firestore
            await setDoc(doc(db, "Users", user.uid), {
                email: user.email,
                userName: userName
            });

            toast.success("User Registered Successfully!", { position: 'top-center' });
            navigate("/")

        } catch (error) {
            console.log("Error creating user:", error.message);
            toast.error(error.message, { position: 'bottom-center' });
        }
    };

    return (
        <div className="bg-white h-screen flex flex-col p-4 overflow-x-hidden justify-center items-center">
            <ToastContainer />
            
            <div className="flex justify-center w-full">
                <h1 className="text-center text-4xl bg-[#E6E7FB] px-8 py-4 text-[#2331DF] font-bold rounded-2xl">
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
                    placeholder="Username"
                />
            </div>

            {/* Email Input */}
            <div className="mt-4 w-full max-w-xs mx-auto">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
            <Link to="/" className="mt-2">
                <p className="text-[#878787] text-center">Login</p>
            </Link>

            {/* Register Button */}
            <div className="mt-8">
                <button
                    className="w-28 bg-[#0066b2] text-white h-10 border rounded-full mx-auto block"
                    onClick={handleRegister}
                >
                    Sign Up
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

            {/* Continue Button */}
            {/* <Link to="/home" className="mt-12">
                <button className="w-96 bg-[#0066b2] text-white h-16 border rounded-md mx-auto block">
                    Continue
                </button>
            </Link> */}
        </div>
    );
}

export default Signup;
