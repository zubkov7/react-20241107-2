"use client";

import { use } from "react";
import { UsersContext } from ".";

export const useUsers = () => {
  return use(UsersContext);
};
