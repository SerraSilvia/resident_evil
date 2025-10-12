import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
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
      </div>
    );
  }
}

export default Header;
