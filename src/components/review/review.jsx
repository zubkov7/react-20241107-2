import { UserContainer } from "../user/user-container";

export const Review = ({ text, userId }) => {
  return (
    <div>
      {text} - <UserContainer id={userId} />
    </div>
  );
};
