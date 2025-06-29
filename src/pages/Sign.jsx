import { Link ,useNavigate } from "react-router-dom";
import { register } from "../../Services/authService";
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";


// import { GoogleOAuthProvider } from '@react-oauth/google';
const Sign = () => {

  useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto'; // يرجع الوضع الطبيعي بعد الخروج من الصفحة
      };
    }, []);
  const navigate=useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await register(email, password, confirmPassword);
      console.log('Registration Response:', response);
      toast.success('Registration Successful');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
    catch (error) {
      toast.error("Registration Failed!");
    }
  };
  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log('Google Regestration Success:', credentialResponse);
    toast.success('Register Successful with Google!');
    setTimeout(() => {
      navigate('/');
    }, 2000);
    // تقدر تبعت التوكن للباك إند هنا لو حابب
  };

  const handleGoogleLoginError = () => {
    console.log('Google Login Failed');
    toast.error('Google Login Failed');
  };
  
    return (
        <div style={{overflow:"hidden"}}> 
        <div className="sign">
          <div className="card">
            <h2>Join Us</h2>
            <p> Sign up now and start your journey with us!</p>
            
            <i className="fa-solid fa-envelope"></i>

            
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <i className="fa-solid fa-unlock"></i>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <p className="rep">use 8 or more characters with a mix of letters , numbers & symbols.</p>
            <i className="fa-solid fa-repeat"></i>
            <input className="repeate" type="password" placeholder="Repeate Password"value={confirmPassword}onChange={(e) => setConfirmPassword(e.target.value)} />
        
            <h4>Or with</h4>
            
             <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
            useOneTap
                 > 
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            <a className="lin" href="#">Google</a>
            </GoogleLogin>
            <button onClick={handleRegister}>Sign up</button>
            <p className="last">Already have an account? <Link to="/login">Sign in</Link> </p>
           
            
          </div>
        </div>
        <ToastContainer />
        </div>
    );
}

export default Sign;
