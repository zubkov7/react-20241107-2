"use client";

import { HeadphonesTabs } from "./headphones-tabs";
import { useGetHeadphonesQuery } from "../../redux/services/api";

export const HeadphonesTabsContainer = () => {
  const { data, isLoading, isError } = useGetHeadphonesQuery();

  if (isLoading) {
    return "loading ...";
  }

  if (isError) {
    return "error";
  }

  if (!data.length) {
    return null;
  }

  return <HeadphonesTabs headphones={data} />;
};
