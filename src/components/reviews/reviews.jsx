export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3>Reviews</h3>
      {reviews.map((text) => (
        <span key={text}>{text}</span>
      ))}
    </>
  );
};
