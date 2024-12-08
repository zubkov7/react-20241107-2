import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../../redux/entities/headphones/headphones-slice";
import { HeadphonesTabs } from "./headphones-tabs";
import { getHeadphones } from "../../redux/entities/headphones/get-headphones";
import { useRequest } from "../../redux/hooks/use-request";
import {
  REQUEST_PENDING_STATUS,
  REQUEST_REJECTED_STATUS,
} from "../../redux/ui/request/constants";

export const HeadphonesTabsContainer = () => {
  const headphonesIds = useSelector(selectHeadphonesIds);

  const requestStatus = useRequest(getHeadphones);

  if (requestStatus === REQUEST_PENDING_STATUS) {
    return "loading ...";
  }

  if (requestStatus === REQUEST_REJECTED_STATUS) {
    return "error";
  }

  if (!headphonesIds.length) {
    return null;
  }

  return <HeadphonesTabs headphonesIds={headphonesIds} />;
};
