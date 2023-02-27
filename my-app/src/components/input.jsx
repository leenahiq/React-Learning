import { useState } from "react";
const Input = ({ addNewBook }) => {
  const [input, setInput] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault(); //will stop submit button to refresh the page. event is a object get created in browser when yoou interact with page.
    addNewBook(input);
  };

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={onChangeHandler}
          type="text"
          placeholder="Type your book here"
        ></input>
        <button type="submit" name="bookTitle">
          submit
        </button>
      </form>
    </>
  );
};

export default Input;

//submit text from input to the booklist
