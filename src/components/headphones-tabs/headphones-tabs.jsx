import { TabLink } from "../tab-link/tab-link";

export const HeadphonesTabs = ({ headphones }) => {
  return (
    <div>
      <h3>Choose headphone</h3>
      {headphones.map(({ name, id }) => (
        <TabLink title={name} href={`/headphones/${id}`} key={id} />
      ))}
    </div>
  );
};
