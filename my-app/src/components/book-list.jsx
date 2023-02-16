import Input from "./input";

export default function BookList({ heading, books, colour, setNewBook }) {
  const listBooks = books.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div>
      <h2 style={{ color: colour }}>{heading}</h2>
      <Input setNewBook={setNewBook} />
      <ol>{listBooks}</ol>
    </div>
  );
}
