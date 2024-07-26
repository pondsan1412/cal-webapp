import React, { useState } from 'react';
import './App.css';
import pfp from '../src/pond.jpg'

const profileData = {
    name: 'pondsan1412',
    github: 'https://github.com/pondsan1412',
    facebook: 'https://facebook.com/pondcomp',
    profilePic: pfp, 
    githubLogo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', // URL ของโลโก้ GitHub
    facebookLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg', // URL ของโลโก้ Facebook
};

const App = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setInput(eval(input).toString());
            } catch {
                setInput('Error');
            }
        } else if (value === 'C') {
            setInput('');
        } else if (value === 'Backspace') {
            setInput(input.slice(0, -1));
        } else {
            setInput(input + value);
        }
    };

    const handleKeyPress = (e) => {
        const key = e.key;
        if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
            handleClick(key);
        } else if (key === 'Enter' || key === '=') {
            handleClick('=');
        } else if (key === 'Backspace') {
            handleClick('Backspace');
        }
    };

    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [input]);

    return (
        <div className="calculator-container">
            <div className="calculator">
                <input type="text" value={input} readOnly className="display" />
                <div className="buttons">
                    {['7', '8', '9', '/'].map((btn) => (
                        <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
                    ))}
                    {['4', '5', '6', '*'].map((btn) => (
                        <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
                    ))}
                    {['1', '2', '3', '-'].map((btn) => (
                        <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
                    ))}
                    {['0', '.', '=', '+'].map((btn) => (
                        <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
                    ))}
                    <button onClick={() => handleClick('C')}>C</button>
                    <button onClick={() => handleClick('Backspace')}>←</button>
                </div>
            </div>
            <div className="profile">
                <img src={profileData.profilePic} alt="Profile" className="profile-pic" />
                <div className="info">
                    <h2>Developer: {profileData.name}</h2>
                    <div className="links">
                        <a href={profileData.github} target="_blank" rel="noopener noreferrer">
                            <img src={profileData.githubLogo} alt="GitHub" className="social-logo" />
                        </a>
                        <a href={profileData.facebook} target="_blank" rel="noopener noreferrer">
                            <img src={profileData.facebookLogo} alt="Facebook" className="social-logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
