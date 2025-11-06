import React, { useState, useEffect } from "react";
import CardFavorito from "../components/Cards/CardFavorito";
export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(data);
  }, []);

  return (
    <div style={{width: "100%", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center",
        backgroundColor: "#242424",color: "white",}}>

      <h1>
        Meus Favoritos
      </h1>

      {favoritos.length === 0 && (
        <p style={{ color: "#ccc" }}>Nenhuma música favoritada ainda.</p>
      )}

      <div style={{ width: "80%", maxWidth: "800px", marginTop: "2rem" }}>
        {favoritos.map((m) => (
        <CardFavorito key={m.result.id} musica={m} />
        ))}
      </div>
    </div>
  );
}