import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/headphones-slice";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";

export const CartItem = ({ id }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headphone.name) {
    return null;
  }

  return (
    <div>
      {headphone.name}
      <HeadphoneCounter id={id} />
    </div>
  );
};
