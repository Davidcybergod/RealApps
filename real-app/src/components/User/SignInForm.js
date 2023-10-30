import React, { useState } from 'react';
import './SignInForm.css';

const SignInForm = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        console.log('Sign-in with Email:', email, 'and Password:', password);
    };

    if (!isOpen) {
        // If isOpen is false, don't render the component
        return null;
    }

    return (
        <div className={`signin-form active`}>
            <div className="modal">
                <h2>Sign In</h2>
                <form>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="button" onClick={handleSignIn}>
                        Sign In
                    </button>
                </form>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default SignInForm;
