import ReadBooks from "./components/read-books";
import NotReadBooks from "./components/not-read-books";

function App() {
  return (
    <div className="App">
      <h1> Books </h1>
      <ReadBooks />
      <NotReadBooks />
    </div>
  );
}

export default App;
