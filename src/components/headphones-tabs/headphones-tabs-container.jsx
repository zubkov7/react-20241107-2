import { HeadphonesTabs } from "./headphones-tabs";
import { getHeadphones } from "../../services/get-headphones";

export const HeadphonesTabsContainer = async () => {
  const headphones = await getHeadphones();

  if (!headphones.length) {
    return null;
  }

  return <HeadphonesTabs headphones={headphones} />;
};
