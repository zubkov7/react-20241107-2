import { useState, useCallback, useRef, useEffect } from "react";

export const useCount = ({ min = 0, max = 50000000 } = {}) => {
  const [value, setValue] = useState(min);

  const increment = useCallback(
    () => setValue((currentValue) => Math.min(currentValue + 1, max)),
    [max]
  );

  const decrement = useCallback(
    () => setValue((currentValue) => Math.max(currentValue - 1, min)),
    [min]
  );

  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(increment, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  });

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  return {
    value,
    increment,
    decrement,
    stop,
  };
};
