import React from "react";

class VideoGame extends React.Component {
  render() {
    const { year, image, title, synopsis } = this.props;

    return (
      <div className="game-card" style={{ marginBottom: "20px" }}>
        <h2> {year}</h2>
        <div>
          <img
            src={image}
            alt={title}
            style={{ width: "200px", height: "auto", marginBottom: "10px" }}
          ></img>
          <h2> {title}</h2>
        </div>
        <p>{synopsis}</p>
        <hr />
      </div>
    );
  }
}

export default VideoGame;
