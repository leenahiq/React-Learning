import ReadBooks from "./components/read";
import NotReadBooks from "./components/not-read";

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
