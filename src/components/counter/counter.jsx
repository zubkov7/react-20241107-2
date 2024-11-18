import { useEffect, useLayoutEffect } from "react";
import { useCount } from "./use-counter";

export const Counter = () => {
  const { value, increment, decrement } = useCount();

  useEffect(() => {
    // effect
    console.log(`effect - ${value}`);

    // cleanup function
    return () => {
      console.log(`cleanup - ${value}`);
    };
  }, [value]);

  useEffect(() => {
    console.log("only mount");
  }, []);

  useEffect(() => {
    const callback = () => console.log("scroll");
    window.addEventListener("scroll", callback);

    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, []);

  return (
    <div>
      <button onClick={increment}>+</button>
      {value}
      <button onClick={decrement}>-</button>
    </div>
  );
};
