import React, { useState } from "react";
import axios from "axios";
import { buscarMusicas } from "../services/api";
import Form from "../components/Form";

export default function Home() {
  const [termo, setTermo] = useState("");
  const [musicas, setMusicas] = useState([]);

  async function handleBuscar(e) {
    e.preventDefault();
    const resultado = await buscarMusicas(termo);
    setMusicas(resultado);
  }

  async function favoritar(musica) {
    try {
      const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
      localStorage.setItem("favoritos", JSON.stringify([...favoritos, musica]));

      const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: musica.result.title,
        artist: musica.result.primary_artist.name,
        image: musica.result.song_art_image_thumbnail_url,
      });

      console.log("POST OK:", res.data);
      alert(`"${musica.result.full_title}" favoritada e enviada!`);
    } catch (err) {
      console.error("Erro ao favoritar (POST):", err);
      alert("Erro ao enviar para a API.");
    }
  }

  return (
    <div style={{width:"100%",padding:"2rem",backgroundColor:"#242424",color:"white"}}>

      <h1 style={{color:"#1DB954",padding:"30px",fontSize:"2.3rem"}}>Buscar Músicas</h1>

      <Form termo={termo} setTermo={setTermo} handleBuscar={handleBuscar} />

      {musicas.map((m) => (

        <div key={m.result?.id} style={{display:"flex",justifyContent:"space-between",marginBottom:"0.8rem"}}>
          <div style={{display:"flex",alignItems:"center"}}>
            
            <img src={m.result?.song_art_image_thumbnail_url} alt={m.result?.full_title} style={{width:"30px",
              height:"30px",borderRadius:"5px",marginRight:"15px"}}/>
            <p>{m.result?.full_title}</p>

          </div>
          <button onClick={() => favoritar(m)} style={{backgroundColor:"transparent",border:"1px solid #1DB954",color:"#1DB954",padding:"4px 10px",borderRadius:"20px",cursor:"pointer"}}>+</button>
        </div>

      ))}
    </div>
  );
}