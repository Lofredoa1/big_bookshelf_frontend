import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom"
import './App.css';
// import components
import Onboarding from "./pages/Onboarding";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {

  const url = "https://big-bookshelf.herokuapp.com"

  const [books, setBooks] = useState([]);

  const emptyBook = {
    id: "",
    title: "",
    author: "",
    genre: "",
    description: "",
    image_link: "",
    favorite: true
  }

  // state to track selected book
  const [selectedBook, setSelectedBook] = useState(emptyBook)

  // updates the selectedBook state to track active book
  const selectBook = (book) => {
    setSelectedBook(book)
  };

  // gets list of all books
  const getBooks = () => {
    fetch(url + "/book")
    .then((response) => response.json())
    .then((data) => setBooks(data.data))
  }

  useEffect(() => {getBooks()}, []);

  // Creates new book
  const handleCreate = (newBook) => {
    fetch(url + "/book", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBook),
    }).then(() => {
      getBooks();
    })
  };

  // Updates existing book
  const handleUpdate = (book) => {
    fetch(url + "/book/" + book._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book),
    }).then(() => {
      getBooks();
    })
  };

  // Deletes a book
  const deleteBook = (book) => {
    fetch(url + "/book/" + book._id, {
      method: "delete"
    }).then(() => {
      getBooks();
    })
  };



  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Onboarding/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/home" render={(rp) => 
          <div>
            <Navbar/>
            <Home {...rp} books={books[0]}/>
          </div>
     
        }>
         
        </Route>
      </Switch>
    </div>
  );
}

export default App;
