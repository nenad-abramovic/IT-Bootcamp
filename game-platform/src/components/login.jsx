import React, { useState, useEffect } from 'react';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [validPw, setValidPw] = useState(false);

    function isValidPw () {
        if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
            setValidPw(true);
        } else {
            setValidPw(false);
        }
    }

    return (
        <form>
            <input type="email" placeholder="Имејл" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="passowrd" placeholder="Шифра" value={password} onChange={(e) => { 
                setPassword(e.target.value);
                isValidPw();}}
                required />
            <input type="submit" value="Улогуј се" onClick={() => {}} />
        </form>
    );
}