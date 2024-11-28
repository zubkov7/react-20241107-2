import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/headphones-slice";
import { Tab } from "../tab/tab";

export const HeadphoneTabContainer = ({ id, onClick, isActive }) => {
  const headhpone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headhpone) {
    return;
  }

  return <Tab title={headhpone.name} onClick={onClick} isActive={isActive} />;
};
