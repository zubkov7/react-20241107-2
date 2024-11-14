export const Codecs = ({ codecs }) => {
  return (
    <>
      <h3>Codecs</h3>
      {codecs.map((codec) => (
        <span key={codec}>{codec}</span>
      ))}
    </>
  );
};
