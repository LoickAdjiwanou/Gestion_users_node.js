import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function UserForm() {
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Envoi des données au backend
    fetch("/addUsers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nom, password }),
    })
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((error) => {
        console.error("Erreur lors de l'envoi des données au backend:", error);
        setMessage("Erreur lors de l'exécution de la requete.");
      });
  };

  return (
    <div className="userForm">
      <h2>Ajouter un utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom:</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enregistrer</button>
      </form>
      {message && <p>{message}</p>}
      <Link to="">Aller à la page listUsers</Link>  
    </div>
  );
}

export default UserForm;
