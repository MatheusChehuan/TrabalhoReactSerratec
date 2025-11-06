import React, { useState } from "react";
import { buscarMusicas } from "../services/api";
import Form from "../components/Form";

export default function Home() {
  const [termo, setTermo] = useState("");
  const [musicas, setMusicas] = useState([]);

  async function handleBuscar(e) {
    e.preventDefault();
    const resultado = await buscarMusicas(termo); // GET
    setMusicas(resultado);
  }

  function favoritar(musica) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    localStorage.setItem("favoritos", JSON.stringify([...favoritos, musica])); // POST
  }

  return (
    <div>
      <h1 style ={{display: "flex", color: "#1DB954", padding: "30px", fontSize: "2.3rem", alignItems:"center"}}>Buscar Músicas </h1>
      
      <Form termo={termo} setTermo={setTermo} handleBuscar={handleBuscar} />

      {musicas.map((m) => (
        <div style={{width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "0.8rem"}} key={m.result.id}>
          <div style={{display: "flex", alignItems: "center"}}>
          <img
              src={m.result.song_art_image_thumbnail_url}
              alt={m.result.full_title}
              style={{width: "30px",height: "30px",borderRadius: "5px",objectFit: "cover",marginRight: "15px",}}/>
          <p>{m.result.full_title}</p>
          </div>
         <button
              onClick={() => favoritar(m)}
              style={{backgroundColor: "transparent",border: "1px solid #1DB954",color: "#1DB954",padding: "4px 10px",borderRadius: "20px",cursor: "pointer",fontSize: "14px",}}>
              +
        </button>
        </div>
      ))}
    </div>
  );
}
