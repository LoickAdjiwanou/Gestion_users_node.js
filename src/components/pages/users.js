import React, { useEffect, useState } from "react";
import "../styles/styles.css";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/listUsers")
      .then((res) => res.json())
      .then((res) => setData(res))
  }, []);

  return (
    <div className="users">
      <p>All Users informations :</p>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <p>Nom: {user.nom}</p>
            <p>Mot de passe: {user.password}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
  