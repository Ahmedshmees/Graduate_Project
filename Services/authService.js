// src/services/authService.js
import axios from 'axios';

const API_URL = 'https://localhost:7258/api/Account';

export const login = async (email, password) => {
  const response = await axios.post(API_URL + '/Login', { email, password });
  const { token } = response.data;
  localStorage.setItem('token', token);
  return response.data;
};

export const register = async (email, password, confirmPassword) => {
  return await axios.post(API_URL + '/Register', 
    {
      Email: email,
      Password: password,
      ConfirmPassword: confirmPassword
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};
