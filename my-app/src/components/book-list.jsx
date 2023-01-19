export default function BookList({ heading, books }) {
  return (
    <div>
      <h2>{heading}</h2>
      <ol>
        <li>{books[0]}</li>
        <li>{books[1]}</li>
        <li>{books[2]}</li>
      </ol>
    </div>
  );
}
