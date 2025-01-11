import { Suspense } from "react";
import { HeadphoneContainer } from "../headphone/headphone-container";



export const HeadphoneLayout = async ({ params, children }) => {
  const { headphoneId } = await params;

  return (
    <div>
      <Suspense fallback={<div>loading headphone ....</div>}>
        <HeadphoneContainer id={headphoneId} />
      </Suspense>
      {children}
    </div>
  );
};
