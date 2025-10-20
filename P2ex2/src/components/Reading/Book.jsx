import React from "react";

class Book extends React.Component {
  render() {
    const { image, title, synopsis } = this.props;

    return (
      <div className="bg-gray-800/50 shadow-lg p-4 rounded-lg h-full flex flex-col">
        {/* Imagen + título */}
        <div className="flex items-center mb-4">
          <img
            alt={title}
            className="w-[80px] h-[80px] object-cover rounded-lg"
            src={image}
          />
          <h3 className="ml-4">{title}</h3>
        </div>

        {/* Sinopsis */}
        <p className="text-gray-300 text-sm text-justify break-words">
          {synopsis}
        </p>
      </div>
    );
  }
}

export default Book;
