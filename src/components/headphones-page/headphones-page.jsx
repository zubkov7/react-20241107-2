import { useState } from "react";
import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../../redux/entities/headphones/headphones-slice";
import { HeadphoneContainer } from "../headphone/headphone-container";
import { HeadphoneTabContainer } from "../headphone-tab/headphone-tab-container";

export const HeadphonesPage = ({ title }) => {
  const headphonesIds = useSelector(selectHeadphonesIds);

  const [activeHeadphoneId, setActiveHeadphoneId] = useState(
    headphonesIds[0].id
  );

  const handleSetActiveHeadphoneId = (id) => {
    if (activeHeadphoneId === id) {
      return;
    }

    setActiveHeadphoneId(id);
  };

  return (
    <div>
      <h1>{title}</h1>

      {headphonesIds.map((id) => (
        <HeadphoneTabContainer
          key={id}
          id={id}
          onClick={() => handleSetActiveHeadphoneId(id)}
          isActive={id === activeHeadphoneId}
        />
      ))}

      {activeHeadphoneId && (
        <HeadphoneContainer id={activeHeadphoneId} key={activeHeadphoneId} />
      )}
    </div>
  );
};
