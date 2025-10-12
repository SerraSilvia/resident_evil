import React from "react";
import Header from "./components/Header.jsx";
import Background from "./components/Background.jsx";
import Snowstorm from "./components/Snowstorm.jsx";
import gamesData from "./data/games.json";
import VideoGame from "./components/Videogames/Videogame.jsx";
import booksData from "./data/books.json";
import Book from "./components/Reading/Book.jsx";

import Movie from "./data/movies.json";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Background /> {/* z-0 */}
      <Snowstorm /> {/* z-10 */}
      <Header /> {/* z-20 */}
      {/* secciones z-20 */}
      <section className="p-6 relative z-20">
        <h1 className="text-3xl text-center mb-6">VIDEOJUEGOS</h1>
        <div className="flex flex-wrap justify-center">
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
      </section>
      <section className="p-6 relative z-20">
        <h1 className="text-3xl text-center mb-6">LECTURA</h1>
        <div className="flex flex-wrap justify-center">
          {booksData.books.map((book, index) => (
            <Book
              key={index}
              image={book.image}
              title={book.title}
              synopsis={book.synopsis}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
