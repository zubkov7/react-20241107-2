import { useDispatch, useSelector } from "react-redux";
import { Counter } from "../counter/counter";
import {
  addToCart,
  removeFromCart,
  selectCartItemAmountById,
} from "../../redux/ui/cart/cart-slice";

export const HeadphoneCounter = ({ id }) => {
  const dispatch = useDispatch();

  const amount =
    useSelector((state) => selectCartItemAmountById(state, id)) || 0;

  const increment = () => dispatch(addToCart(id));
  const decrement = () => dispatch(removeFromCart(id));

  return (
    <div>
      <Counter value={amount} increment={increment} decrement={decrement} />
    </div>
  );
};
