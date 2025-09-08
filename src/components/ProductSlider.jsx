import React, { useRef } from "react";
import "../styles/productSlider.css";

// 👉 Importamos flechas
import arrowLeft from "../assets/img/arrowleft.png";
import arrowRight from "../assets/img/arrowright.png";

// 👉 Importamos productos
import producto1 from "../assets/img/producto1.jpg";
import producto2 from "../assets/img/producto2.jpg";
import producto3 from "../assets/img/producto3.jpg";

const products = [
  {
    name: "Colgante Fungi",
    desc: "Accesorio único con inspiración fungi.",
    price: "$30",
    img: producto1,
  },
  {
    name: "Velador Místico",
    desc: "Una luz suave con diseño micelial.",
    price: "$45",
    img: producto2,
  },
  {
    name: "Camiseta Fungi",
    desc: "Diseño creativo y cómodo para almas miceliales.",
    price: "$25",
    img: producto3,
  },
];

export default function ProductSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <section className="slider-section">
      <h2 className="slider-title gradient-text">COLECCIÓN FUNGI</h2>

      {/* Flecha izquierda */}
      <button className="arrow left" onClick={scrollLeft}>
        <img src={arrowLeft} alt="Anterior" />
      </button>

      {/* Flecha derecha */}
      <button className="arrow right" onClick={scrollRight}>
        <img src={arrowRight} alt="Siguiente" />
      </button>

      <div className="slider-container" ref={sliderRef}>
        {products.map((p, index) => (
          <div key={index} className="product-card">
            {/* Header */}
            <div className="card-header">
              <h3 className="product-name">{p.name}</h3>
            </div>

            {/* Subheader */}
            <div className="card-subheader">
              <p className="product-desc">{p.desc}</p>
            </div>

            {/* Imagen */}
            <div className="card-image">
              <img src={p.img} alt={p.name} className="product-img" />
            </div>

            {/* Footer */}
            <div className="card-footer">
              <span className="stock-info">DISPONIBLE</span>
              <span className="product-price">{p.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}