import { createRoot } from "react-dom/client";
import { headphones } from "./constants/mock";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(
  <div>
    <h1>Headphones</h1>
    {headphones.map(({ name, id, reviews, codecs }) => (
      <div key={id}>
        <h2>{name}</h2>
        <h3>Reviews</h3>
        {reviews.map((text) => (
          <span key={text}>{text}</span>
        ))}
        <h3>Codecs</h3>
        {codecs.map((codec) => (
          <span key={codec}>{codec}</span>
        ))}
      </div>
    ))}
  </div>
);
