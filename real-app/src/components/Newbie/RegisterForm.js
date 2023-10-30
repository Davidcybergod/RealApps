import React, { useState } from 'react';

const RegisterForm = ({ isVisible, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Add your registration logic here
        // You can access the name, email, and password states to perform the registration action
        console.log('Register with Name:', name, 'Email:', email, 'and Password:', password);
    };

    if (!isVisible) {
        return null; // If isVisible is false, don't render the component
    }

    return (
        <div>
            <h2>Register</h2>
            <form>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                <button type="button" onClick={handleRegister}>
                    Register
                </button>
                <button type="button" onClick={onClose}>
                    Close
                </button>
            </form>
        </div>
    );
}

export default RegisterForm;
