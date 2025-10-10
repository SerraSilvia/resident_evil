import React from "react";
import VideoGame from "./components/Videogames/Videogame.jsx";
import data from "./data/videogames.json";
import Books from "./components/Reading/Book.jsx";
import data from "./data/books.json";

function App() {
  return (
    <div>
      <h1>Juegos de Resident Evil</h1>
      {gamesData.games.map((game, index) => (
        <VideoGame
          key={index}
          title={game.title}
          year={game.year}
          image={game.image}
          synopsis={game.synopsis}
        />
      ))}

      <h1>Libros de Resident Evil</h1>
      {booksData.books.map((book, index) => (
        <Libro
          key={index}
          title={book.title}
          year={book.year}
          image={book.image}
          synopsis={book.synopsis}
        />
      ))}
    </div>
  );
}

export default App;
