import React, { useState } from 'react'
import '../styles/login.css'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.post("https://shalomapi-production.up.railway.app/api/v1/users/login", data)
            .then(res => {
                localStorage.setItem('token', res.data.accessToken); 
                localStorage.setItem('userId', res.data.user.id);
            })
            navigate('/')
        }




  return (
    <div className='login'>
        <div className="login-main-container">
            <div className="login-box">
            <h1>Login</h1>
            <div className="test-data">
                <h3>Datos de Prueba</h3>
                Email: angel@gmail.com<br />
                Password: 1234
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label>
                    <input type="email" {...register('email')} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" {...register('password')} />
                </div>
                <button type='sumbit' className='login-button'><FontAwesomeIcon icon={faCircleCheck}/></button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login