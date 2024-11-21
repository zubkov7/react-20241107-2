import { Counter } from "../counter/counter";
import { useCount } from "./use-counter";

export const HeadphoneCounter = () => {
  const { value, increment, decrement } = useCount();

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
