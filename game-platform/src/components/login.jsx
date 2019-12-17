import React, { useState } from 'react';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <input type="email" placeholder="Имејл" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="passowrd" placeholder="Шифра" value={password} onChange={(e) => { 
                setPassword(e.target.value);
               }}
                required />
            <input type="submit" value="Улогуј се" onClick={() => {}} />
        </form>
    );
}