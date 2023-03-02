import { useState } from "react"; //importing setState function from react
import BookList from "./components/book-list";
import Button from "./components/button";

function App() {
  const [colour, setColour] = useState("green"); //react hook
  const [readBookData, setNewBook] = useState({
    heading: "Read Books",
    books: ["Just JavaScript", "My Little Pony"],
  });

  const [notReadBookData, setNotReadBookData] = useState({
    heading: "Not Read Books",
    books: ["Power of thinking big", "Rich dad poor dad", "some book 3"],
  });

  const addNewBook = (book) => {
    const { heading, books } = readBookData;
    books.push(book);
    setNewBook({ heading: heading, books: books });
    console.log(readBookData);
  };

  const addNotReadNewBook = (book) => {
    const { heading, books } = notReadBookData;
    books.push(book);
    setNewBook({ heading: heading, books: books });
    console.log(notReadBookData);
  };

  const onClickHandler = () => {
    colour === "blue" ? setColour("red") : setColour("blue");
  };
  return (
    <div className="App">
      <h1> Books </h1>
      <BookList
        addABookFunction={addNewBook}
        {...readBookData}
        colour={colour}
      />
      <BookList {...notReadBookData} addABookFunction={addNotReadNewBook} />
      <Button colour={colour} onClickHandler={onClickHandler} />
    </div>
  );
}

export default App;
