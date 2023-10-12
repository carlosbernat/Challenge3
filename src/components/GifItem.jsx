import React from "react";

export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p> {/* Agrega un párrafo para mostrar el título */}
    </div>
  );
};


// Aqui use un prompt para solicitar que se me muestre tambien el titulo de GIF ya que anteriormente
// como lo estaba haciendo tenia los titulos mas no el gif.