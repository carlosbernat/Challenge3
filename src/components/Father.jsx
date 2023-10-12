import React, { useState } from "react";
import { Son } from "./Son";

const list = [2, 4, 6, 8, 10];

export const Father = () => {
  const [valor, setValor] = useState(0);

  const increment = (num) => {
    setValor(valor + num);
  };

  return (
    <div>
      <h1> Father </h1>
      <p> Total: {valor} </p>
      <hr />

      {list.map((n, idx) => (
        <Son key={idx} numero={n} increment={increment} />
      ))}
    </div>
  );
};
