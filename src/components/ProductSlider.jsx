import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Importamos para navegación
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
    id: 1,
    name: "Colgante Fungi",
    desc: "Accesorio único con inspiración fungi.",
    price: "$30",
    img: producto1,
  },
  {
    id: 2,
    name: "Velador Místico",
    desc: "Una luz suave con diseño micelial.",
    price: "$45",
    img: producto2,
  },
  {
    id: 3,
    name: "Camiseta Fungi",
    desc: "Diseño creativo y cómodo para almas miceliales.",
    price: "$25",
    img: producto3,
  },
];

export default function ProductSlider() {
  const sliderRef = useRef(null);
  const navigate = useNavigate(); // 👈 Hook para redirigir

  const scrollLeft = () =>
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () =>
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });

  // 👇 Función para redirigir
  const goToDetail = (id) => {
    navigate(`/product/${id}`);
  };

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
        {products.map((p) => (
          <div
            key={p.id}
            className="product-card"
            onClick={() => goToDetail(p.id)} // 👈 clic redirige al detalle
            style={{ cursor: "pointer" }}   // 👈 cambio visual al pasar el mouse
          >
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