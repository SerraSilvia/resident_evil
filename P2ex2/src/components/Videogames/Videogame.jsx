import React from "react";

class VideoJuego extends React.Component {
  render() {
    const { title, saga, year } = this.props;
    return (
      <div>
        <h2>🎮 {title}</h2>
        <p>Saga: {saga}</p>
        <p>Año de lanzamiento: {year}</p>
        <hr />
      </div>
    );
  }
}

export default VideoGame;
