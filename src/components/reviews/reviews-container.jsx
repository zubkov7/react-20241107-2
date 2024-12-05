import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/headphones-slice";
import { Reviews } from "./reviews";

export const ReviewsContainer = ({ headphoneId }) => {
  const headphone = useSelector((state) =>
    selectHeadphoneById(state, headphoneId)
  );

  if (!headphone?.reviews) {
    return null;
  }

  return <Reviews reviewsIds={headphone.reviews} />;
};
