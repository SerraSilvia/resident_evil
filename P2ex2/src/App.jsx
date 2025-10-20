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

      <section className="relative z-20 overflow-x-auto whitespace-nowrap py-6">
        {/* Línea horizontal */}
        <div className="absolute top-14 left-0 w-full h-px bg-gray-400"></div>

        {/* Contenedor scroll horizontal */}
        <div className="flex space-x-8 pb-8 relative z-10">
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
