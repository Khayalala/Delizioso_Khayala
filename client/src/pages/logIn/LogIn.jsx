import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { instance } from '../../api/axios';
import { useUser } from '../../UserContext'; 
import Button from "../../components/button/Button.jsx";
import "../signUp/signUp.css";
import google from "../../assets/images/google.png";
import pastaSign from "../../assets/images/pastaSign.png";

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useUser(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post('/auth/local', {
        identifier: email,
        password,
      });
      login(response.data.user); 
      navigate('/'); 
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="signUpContainer">
      <div className="registerSection">
        <h1>Log in</h1>
        <p>
          Don't have an account? <Link to="/signUp">Sign up</Link>
        </p>
        <form id="signUpForm" onSubmit={handleLogin}>
          {error && <p className="error">{error}</p>}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button content="Log in" />
          <div className="googleSignUp">
            <img src={google} alt="google" />
          </div>
        </form>
      </div>
      <div className="pastaSign">
        <img src={pastaSign} alt="pasta" />
      </div>
    </div>
  );
};

export default LogIn;
