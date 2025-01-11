import { HeadphoneCounter } from "../headphone-counter/headphone-counter";

export const CartItem = ({ id, headphones }) => {
  const headphone = headphones.find(
    ({ id: headphoneId }) => headphoneId === id
  );

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
