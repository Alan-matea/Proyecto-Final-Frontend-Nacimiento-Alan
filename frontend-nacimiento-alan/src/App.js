import React, { useState, useEffect } from "react";
import "./index.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [songs, setSongs] = useState([]);
  const obtenerUsers = async () => {
    //Obtiene los usuarios desde el backend
    const response = await fetch("http://localhost:4000/user/");
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    //Esto se ejecuta al renderizar la pagina por primera vez
    obtenerUsers();
  }, []);

  const handleClick = async (e, user) => {
    e.preventDefault();
    console.log("Se hizo click en el usuario", user);
    //Se le pega a la API que trae las canciones
    const response = await fetch("http://localhost:4000/user/");
    const data = await response.json();
    setSongs(data);
  };
  return (
    <div className="App">
      <div>
        <p>Lista de usuarios</p>
        {users.length > 0 ? (
          users.map((user) => (
            <p className="User" key={user._id}>
              {user.name}
              <button onClick={(e) => handleClick(e, user)}>Canciones</button>
            </p>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
      <div>
        <p>Lista de canciones</p>
        {songs.map((song) => (
          <p className="Song" key={song._id}>
            {song.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
