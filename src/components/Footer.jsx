import React from "react";
import "../styles/footer.css"; // ✅ fix de la ruta al CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="#">INSTAGRAM</a>
        <a href="#">TWITTER</a>
        <a href="#">TIKTOK</a>
        <a href="#">BLOG</a>
        <a href="#">SPOTIFY</a>
      </div>
      <div className="footer-main">
        <div className="footer-col">
          <a href="#">Home</a>
          <a href="#">Fungi Culinario</a>
          <a href="#">Medicina Natural</a>
          <a href="#">Contacto</a>
        </div>
        <div className="footer-center">
          <h2 className="footer-title">FUNGI CULTURA</h2>
          <p>Descubrí el universo gastronómico y medicinal de los hongos 🍄</p>
          <div className="footer-subscribe">
            <input type="email" placeholder="Tu email..." />
            <button>→</button>
          </div>
        </div>
        <div className="footer-col">
          <a href="#">Recetas</a>
          <a href="#">Guía de Micología</a>
          <a href="#">Tienda</a>
          <a href="#">Experiencias</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Fungi Cultura</p>
        <div className="footer-links">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
          <a href="#">FAQs</a>
          <a href="#">Prensa</a>
        </div>
        <p className="credit">Hecho con 🍄 y creatividad</p>
      </div>
    </footer>
  );
}

export default Footer;