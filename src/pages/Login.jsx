import { Link ,useNavigate } from "react-router-dom";
import { login } from "../../Services/authService";
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react";
const Login = () => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto'; // يرجع الوضع الطبيعي بعد الخروج من الصفحة
    };
  }, []);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e)  => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success('Login Successful');
       setTimeout(() => {
         navigate('/');
      }, 2000);
    }
    catch (error) {
           toast.error("Invalid user name or password!");
         }
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log('Google Login Success:', credentialResponse);
    toast.success('Login Successful with Google!');
    navigate('/');

    
  };

  const handleGoogleLoginError = () => {
    console.log('Google Login Failed');
    toast.error('Google Login Failed');
  };

  

  return (
    <div style={{overflow:"hidden"}}> 
    <div className="login">
      <div className="card">
        <h2>Welcome Back!</h2>
        <p>Sign in to access Your account</p>
        <i class="fa-solid fa-envelope"></i>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        {/* <i class="fa-solid fa-asterisk"></i> */}
        <i class="fa-solid fa-unlock"></i>
        <input type="password" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)} />
        <h4>Or login with</h4>
        <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          
          />  
                {/* <a className="lin" href="#">Google</a> */}
        <p className="last">Don’t have an account? <Link to="/signup">Sign up</Link> </p>
        <button onClick={handleSubmit}>Login</button>
        
      </div>
    </div>
    <ToastContainer />
    </div>


  );
};

export default Login;
