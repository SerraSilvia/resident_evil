import React from "react";

class Book extends React.Component {
  render() {
    const { title, year, image, synopsis } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <p>{year}</p>
        <img src={image} alt={title} width="200" />
        <p>{synopsis}</p>
        <hr />
      </div>
    );
  }
}

export default Book;
