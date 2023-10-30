import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaRegTimesCircle } from 'react-icons/fa';
import { BsFillHouseFill } from 'react-icons/bs';
import './Navbar.css';

// Import SignInForm and RegisterForm from their respective folders
import SignInForm from '../User/SignInForm';
import RegisterForm from '../Newbie/RegisterForm';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false); // State for sign-in form visibility
    const [showRegister, setShowRegister] = useState(false); // State for registration form visibility

    const handleClick = () => setClick(!click);

    const handleSignInClick = () => {
        setShowSignIn(!showSignIn);
        setShowRegister(false); // Close registration form when sign-in form is opened
    }

    const handleRegisterClick = () => {
        setShowRegister(!showRegister);
        setShowSignIn(false); // Close sign-in form when registration form is opened
    }

    return (
        <div className='navbar'>
            <div className='container'>
                <h1>
                    <span>
                        <BsFillHouseFill />Real
                    </span>
                    Estate
                </h1>
                <div className='buttons-container'>
                    <button className='btn' onClick={handleSignInClick}>Sign In</button>
                    <button className='btn' onClick={handleRegisterClick}>Register</button>
                    {showSignIn && <SignInForm isOpen={showSignIn} onClose={() => setShowSignIn(false)} />} {/* Conditionally render Sign In Form */}
                    {showRegister && <RegisterForm isOpen={showRegister} onClose={() => setShowRegister(false)} />} {/* Conditionally render Register Form */}
                    <button className='btn'>Add Property</button> {/* Moved the button here */}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Search</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <div className='buttons-container'>
                    {/* Removed the button from here */}
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
