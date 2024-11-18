import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  address: "",
};

const SET_NAME_ACTION = "SET_NAME";

// action: { type: '', payload: '' }
const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return { ...DEFAULT_FORM_VALUE, name: payload };
    case "SET_TEXT":
      return { ...state, text: payload };
    case "SET_ADDRESS":
      return { ...state, address: payload };
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const setName = (name) => {
    dispatch({ type: SET_NAME_ACTION, payload: name });
  };

  const setText = (text) => {
    dispatch({ type: "SET_TEXT", payload: text });
  };

  const setAddress = (address) => {
    dispatch({ type: "SET_ADDRESS", payload: address });
  };

  return {
    form,
    setName,
    setText,
    setAddress,
  };
};
