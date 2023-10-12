import React, { useState } from 'react';
import BreakingBadQuote from './BreakingBadQuote';

const MultipleCustomHooks = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Multiple Custom Hooks</h2>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>Increment Counter</button>
      <BreakingBadQuote />
    </div>
  );
};

export default MultipleCustomHooks;
