import React, { useState, useCallback } from "react";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
    (c) => {
      console.log('calling setcounter', c);
      setCounter((value) => value + c);
    },
    [],
  );

  return (
    <>
      <div> CallbackHook {counter} </div>
      <ShowIncrement incrementFather={incrementFather} />
    </>
  );
};

export const ShowIncrement = ({ incrementFather }) => {
  return (
    <button onClick={() => incrementFather(5)}>
      Increment
    </button>
  );
};
