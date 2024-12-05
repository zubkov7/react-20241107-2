import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/headphones-slice";
import { TabLink } from "../tab-link/tab-link";

export const HeadphoneTabContainer = ({ id }) => {
  const headhpone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headhpone) {
    return;
  }

  return <TabLink title={headhpone.name} to={id} />;
};
