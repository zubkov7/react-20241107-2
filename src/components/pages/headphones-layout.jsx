import { Suspense } from "react";
import { HeadphonesTabsContainer } from "../headphones-tabs/headphones-tabs-container";

export const HeadphonesLayout = async ({ children }) => {
  return (
    <div>
      <Suspense fallback={<div>...loading HeadphonesTabsContainer</div>}>
        <HeadphonesTabsContainer />
      </Suspense>
      {children}
    </div>
  );
};
