import Input from "./input";

export default function BookList({ heading, books, colour, addABookFunction }) {
  const listBooks = books.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div>
      <h2 style={{ color: colour }}>{heading}</h2>
      <Input addNewBook={addABookFunction} />
      <ol>{listBooks}</ol>
    </div>
  );
}
