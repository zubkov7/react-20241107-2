import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../../redux/entities/headphones/headphones-slice";
import { HeadphoneTabContainer } from "../headphone-tab/headphone-tab-container";
import { Link, Outlet } from "react-router-dom";

export const HeadphonesPage = ({ title }) => {
  const headphonesIds = useSelector(selectHeadphonesIds);

  return (
    <div>
      <h1>{title}</h1>

      {headphonesIds.map((id) => (
        <HeadphoneTabContainer key={id} id={id} />
      ))}

      <Link to='blocked'>blocked</Link>

      <Outlet />
    </div>
  );
};
