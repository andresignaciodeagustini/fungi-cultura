import React, { useState, useEffect } from "react";
import fondo2 from "../assets/img/fondo2.jpg";
import hongo1 from "../assets/img/hongopruebas1.png";
import hongo2 from "../assets/img/hongo2.png";
import hongo3 from "../assets/img/hongo3.png";
import "../styles/sectionInfo.css";

const hongos = [hongo1, hongo2, hongo3];

// 🔹 Ícono aleatorio que rota imágenes + posición
function RandomHongoIcon() {
  const [currentHongo, setCurrentHongo] = useState(hongo1);
  const [side, setSide] = useState("right");
  const [animationDuration, setAnimationDuration] = useState("4s");
  const [animationDelay, setAnimationDelay] = useState("0s");

  useEffect(() => {
    setSide(Math.random() > 0.5 ? "left" : "right");
    setAnimationDuration(`${3 + Math.random() * 3}s`);
    setAnimationDelay(`${Math.random() * 2}s`);

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * hongos.length);
      setCurrentHongo(hongos[randomIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={currentHongo}
      alt="Hongo decorativo"
      className={`inline-icon floating-icon ${side}`}
      style={{ animationDuration, animationDelay }}
    />
  );
}

function SectionInfo() {
  return (
    <section 
      className="section-info"
      style={{
        backgroundImage: `url(${fondo2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="info-container">
        
        {/* Línea 1 */}
        <h2 className="highlight purple floating">EXPERIENCIAS</h2>

        {/* Línea 2 */}
        <h2 className="highlight orange fade-in">
          <RandomHongoIcon /> HECHAS DE <RandomHongoIcon />
        </h2>

        {/* Línea 3 → ahora SOLO un hongo entre medio */}
        <div className="tagline">
          <span className="highlight green bouncing">HONGOS,</span>
          <RandomHongoIcon />
          <span className="highlight pink bouncing">SABORES</span>
        </div>

        {/* Línea 4 */}
        <h2 className="highlight yellow glow">
          <RandomHongoIcon /> Y ALQUIMIA <RandomHongoIcon />
        </h2>

      </div>
    </section>
  );
}

export default SectionInfo;