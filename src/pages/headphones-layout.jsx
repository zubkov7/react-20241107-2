import { HeadphonesTabsContainer } from "../components/headphones-tabs/headphones-tabs-container";

export const HeadphonesLayout = ({ children }) => {
  return (
    <div>
      <HeadphonesTabsContainer />
      {children}
    </div>
  );
};
