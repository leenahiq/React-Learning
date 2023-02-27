import { useState, useEffect } from "react"; //importing setState function from react
import BookList from "./components/book-list";
import Button from "./components/button";
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
  const [newBook, setNewBook] = useState("");

  const addNewBook = (book) => {
    console.log(newBook);
    readBookData.books.push(book);
    setColour("purple");
    console.log(readBookData);
  };

  const onClickHandler = () => {
    colour === "blue" ? setColour("red") : setColour("blue");
  };
  return (
    <div className="App">
      <h1> Books </h1>
      <BookList addNewBook={addNewBook} {...readBookData} colour={colour} />
      <BookList {...notReadBookData} />
      <Button colour={colour} onClickHandler={onClickHandler} />
    </div>
  );
}

export default App;
