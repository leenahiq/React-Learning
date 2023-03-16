import Input from "./input";

export default function BookList({
  heading,
  books,
  colour,
  addABookFunction,
  deleteBook,
}) {
  const listBooks = books.map((book, index) => (
    <li key={index}>
      {book}{" "}
      <button
        onClick={() => {
          deleteBook(book);
        }}
      >
        X
      </button>
    </li>
  ));
  return (
    <div>
      <h2 style={{ color: colour }}>{heading}</h2>
      <Input addNewBook={addABookFunction} />
      <ol>{listBooks}</ol>
    </div>
  );
}
