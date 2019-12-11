import React from 'react';
import FBImage from '../../assets/img/facebook.png';
import GglImage from '../../assets/img/google.png';

const LoginPage = props => (
  <div className="login-form-page">
    <div className="login-container" >
      <div className="login-fb-google">
        <p>
          By continuing, you agree to our  <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
        </p>
        <div className="fb-login">
          <img src={ FBImage } alt="" srcset=""/>
          <h3>Continue as Name</h3>
        </div>
        <div className="google-login">
          <img src={ GglImage } alt="" srcset=""/>
          <h3>Continue with Google</h3>
        </div>
      </div>
      <form className="login-form" >
        <input 
          type="email" 
          name="loginEmail" 
          className="login-email"
          onChange={ event => props.userInput(event) }
          placeholder="Email" />
        <input 
          type="password" 
          name="loginPassword" 
          className="login-password" 
          onChange={ event => props.userInput(event) }
          placeholder="Password" />
        <button type="submit" onClick={ () => props.login() }>Login</button>
        <a href="#">Forgot Password</a>
        <p>
          Don't have an account? <a href="/registration">Sign Up</a>
        </p>
      </form>
    </div>
  </div>
);

export default LoginPage;