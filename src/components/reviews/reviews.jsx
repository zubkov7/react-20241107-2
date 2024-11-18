export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews?.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </div>
  );
};
