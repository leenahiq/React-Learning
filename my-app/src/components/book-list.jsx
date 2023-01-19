export default function BookList({ heading, books }) {
  const listBooks = books.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div>
      <h2>{heading}</h2>
      <ol>{listBooks}</ol>
    </div>
  );
}
