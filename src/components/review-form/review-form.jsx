import { useForm } from "./use-form";

export const ReviewForm = () => {
  const { form, setAddress, setName, setText } = useForm();

  const { name, address, text } = form;

  return (
    <form>
      <div>
        <span>Name</span>
        <input
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
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
    </form>
  );
};
