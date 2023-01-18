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

// to do
//input field which take text and on submit store information in number list in Readbook
//Component and same for NotReadComponents
