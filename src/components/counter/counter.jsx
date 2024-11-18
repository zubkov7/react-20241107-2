import { useCount } from "./use-counter";

export const Counter = () => {
  const { value, increment, decrement } = useCount();

  return (
    <div>
      <button onClick={increment}>+</button>
      {value}
      <button onClick={decrement}>-</button>
    </div>
  );
};
