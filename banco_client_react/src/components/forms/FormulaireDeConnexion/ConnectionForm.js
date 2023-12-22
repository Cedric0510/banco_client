import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ConnectionForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", response.data.token);
      console.log(response.data)
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        var base64Url = storedToken.split(".")[1];
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        var jsonPayload = decodeURIComponent(
          window
            .atob(base64)
            .split("")
            .map(function (c) {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
        );

        const currentUser = JSON.parse(jsonPayload).roles[0];
        console.log(currentUser);
        if (currentUser === "admin") {
          navigate("/admin"); // Redirigez vers la page admin
        } else {
          navigate("/account")
        }
      } else {
        
        // Gérer le cas où l'élément "token" n'est pas présent dans le localStorage
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Erreur de connexion au serveur.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Adresse Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div id="emailHelp" className="form-text">
          Nous ne partagerons jamais votre email.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Mot de Passe
        </label>
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Cacher" : "Voir"}
          </button>
        </div>
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <button type="submit" className="btn btn-primary">
        Soumettre
      </button>
    </form>
  );
};

export default ConnectionForm;
