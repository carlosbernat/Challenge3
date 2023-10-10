import React, { useState } from 'react';

const FirstApp = ({value}) => {

  const [counter, setCounter] = useState(value);

 
  const handleSubtract = () => {
    
    setCounter(counter - 1);
  };

  
  const handleReset = () => {
  
    setCounter(value);
  };

  return (
    <div>
      <h1>Nuevo Título</h1>
      <span>{counter}</span> {}
      <br />
      <button onClick={handleSubtract}>Restar</button>
      <button onClick={handleReset}>Reiniciar</button> 
    </div>
  )
}
export default FirstApp;