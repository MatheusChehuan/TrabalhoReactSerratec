import React, { useState, useEffect } from "react";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(data);
  }, []);

  return (
    <div style={{width: "100%", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center",
        backgroundColor: "#242424",color: "white",}}>

      <h1 style={{ color: "#1DB954", fontSize: "2.3rem", padding: "30px" }}>
        Meus Favoritos
      </h1>

      {favoritos.length === 0 && (
        <p style={{ color: "#ccc" }}>Nenhuma música favoritada ainda.</p>
      )}

      <div style={{ width: "80%", maxWidth: "800px" }}>
        
        {favoritos.map((m) => {
          const imagem = m.image || m.result?.song_art_image_thumbnail_url;
          const titulo = m.title || m.result?.full_title;
          const artista = m.artist || m.result?.primary_artist?.name;

          return (
            <div
              key={m.id || m.result?.id} style={{display: "flex",alignItems: "center",
                backgroundColor: "#181818",padding: "10px 15px", borderRadius: "10px",
                marginBottom: "0.8rem",transition: "background-color 0.2s",}}>

              <img src={imagem} alt={titulo} style={{width: "30px", height: "30px", borderRadius: "5px",
                  objectFit: "cover",marginRight: "15px",}}/>

              <div style={{ flex: 1 }}>

                <p style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
                  {titulo}
                </p>
                <p style={{margin: "5px 0 0 0",color: "#b3b3b3", fontSize: "14px",}}>
                  {artista}
                </p>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}