import React from "react";

class Book extends React.Component {
  render() {
    const { image, title, synopsis } = this.props;

    return (
      <div>
        <div>
          <h2>{title}</h2>
          <img src={image} alt={title} style={{ width: "150px", height: "auto", marginBottom: "10px" }} />
        </div>
        <p>{synopsis}</p>
        <hr />
      </div>
    );
  }
}

export default Book;
