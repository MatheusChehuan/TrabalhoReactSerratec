// CardFavorito.jsx
import React from "react";

export default function CardFavorito({ musica }) {
  return (
    <div
      style={{
        display: "flex",alignItems: "center",backgroundColor: "#181818",padding: "10px 15px",
        borderRadius: "10px",marginBottom: "10px",}}>

      <img src={musica.result.song_art_image_thumbnail_url} alt={musica.result.full_title}

        style={{width: "60px",height: "60px",borderRadius: "5px",
          objectFit: "cover",marginRight: "15px",}}/>

      <div style={{ flex: 1 }}>

        <h3 style={{ fontSize: "16px", color: "white" }}>
          {musica.result.title}
        </h3>

        <p style={{margin: "2px 0 0 0",color: "#b3b3b3",fontSize: "14px",}}>
          {musica.result.primary_artist.name}
        </p>
        
      </div>
    </div>
  );
}
