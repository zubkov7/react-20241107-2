import { useState } from "react";

export const useCount = ({ min = 0, max = 5 } = {}) => {
  const [value, setValue] = useState(min);

  const increment = () => setValue(Math.min(value + 1, max));
  const decrement = () => setValue(Math.max(value - 1, min));

  return {
    value,
    increment,
    decrement,
  };
};
