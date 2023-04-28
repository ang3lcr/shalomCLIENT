import React, { useState } from 'react'
import '../styles/login.css'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.post("https://shalomapi-production.up.railway.app/api/v1/users/login", data)
            .then(res => localStorage.setItem('token', res.data.accessToken))
            navigate('/')
        }




  return (
    <div className='login'>
        <div className="login-main-container">
            <div className="login-box">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label>
                    <input type="email" {...register('email')} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" {...register('password')} />
                </div>
                <button type='sumbit'>Enviar</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login