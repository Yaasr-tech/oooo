import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/accounts/login/', { username, password });
      alert('Login Successful! Token: ' + res.data.token);
      console.log(res.data);
    } catch (err) {
      alert('Login failed');
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;