import React from "react";
import Header from "./components/Header.jsx";
import gamesData from "./data/games.json";
import VideoGame from "./components/Videogames/Videogame.jsx";
import booksData  from "./data/books.json";
import Book from "./components/Reading/Book.jsx";

import Movie from "./data/movies.json";

function App() {
  return (
    <>
      <Header />

      <div>
        <h1>VIDEOJUEGOS</h1>
        {gamesData.games.map((game, index) => (
          <VideoGame
            key={index}
            year={game.year}
            title={game.title}
            image={game.image}
            synopsis={game.synopsis}
          />
        ))}
      </div>

         <div>
        <h1>LECTURA</h1>
        {booksData.books.map((book, index) => (
          <Book
            key={index}
            image={book.image}
            title={book.title}
            synopsis={book.synopsis}
          />
        ))}
      </div>

    </>
  );
}


export default App;
