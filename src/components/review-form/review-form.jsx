import { Button } from "../button/button";
import { useActionState, useRef } from "react";

export const ReviewForm = ({ submitFormAction }) => {
  const ratingRef = useRef();

  const [formState, submitAction] = useActionState(submitFormAction, {
    text: "default text",
    rating: 5,
  });

  return (
    <form action={submitAction}>
      <h3>Review Form</h3>

      <div>
        <label htmlFor='text'>Text</label>
        <input
          type='text'
          id='text'
          name='text'
          defaultValue={formState.text}
        />
      </div>

      <div>
        <label htmlFor='rating'>Rating</label>
        <button
          type='button'
          id='decrement-button'
          onClick={() => ratingRef.current.stepDown()}
        >
          -
        </button>
        <input
          type='number'
          id='rating'
          name='rating'
          min={1}
          max={5}
          ref={ratingRef}
          defaultValue={formState.rating}
        />
        <button
          type='button'
          id='increment-button'
          onClick={() => ratingRef.current.stepUp()}
        >
          +
        </button>
      </div>

      <Button type='submit' formAction={() => submitAction(null)}>
        clear
      </Button>
      <Button type='submit'>submit</Button>
    </form>
  );
};
