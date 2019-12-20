import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { login } from '../utilities/services';

 const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onClick = () => {
        login(email, password)
            .then(data => {
                if(data.success === true) {
                    props.history.go(-2); //push(`/memorygame/:${data.user.user_id}`);
                    props.setState(true);
                }
            });
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Имејл" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Шифра" value={password} onChange={(e) => {
                setPassword(e.target.value);
            }}
                required />
            <input type="submit" value="Улогуј се" onClick={onClick} />
        </form>
    );
}

export default withRouter(Login);