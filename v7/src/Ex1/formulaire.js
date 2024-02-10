import React, { useState } from 'react';
import Acceuil from './acceuil';

const database = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" }
];

function Formulaire() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = database.find((user) => user.username === name);
    if (userData) {
      if (userData.password !== password) {
        setErrorMessages({ champ: "password", message: "Invalid password" });
        setIsSubmitted(false);
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ champ: "identifiant", message: "Invalid username" });
      setIsSubmitted(false);
    }
  };

  const renderErrorMessage = (champ) => {
    if (errorMessages.champ === champ) {
      return <div className="error">{errorMessages.message}</div>;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Connexion</h1>
        <div>
          <label htmlFor="identifiant">L'identifiant</label>
          <input
            id="identifiant"
            type='text'
            onChange={(e) => {
              setName(e.target.value);
              setErrorMessages({}); 
            }}
          />
          {renderErrorMessage("identifiant")}
        </div>
        <div>
          <label htmlFor="motdepasse">Mot de passe</label>
          <input
            id="motdepasse"
            type='password'
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorMessages({}); 
            }}
          />
          {renderErrorMessage("password")}
        </div>
        <button type="submit">Se connecter</button>
      </form>
      {isSubmitted ?<Acceuil name={name} />:null}
    </>
  );
}

export default Formulaire;
