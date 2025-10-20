import React from "react";

class VideoGame extends React.Component {
  render() {
    const { year, image, title, synopsis } = this.props;

    return (
      <div className="relative flex flex-col items-center flex-shrink-0 w-72 mx-6">
        {/* Año grande arriba */}
        <span className="text-3xl font-bold text-white mb-2">{year}</span>

        {/* Línea vertical */}
        <div className="w-px bg-gray-400 h-6 mb-2"></div>

        {/* Tarjeta */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col w-full z-10">
          {/* Imagen + título en fila */}
          <div className="flex mb-2">
            <img
              src={image}
              alt={title}
              className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
            />
            <div className="ml-4 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
          </div>

          {/* Descripción debajo */}
          <p className="text-gray-300 text-sm break-words w-full min-w-0">{synopsis}</p>
        </div>
      </div>
    );
  }
}

export default VideoGame;
