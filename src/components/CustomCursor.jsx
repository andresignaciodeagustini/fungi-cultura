// src/components/CustomCursor.jsx
import { useEffect } from "react";
import "../styles/customCursor.css";

function CustomCursor() {
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

  return null; // no renderiza nada, solo gestiona el cursor en el body
}

export default CustomCursor;