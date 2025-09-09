import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/shop.css";

import producto1 from "../assets/img/producto1.jpg";
import producto2 from "../assets/img/producto2.jpg";
import producto3 from "../assets/img/producto3.jpg";

// Productos con tema de color fijo
const products = [
  { id: 1, name: "Colgante Fungi", desc: "Accesorio único con inspiración fungi.", price: "$30", img: producto1, theme: "green" },
  { id: 2, name: "Velador Místico", desc: "Una luz suave con diseño micelial.", price: "$45", img: producto2, theme: "purple" },
  { id: 3, name: "Camiseta Fungi", desc: "Diseño creativo y cómodo para almas miceliales.", price: "$25", img: producto3, theme: "orange" },
  { id: 4, name: "Collar Botánico", desc: "Diseño natural y elegante.", price: "$28", img: producto1, theme: "pink" },
  { id: 5, name: "Lámpara Fungi", desc: "Ilumina tu espacio con naturaleza.", price: "$50", img: producto2, theme: "yellow" },
  { id: 6, name: "Bolso Micelio", desc: "Práctico y eco-friendly.", price: "$35", img: producto3, theme: "brown" },
  { id: 7, name: "Cuadro Mágico", desc: "Decoración con aura mística.", price: "$40", img: producto1, theme: "green" },
  { id: 8, name: "Set de Tazas Fungi", desc: "Perfecto para el té.", price: "$32", img: producto2, theme: "purple" },
  { id: 9, name: "Sudadera Micelio", desc: "Cómoda y original.", price: "$55", img: producto3, theme: "orange" },
  { id: 10, name: "Pulsera Natural", desc: "Detalles hechos a mano.", price: "$20", img: producto1, theme: "pink" },
  { id: 11, name: "Velador Encantado", desc: "Un ambiente mágico en casa.", price: "$47", img: producto2, theme: "yellow" },
  { id: 12, name: "Camiseta Alternativa", desc: "Inspirada en la naturaleza.", price: "$29", img: producto3, theme: "brown" },
];

export default function Shop() {
  const navigate = useNavigate();

  const goToDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="shop-section">
      <h2 className="shop-title gradient-text">SHOP ALL</h2>

      <div className="shop-grid">
        {products.map((p) => (
          <div
            key={p.id}
            className="product-card"
            onClick={() => goToDetail(p.id)}
            style={{ cursor: "pointer" }}
          >
            {/* Header */}
            <div className={`card-header ${p.theme}`}>
              <h3 className="product-name">{p.name}</h3>
            </div>

            {/* Subheader */}
            <div className={`card-subheader ${p.theme}`}>
              <p className="product-desc">{p.desc}</p>
            </div>

            {/* Imagen */}
            <div className="card-image">
              <img src={p.img} alt={p.name} className="product-img" />
            </div>

            {/* Footer */}
            <div className={`card-footer ${p.theme}`}>
              <span className="stock-info">DISPONIBLE</span>
              <span className="product-price">{p.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}