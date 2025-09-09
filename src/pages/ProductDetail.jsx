import React from "react";
import { useParams } from "react-router-dom";
import "../styles/productDetail.css";

import producto1 from "../assets/img/producto1.jpg";
import producto2 from "../assets/img/producto2.jpg";
import producto3 from "../assets/img/producto3.jpg";

const products = [
  {
    id: 1,
    name: "Colgante Fungi",
    shortDesc: "Accesorio único inspirado en la naturaleza. Hecho con materiales reciclados y diseño artesanal.",
    details: "Producto hecho con materiales sostenibles, inspirado en la estética micelial, buscando un balance entre diseño y naturaleza.",
    price: 18,
    img: producto1,
  },
  {
    id: 2,
    name: "Velador Místico",
    shortDesc: "Lámpara micelial para crear atmósferas mágicas y sostenibles.",
    details: "Hecho con materiales reciclados, diseño funcional y ambientalmente responsable.",
    price: 25,
    img: producto2,
  },
  {
    id: 3,
    name: "Camiseta Fungi",
    shortDesc: "Camiseta unisex fresca, cómoda y con estilo micelial alternativo.",
    details: "Material algodón orgánico. Diseño minimalista y natural.",
    price: 30,
    img: producto3,
  },
];

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="product-container">
      {/* Columna izquierda */}
      <div className="left-column">
        <div className="top-content">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-rating">
            ⭐⭐⭐⭐☆ <span>123 Reviews</span>
          </div>
        </div>

        <div className="bottom-description">
          <p>{product.shortDesc}</p>
        </div>
      </div>

      {/* Columna central */}
      <div className="center-column">
        <img src={product.img} alt={product.name} />
      </div>

      {/* Columna derecha */}
      <div className="right-column">
        <div className="product-details">
          <div className="details-block">
            <h3>Detalles del producto</h3>
            <p>{product.details}</p>
          </div>

          <div className="details-block">
            <h4>Bueno saber</h4>
            <p>
              Reutilizable, con un compartimento amplio, hecho con materiales
              reciclados al 100% y pensado para acompañarte en tu día a día.
            </p>
          </div>
        </div>

        {/* Zona de compra Baggu style */}
        <div className="buy-section">
          <div className="quantity-control">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <div className="buy-button">
            <button className="add-to-cart-btn">ADD TO CART</button>
            <span className="price">${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}