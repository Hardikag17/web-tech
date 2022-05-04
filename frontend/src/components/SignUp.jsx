//jshint esversion:6
import React from 'react';
import '../styles/SignUp.css';
import logo from '../images/logo.png';
import axios from 'axios';
import { useState } from 'react';
import { API_ROOT } from '../api-config';
import { useHistory } from 'react-router';

function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');

  const history = useHistory();

  const submitHandle = (e) => {
    e.preventDefault();
    axios
      .post(`${API_ROOT}/user`, {
        email: email,
        name: name,
        username: username,
        password: password,
      })
      .then((resp) => {
        history.push('/SignIn');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='bg'>
      <main className='form-signin'>
        <center>
          <form onSubmit={submitHandle} method='POST'>
            <img
              className='mb-4'
              src={logo}
              alt='logo'
              styles={{ width: '7', height: '5' }}
            />
            <h1 className='h3 mb-3 fw-normal'>Sign Up</h1>
            <div className='form-floating'>
              <input
                type='email'
                className='form-control'
                id='floatingInput'
                placeholder='name@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
              <label for='floatingInput'>Email address</label>
            </div>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='floatingInput'
                placeholder='name{numbers}'
                value={name}
                onChange={(e) => setName(e.target.value)}></input>
              <label for='floatingInput'>Full name</label>
            </div>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='floatingInput'
                placeholder='name{numbers}'
                value={username}
                onChange={(e) => setUser(e.target.value)}></input>
              <label for='floatingInput'>Username</label>
            </div>
            <div className='form-floating'>
              <input
                type='password'
                className='form-control'
                id='floatingPassword'
                placeholder='Password'
                value={password}
                onChange={(e) => setPass(e.target.value)}></input>
              <label for='floatingPassword'>Password</label>
            </div>
            <div className='checkbox mb-3'>
              <label>
                <input type='checkbox' value='remember-me' /> I agree to all
                terms and conditions
              </label>
            </div>
            <button className='w-100 btn btn-lg btn-primary' type='submit'>
              Sign Up
            </button>
            <p className='mt-5 mb-3 text-muted'>&copy; 2021–2022</p>
          </form>
        </center>
      </main>
    </div>
  );
}

export default SignUp;
