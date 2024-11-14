import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/headphone";

export const HeadphonesPage = () => {
  return (
    <div>
      <h1>Headphones Page</h1>
      {headphones.map((headphone) => (
        <Headphone headphone={headphone} key={headphone.id} />
      ))}
    </div>
  );
};
