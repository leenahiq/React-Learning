import BookList from "./components/book-list";

const readBookData = {
  heading: "Read Books",
  books: ["Just JavaScript", "My Little Pony"],
};
const notReadBookData = {
  heading: "Not Read Books",
  books: ["Power of thinking big", "Rich dad poor dad", "some book 3"],
};
function App() {
  return (
    <div className="App">
      <h1> Books </h1>
      <BookList {...readBookData} />
      <BookList {...notReadBookData} />
    </div>
  );
}

export default App;

// to do
//input field which take text and on submit store information in number list in Readbook
//Component and same for NotReadComponents
//refactor props
//refactor List
// how can we use array methods to list the books
//problem to solve
//using same component BookList
//heading inside NotReadBooks
