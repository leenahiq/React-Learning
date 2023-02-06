export default function BookList({ heading, books, colour }) {
  const listBooks = books.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div>
      <h2 style={{ color: colour }}>{heading}</h2>
      <ol>{listBooks}</ol>
    </div>
  );
}
