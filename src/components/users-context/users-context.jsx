"use client";

import { UsersContext } from ".";

export const UsersContextProvider = ({ children, users }) => {
  return <UsersContext value={users}>{children}</UsersContext>;
};
