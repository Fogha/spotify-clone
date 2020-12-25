import React from 'react';
import { loginURL } from '../../spotify';
import './login.css';

export default function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
      />
      <a className="login__button" href={loginURL}>
        Login with spotify
      </a>
    </div>
  )
}
