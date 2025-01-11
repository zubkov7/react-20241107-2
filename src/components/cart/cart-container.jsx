import { getHeadphones } from "../../services/get-headphones";
import { Cart } from "./cart";

export const CartContainer = async () => {
  const headphones = await getHeadphones();

  return <Cart headphones={headphones} />;
};
