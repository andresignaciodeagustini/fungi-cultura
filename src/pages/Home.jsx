import React, { useEffect } from "react";
import fondo1 from "../assets/img/fondo1.jpg"; 
import logoPrimario from "../assets/img/LOGO PRIMARIO.png"; 
import productImage from "../assets/img/imagen_1.png";
import "../styles/home.css";  

function Home() {
  const preventFocus = (e) => {
    e.currentTarget.blur();
  };

  // 🔹 Cursor místico personalizado
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    const clickEffect = () => {
      cursor.classList.add("active");
      setTimeout(() => cursor.classList.remove("active"), 200);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", clickEffect);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", clickEffect);
      cursor.remove();
    };
  }, []);

  return (
    <div
      className="home-container"
      onClick={preventFocus}
      tabIndex="-1"
      style={{
        backgroundImage: `url(${fondo1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Partículas flotantes (muchas más, con variedad de tamaños) */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: Math.random() * 25 + 5 + "px",   // tamaños más variados
            height: Math.random() * 25 + 5 + "px",
            left: Math.random() * 100 + "vw",       // distribuidas en todo el ancho
            top: Math.random() * 100 + "vh",        // distribuidas en todo el alto
            animationDuration: 50 + Math.random() * 45 + "s", // movimiento variado
            animationDelay: Math.random() * 20 + "s",
          }}
        ></div>
      ))}

      {/* IZQUIERDA (logo flotante con fade-in) */}
      <div className="hero-left fade-in-up" onClick={preventFocus} tabIndex="-1">
        <img
          src={logoPrimario}
          alt="Logo"
          className="home-logo floating"
          draggable="false"
        />
      </div>

      {/* DERECHA (tarjeta con fade-in) */}
      <div className="hero-right fade-in-up" tabIndex="-1">
        <div className="arched-card">
          <div className="arched-header">
            <h2 className="arched-title">PRÓXIMOS EVENTOS</h2>
          </div>

          <div className="arched-content">
            <img 
              src={productImage} 
              alt="Producto destacado" 
              className="arched-product glow-in"
              draggable="false"
            />
          </div>

          {/* Sabores con hover animado */}
          <div className="arched-flavors">
            <div className="flavor-option">👁 <span>LAVENDER CUCUMBER</span></div>
            <div className="flavor-option">👁‍🗨 <span>CACTUS ROSE</span></div>
            <div className="flavor-option">🍇 <span>GRAPE ELDERFLOWER</span></div>
          </div>

          {/* CTA pulsante */}
          <button className="arched-cta pulse">BUY ON AMAZON</button>
        </div>
      </div>
    </div>
  );
}

export default Home;