"use client";

import { User } from "./user";
import { useUsers } from "../users-context/use-users";

export const UserContainer = ({ id }) => {
  const users = useUsers();

  const user = users?.find(({ id: userId }) => userId === id);

  if (!user?.name) {
    return null;
  }

  return <User name={user.name} />;
};
