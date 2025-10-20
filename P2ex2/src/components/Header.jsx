import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav>
          <a href="#home">INICIO</a>
          <a href="#videojuegos">VIDEOJUEGOS</a>
          <a href="#lectura">LIBROS</a>
          <a href="#filmografia">PELICULAS</a>
        </nav>
      </header>
    );
  }
}

export default Header;
