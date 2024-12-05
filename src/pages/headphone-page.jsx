import { Outlet, useParams } from "react-router-dom";
import { HeadphoneContainer } from "../components/headphone/headphone-container";

export const HeadphonePage = () => {
  const { headphoneId } = useParams();

  return (
    <div>
      <HeadphoneContainer id={headphoneId} />
      <Outlet />
    </div>
  );
};
