import React from "react";
import portada from "./assets/portada.png";

import Header from "./components/Header.jsx";
import Background from "./components/Background.jsx";
import Snowstorm from "./components/Snowstorm.jsx";
import backgroundAudio from "./backgroundAudio.mp3";
import gamesData from "./data/games.json";
import VideoGame from "./components/Videogames/Videogame.jsx";
import booksData from "./data/books.json";
import Book from "./components/Reading/Book.jsx";

import Movie from "./data/movies.json";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <Snowstorm />
      <Header />
      <audio src={backgroundAudio} autoPlay loop style={{ display: "none" }} />

      <section className="flex flex-col justify-end items-center h-screen text-center relative z-20">
        <img
          src={portada}
          alt="Portada"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-2/3 max-w-lg rounded-lg shadow-lg animate-fade-in"
        />
      </section>

      {/* Videojuegos */}

      <section className="relative z-20 overflow-x-auto py-6 mx-12">
        <h1>VIDEOJUEGOS</h1>

        {/* Contenedor scroll horizontal */}
        <div className="relative flex space-x-8 pb-16 max-w-[95%] mx-auto">
          {/* Línea horizontal de fondo */}
          <div
            className="absolute top-60 left-0 h-0.5 bg-gray-400"
            style={{ width: `${gamesData.games.length * (288 + 48)}px` }}
          ></div>

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
      {/* Libros */}

<section className="p-6 relative z-20">
  <h1>LIBROS</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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



      {/* Películas */}

      <section className="relative z-20 overflow-x-auto py-6 mx-12">
        <h1>PELICULAS</h1>

        {/* Contenedor scroll horizontal */}
        <div className="relative flex space-x-8 pb-16 max-w-[95%] mx-auto">
          {/* Línea horizontal de fondo */}
          <div
            className="absolute top-60 left-0 h-0.5 bg-gray-400"
            style={{ width: `${gamesData.games.length * (288 + 48)}px` }}
          ></div>

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

    </div>
  );
}

export default App;
