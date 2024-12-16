import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { instance } from '../../api/axios';
import Button from "../../components/button/Button.jsx";
import "./signUp.css";
import google from "../../assets/images/google.png";
import pastaSign from "../../assets/images/pastaSign.png";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post('/auth/local/register', {
        username,
        email,
        password,
      });
      localStorage.setItem('user', JSON.stringify(response.data.user));
      alert('Signup successful! You can now log in.'); 
      navigate('/logIn'); 
      
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signUpContainer">
      <div className="registerSection">
        <h1>Sign Up</h1>
        <p>
          Already have an account? <Link to="/logIn">Log in</Link>
        </p>
        <form id="signUpForm" onSubmit={handleSignUp}>
          {error && <p className="error">{error}</p>}
          <input
            type="text"
            placeholder="Full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="off" 
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="new-email" 
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password" 
          />
          <Button content="Sign up" />
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

export default SignUp;
