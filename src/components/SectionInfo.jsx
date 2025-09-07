import React from "react";
import fondo2 from "../assets/img/fondo2.jpg";
import "../styles/sectionInfo.css";

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
        <h2 className="highlight orange fade-in">HECHAS DE</h2>

        {/* Línea 3 */}
        <div className="tagline">
          <span className="highlight green bouncing">HONGOS,</span>
          <span className="highlight pink bouncing"> SABORES</span>
        </div>

        {/* Línea 4 */}
        <h2 className="highlight yellow glow">Y ALQUIMIA</h2>

        

      </div>
    </section>
  );
}

export default SectionInfo;