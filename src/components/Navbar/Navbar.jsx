import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{width: "100%",backgroundColor: "#242424",display: "flex",gap: "1rem",marginTop: "0.1rem"}}>

      <Link
        to="/"
        style={{color: "#1DB954",fontSize: "18px",}}>
        Home
      </Link>

      <Link to="/favoritos"style={{color: "#1DB954",fontSize: "18px",}}>
        Favoritos
      </Link>
    </nav>
  );
}