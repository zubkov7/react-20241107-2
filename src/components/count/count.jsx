import { useCount } from "./use-count";

export const Count = () => {
  const { value, increase, decrease } = useCount();

  return (
    <div>
      <button onClick={increase}>+</button>
      {value}
      <button onClick={decrease}>-</button>
    </div>
  );
};
