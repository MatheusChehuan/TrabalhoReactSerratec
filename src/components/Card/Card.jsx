export default function Card() {
  return (
    <div>
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
}
