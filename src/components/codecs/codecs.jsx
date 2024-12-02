import { CodecContainer } from "../codec/codec-container";

export const Codecs = ({ codecsIds }) => {
  return (
    <div>
      <h3>Codecs</h3>
      {codecsIds.map((id) => (
        <li key={id}>
          <CodecContainer id={id} />
        </li>
      ))}
    </div>
  );
};
