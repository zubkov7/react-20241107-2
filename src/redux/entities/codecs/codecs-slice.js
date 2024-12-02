import { createSlice } from "@reduxjs/toolkit";
import { normalizedCodecs } from "../../../constants/normalized-mock";

const initialState = {
  entities: normalizedCodecs.reduce((acc, codec) => {
    acc[codec.id] = codec;

    return acc;
  }, {}),
  ids: normalizedCodecs.map(({ id }) => id),
};

export const codecsSlice = createSlice({
  name: "codecs",
  initialState,
  selectors: {
    selectCodecsIds: (state) => state.ids,
    selectCodecById: (state, id) => state.entities[id],
  },
});

export const { selectCodecsIds, selectCodecById } = codecsSlice.selectors;
