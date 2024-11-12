import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import './Start.css';

function Start() {
  const [passkey, setPasskey] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const correctPasskey = "d88f5419994e058dda188f1ffe8c44ec74ddcb9d8b249a075959be18ffb5ef79";
  
  const handleSubmit = (e) => {
    const hashedPasskey = CryptoJS.SHA256(passkey).toString();

    console.log(CryptoJS.SHA256(correctPasskey).toString());

    e.preventDefault();
    if (hashedPasskey === correctPasskey) {
      navigate('/login');
    } else {
      setError('Incorrect passkey, please try again.');
    }
  };

  return (
    <div>
        <h2>Reverse Engineering</h2>
        <p>You have been given two examples that were decoded using Ceasar cipher! To proceed, you must decode the given message.</p>
        <div className='examples'>
            <div>
                <h2>Example 1</h2>
                <p>Plaintext: Eat, sleep, code, repeat.</p>
                <p>Ciphertext: Gcv, unggr, eqfg, tgrgcv.</p>
            </div>
            <div>
                <h2>Example 2</h2>
                <p>Plaintext: Why did the programmer go broke? Because he used up all his cache.</p>
                <p>Ciphertext: Yja fkf vjg rtqitcoogt iq dtqmg? Dgecwug jg wugf wr cnn jku ecejg.</p>
            </div>
        </div>
        
        <h2>Secret message: RjkujPEjkru</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="password"
            value={passkey}
            onChange={(e) => setPasskey(e.target.value)}
            placeholder="Enter passkey"
        />
        <button type="submit">Submit</button>
        </form>
        {error && <p style={{ color: '#FAA0A0', marginTop: '12px', fontStyle: 'italic'}} className='error'>{error}</p>}
    </div>
  );
}

export default Start;
