import Input from "./input";

export default function BookList({ heading, books, colour, addNewBook }) {
  const listBooks = books.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div>
      <h2 style={{ color: colour }}>{heading}</h2>
      <Input addNewBook={addNewBook} />
      <ol>{listBooks}</ol>
    </div>
  );
}
