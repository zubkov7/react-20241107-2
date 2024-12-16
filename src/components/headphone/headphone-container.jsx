"use client";

import { Headphone } from "./headphone";
import { useGetHeadphonesQuery } from "../../redux/services/api";

export const HeadphoneContainer = ({ id }) => {
  const { data: headphone } = useGetHeadphonesQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id: headphoneId }) => headphoneId === id),
    }),
  });

  if (!headphone) {
    return null;
  }

  const { name, brand, reviews, codecs } = headphone;

  return (
    <Headphone
      name={name}
      brand={brand}
      reviews={reviews}
      codecs={codecs}
      id={id}
    />
  );
};
