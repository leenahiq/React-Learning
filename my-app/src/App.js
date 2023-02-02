import BookList from "./components/book-list";
import { useState } from "react"; //importing setState function from react

const readBookData = {
  heading: "Read Books",
  books: ["Just JavaScript", "My Little Pony"],
};
const notReadBookData = {
  heading: "Not Read Books",
  books: ["Power of thinking big", "Rich dad poor dad", "some book 3"],
};

function App() {
  const [colour, setColour] = useState("green"); //react hook
  const onClickHandler = () => {
    colour === "blue" ? setColour("red") : setColour("blue");

    console.log("clicked");
  };
  return (
    <div className="App">
      <h1> Books </h1>
      <BookList {...readBookData} />
      <BookList {...notReadBookData} />
      <button style={{ backgroundColor: colour }} onClick={onClickHandler}>
        toggle
      </button>
    </div>
  );
}

export default App;
