"use client";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart/cart-slice";
import { CartItem } from "../cart-item/cart-item";
import { useAuth } from "../auth-context/use-auth";

export const Cart = ({ headphones }) => {
  const items = useSelector(selectCartItems);

  const { auth } = useAuth();

  const { isAuthorized } = auth;

  if (!items.length || !isAuthorized) {
    return null;
  }

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {items.map(({ id }) => (
          <li key={id}>
            <CartItem id={id} headphones={headphones} />
          </li>
        ))}
      </ul>
    </div>
  );
};
