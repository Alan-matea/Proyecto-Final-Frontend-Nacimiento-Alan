import { Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import AppBar from "./NavBar/AppBar"
import TableUsers from "./Tables/TableUsers";
import TableSongs from "./Tables/TableSongs";
import "./index.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [songs, setSongs] = useState([]);
  
  const obtenerUsers = async () => {
    //Obtiene los usuarios desde el backend
    const response = await fetch("https://api-mateify-alan-nacimiento.herokuapp.com/users");
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    //Esto se ejecuta al renderizar la pagina por primera vez
    obtenerUsers();
  }, []);

  const handleClick = (e, likedSongs) => {
    e.preventDefault();
    const songs = likedSongs;
    setSongs(songs);
  };

  return (
    <Box>
      <AppBar />
      <TableUsers users={users} onClick={handleClick} />
      <TableSongs songs={songs}/>
    </Box>
  );
};

export default App;
