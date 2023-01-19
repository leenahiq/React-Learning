# React-Learning

This repository is made to refreshes React and learn more in depth.
this documentation will guide

# Rreated react app

- npx-create-react-app my-app

# App(initial structure)

- App() is the main component in file app.js
- For more components one folder called component has been created.
- So far 2 components has been created ReadBooks in readbook.js and NotReadBooks in not-read-books.js.
- export default function ReadBooks() {
  return (
  <div>
  <h2>List of books (read)</h2>
  <ol>
  <li>Just JavaScript</li>
  <li>My Little Pony</li>
  </ol>
  </div>
  );
  }
- export default function NotReadBooks() {
  return (
  <div>
  <h2>List of books (not read yet)</h2>
  <ol>
  <li>Power of thinking big</li>
  <li>Rich dad poor dad</li>
  </ol>
  </div>
  );
  }
- Components has been exported 'export default'
- Than the has been imported in main app.js file.
  import ReadBooks from "./components/read-books";
  import NotReadBooks from "./components/not-read-books";
- Used inside main function App()

function App() {
return (

<div className="App">
<h1> Books </h1>
<ReadBooks />
<NotReadBooks />
</div>
);
}

# Problem No 1

- Both components looks identicle this can be one generic component and can be reuse to list books for both purpose
  (ReadBooks in readbook.js and NotReadBooks in not-read-books.js are still in component folder for reference purpose and not deleted)

# Solution

- Created one component called BookList in book-list.js in component folder. Added Data objects in App.js readBookData and notReadBookData and passed as a props into components.

  - export default function BookList({ heading, books}) {
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
  and APP component look like this

- import BookList from "./components/book-list";

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

  refactored:code
  first passed props then used destructuring method and then used spread operator.
  export default App;

# problem 2

This new component have Orderd list if we add 3 book in one list it will automaticaly render option 3 for other list and if other list does not have 3 book then we have not very good looking UI for that section

# Solution

Use array method to list data from book list. .map will do.

- export default function BookList({ heading, books }) {
  const listBooks = books.map((item, index) => <li key={index}>{item}</li>);

return (
<div>
<h2>{heading}</h2>
<ol>{listBooks}</ol>
</div>
);
}

# Next stage we dont want to hardcore data
