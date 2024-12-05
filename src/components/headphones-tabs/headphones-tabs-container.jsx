import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../../redux/entities/headphones/headphones-slice";
import { HeadphonesTabs } from "./headphones-tabs";

export const HeadphonesTabsContainer = () => {
  const headphonesIds = useSelector(selectHeadphonesIds);

  if (!headphonesIds.length) {
    return null;
  }

  return <HeadphonesTabs headphonesIds={headphonesIds} />;
};
