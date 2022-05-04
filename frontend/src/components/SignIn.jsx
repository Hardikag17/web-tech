//jshint esversion:6
import React from 'react';
import '../styles/SignIn.css';
import logo from '../images/logo.png';
import { useState } from 'react';
import axios from 'axios';
import { API_ROOT } from '../api-config';
import { UserContext } from '../UserContext';
import { useContext } from 'react';
import { useHistory } from 'react-router';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPass] = useState('');
  const history = useHistory();

  const { setUser } = useContext(UserContext);

  const submitHandle = (e) => {
    e.preventDefault();
    axios
      .get(`${API_ROOT}/user/${username}`, { password: password })
      .then((resp) => {
        setUser(resp.data.username);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='bg'>
      <main className='form-signin'>
        <center>
          <form method='POST' onSubmit={submitHandle}>
            <img
              className='mb-4'
              src={logo}
              alt='logo'
              styles={{ width: '7', height: '5' }}
            />
            <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='floatingInput'
                placeholder='name{numbers}'
                value={username}
                onChange={(e) => setUsername(e.target.value)}></input>
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
                <input type='checkbox' value='remember-me' /> Remember me
              </label>
            </div>
            <button className='w-100 btn btn-lg btn-primary' type='submit'>
              Sign in
            </button>
            <p className='mt-5 mb-3 text-muted'>&copy; 2021–2022</p>
          </form>
        </center>
      </main>
    </div>
  );
}

export default SignIn;
