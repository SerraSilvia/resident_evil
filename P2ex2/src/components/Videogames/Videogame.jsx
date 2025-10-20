import React from "react";

class VideoGame extends React.Component {
  render() {
    const { year, image, title, synopsis } = this.props;

    return (
      <div className="relative flex flex-col items-center flex-shrink-0 w-72 mx-6">
        {/* Año */}
        <span className="text-3xl font-bold text-white mb-2">{year}</span>

        {/* Línea vertical hasta la tarjeta (más gruesa) */}
        <div className="w-1 bg-gray-400 h-6 mb-2"></div>

        {/* Imagen + título: tamaño fijo, contenido adaptable */}
        <div className="bg-gray-800/50 shadow-lg p-4 flex mb-2 w-full h-30	">
          <img
            alt={title}
            className="w-[100px] h-[100px] object-cover rounded-lg"
            src={image}
          />
          <div className="ml-4 flex flex-col justify-center flex-1 overflow-hidden ">
            <h3>{title}</h3>
          </div>
        </div>

        {/* Línea vertical hasta la línea horizontal */}
        <div className="relative w-1 bg-gray-400 h-6 flex items-center justify-center">
          {/* Círculo naranja en el cruce */}
          <span className="block w-4 h-4 border-2 border-orange-500 rounded-full bg-transparent absolute -top-2"></span>
        </div>

        {/* Línea vertical debajo del cruce hasta sinopsis */}
        <div className="w-1 bg-gray-400 h-6 mb-2"></div>

        {/* Sinopsis: tamaño fijo, contenido adaptativo */}
        <div className="bg-gray-800/60  shadow-lg p-4 w-full h-30 overflow-hidden">
          <p className="text-gray-300 text-sm text-center break-words overflow-auto">
            {synopsis}
          </p>
        </div>
      </div>
    );
  }
}

export default VideoGame;
