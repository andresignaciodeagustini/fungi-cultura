import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/productSlider.css";

// Importa tus imágenes
import producto1 from "../assets/img/producto1.jpg";
import producto2 from "../assets/img/producto2.jpg";
import producto3 from "../assets/img/producto3.jpg";

// Datos de productos
const products = [
  { id: 1, name: "Colgante Fungi", desc: "Accesorio único con inspiración fungi.", price: "$30", img: producto1 },
  { id: 2, name: "Velador Místico", desc: "Una luz suave con diseño micelial.", price: "$45", img: producto2 },
  { id: 3, name: "Camiseta Fungi", desc: "Diseño creativo y cómodo para almas miceliales.", price: "$25", img: producto3 },
  { id: 4, name: "Collar Botánico", desc: "Diseño natural y elegante.", price: "$28", img: producto1 },
  { id: 5, name: "Lámpara Fungi", desc: "Ilumina tu espacio con naturaleza.", price: "$50", img: producto2 },
  { id: 6, name: "Bolso Micelio", desc: "Práctico y eco-friendly.", price: "$35", img: producto3 },
  { id: 7, name: "Cuadro Mágico", desc: "Decoración con aura mística.", price: "$40", img: producto1 },
  { id: 8, name: "Set de Tazas Fungi", desc: "Perfecto para el té.", price: "$32", img: producto2 },
  { id: 9, name: "Sudadera Micelio", desc: "Cómoda y original.", price: "$55", img: producto3 },
  { id: 10, name: "Pulsera Natural", desc: "Detalles hechos a mano.", price: "$20", img: producto1 },
  { id: 11, name: "Velador Encantado", desc: "Un ambiente mágico en casa.", price: "$47", img: producto2 },
  { id: 12, name: "Camiseta Alternativa", desc: "Inspirada en la naturaleza.", price: "$29", img: producto3 },
];

// Temas de colores que se aplican cíclicamente
const themes = [
  "card-theme-green",
  "card-theme-orange",
  "card-theme-purple",
  "card-theme-pink",
  "card-theme-yellow",
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
        {products.map((p, index) => {
          const theme = themes[index % themes.length]; // ciclo de temas
          return (
            <div
              key={p.id}
              className={`product-card ${theme}`}
              onClick={() => goToDetail(p.id)}
              style={{ cursor: "pointer" }}
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
          );
        })}
      </div>
    </section>
  );
}