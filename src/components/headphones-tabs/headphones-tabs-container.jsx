import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../../redux/entities/headphones/headphones-slice";
import { HeadphonesTabs } from "./headphones-tabs";
import { getHeadphones } from "../../redux/entities/headphones/get-headphones";
import { useRequest } from "../../redux/hooks/use-request";

export const HeadphonesTabsContainer = () => {
  const headphonesIds = useSelector(selectHeadphonesIds);

  const requestStatus = useRequest(getHeadphones);

  if (requestStatus === "pending") {
    return "loading ...";
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  if (!headphonesIds.length) {
    return null;
  }

  return <HeadphonesTabs headphonesIds={headphonesIds} />;
};
