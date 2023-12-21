import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/User', {
        email,
        username,
        password,
        roles: ['ROLE_USER']
      });
      navigate('/');
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Erreur de connexion au serveur.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className='container'>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Adresse Email</label>
        <input 
          type="email" 
          className="form-control" 
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
        <input 
          type="text" 
          className="form-control" 
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Mot de Passe</label>
        <input 
          type="password" 
          className="form-control" 
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <button type="submit" className="btn btn-primary">S'inscrire</button>
    </form>
  );
};

export default SignUpForm;
