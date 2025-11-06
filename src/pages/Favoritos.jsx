import React, { useState, useEffect } from "react";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(data);
  }, []);

  return (
    <div
      style={{width: "100%",display: "flex",flexDirection: "column",alignItems: "center",backgroundColor: "#242424",color: "white",}}>
      <h1 style={{display: "flex", color: "#1DB954", marginTop: "30px", fontSize: "2.3rem", alignItems:"center"}}>Meus Favoritos</h1>

      {favoritos.length == 0 && (
        <p style={{ color: "#1DB954", marginTop: "1rem" }}>
          Nenhuma música favoritada ainda.
        </p>
      )}

      <div style={{ width: "80%", maxWidth: "800px", marginTop: "2rem" }}>
        {favoritos.map((m) => (
          <div
            key={m.result.id}
            style={{display: "flex",alignItems: "center",backgroundColor: "#181818",padding: "10px 15px",borderRadius: "10px",marginBottom: "10px"}}>
            <img
              src={m.result.song_art_image_thumbnail_url}
              alt={m.result.full_title}
              style={{width: "60px",height: "60px",borderRadius: "5px",objectFit: "cover",marginRight: "15px",}}/>
            <div style={{ flex: 1 }}>
              <h3 style={{fontSize: "16px", color: "white" }}>
                {m.result.title}
              </h3>
              <p style={{margin: "2px 0 0 0",color: "#b3b3b3",fontSize: "14px",}}>
                {m.result.primary_artist.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
