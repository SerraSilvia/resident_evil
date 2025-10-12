import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav>
          <ul>
            <li>
              <a href="#home">Inicio</a>
              <a href="">Videojuegos</a>
              <a href="">Filmografia</a>
              <a href="">Lectura</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
