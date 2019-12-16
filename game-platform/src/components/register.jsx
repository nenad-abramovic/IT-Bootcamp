import React, { useState, useEffect } from 'react';

export const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [samePass, setSamePass] = useState('');

    const [validPw, setValidPw] = useState(false);
    const [samePw, setSamePw] = useState(false);

    function isValidPw () {
        if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
            setValidPw(true);
        } else {
            setValidPw(false);
        }
    }

    useEffect(() => {
        setSamePw(password === samePass);
    }, [password, samePass, validPw]);

    return (
        <form>
            <input type="text" placeholder="Име" value={name} onChange={e => setName(e.target.value)} required />
            <input type="text" placeholder="Презиме" value={surname} onChange={e => setSurname(e.target.value)} required />

            <input type="text" placeholder="Корисничко име" value={username} onChange={e => setUsername(e.target.value)} required />
            <input type="email" placeholder="Имејл" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="passowrd" placeholder="Шифра" value={password} onChange={(e) => { 
                setPassword(e.target.value); 
                console.log(password);
                isValidPw();}}
                // TODO Check same password (idiot proofing)
                required />
            <input type="password" placeholder="Потврди шифру" onChange={e => {
                setSamePass(e.target.value);
            }} required />

            <input type="submit" value="Региструј се" onClick={() => {}} />
        </form>
    );
}