import { useState } from "react";

export const useCount = () => {
  const [value, setValue] = useState({ value: 0 });

  const increase = () => {
    setValue((currentValue) => {
      return {
        ...currentValue,
        value: currentValue.value + 1,
      };
    });
  };

  const decrease = () => {
    setValue((currentValue) => {
      return {
        ...currentValue,
        value: currentValue.value - 1,
      };
    });
  };

  return {
    value: value.value,
    increase,
    decrease,
  };
};
