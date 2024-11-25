import { useEffect, useRef } from "react";
import { Counter } from "../counter/counter";
import { useForm } from "./use-form";

export const ReviewForm = () => {
  const {
    form,
    setAddress,
    setName,
    setText,
    incrementRating,
    decrementRating,
    clear,
  } = useForm();

  const { name, address, text, rating } = form;

  const nameInputRef = useRef(); // { current: undefined }

  useEffect(() => {
    nameInputRef.current.focus();
    console.log(nameInputRef.current.offsetWidth);
  }, []);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h3>Review Form</h3>

      <div>
        <span>Name</span>
        <input
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
          ref={nameInputRef}
        />
      </div>

      <div>
        <span>Text</span>
        <input
          type='text'
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      <div>
        <span>Address</span>
        <input
          type='text'
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>

      <Counter
        value={rating}
        decrement={decrementRating}
        increment={incrementRating}
      />

      <button onClick={clear}>clear</button>
    </form>
  );
};
