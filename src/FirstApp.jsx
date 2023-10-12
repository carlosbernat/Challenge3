import React from 'react';
import { useCounter } from './helpers/useCounter';


const FirstApp = ({ value }) => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Contador Challenge 5</h1>
      <span>{count}</span>
      <br />
      <button onClick={decrement}>Restar -1</button>
      <button onClick={reset}>Reiniciar</button>
      <button onClick={increment}>Sumar +1</button>
    </div>
  );
};

export default FirstApp;
