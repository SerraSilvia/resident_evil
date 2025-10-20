import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="relative z-20 bg-black/60 text-center py-10" >
        {/* Primer bloque: 4 imágenes, 2x2 */}
        <div className="grid grid-cols-2 gap-5 justify-items-center mb-10 mt-20 pl-20 pr-20">
         <a href="https://game.capcom.com/residentevil/es/renet.html"><img src="/img/footer/footer1.png" alt="footer_img" className="w-75 h-auto scale-[1.5] mb-20" /></a>
         <a href="https://www.residentevil.com/re4/es/"><img src="/img/footer/footer2.png" alt="footer_img" className="w-75 h-auto scale-[1.5] mb-20" /></a>
         <a href="https://www.residentevil.com/village/es/"><img src="/img/footer/footer3.png" alt="footer_img" className="w-75 h-auto scale-[1.5] mb-20" /></a>
         <a href="https://game.capcom.com/residentevil/en/about-portal.html"><img src="/img/footer/footer4.png" alt="footer_img" className="w-75 h-auto scale-[1.5] mb-20" /></a>
        </div>

        {/* Segundo bloque: plataformas */}
        <div className="flex justify-center w-100 h-auto scale-[1.7] mb-20 mt-20">
          <img
            src="/img/footer/plataformas.png"
            alt="plataformas"
            className="w-3/4 max-w-xl h-auto"
          />
        </div>

        {/* Tercer bloque: redes sociales */}
        <div className="flex justify-center">
          <img
            src="/img/footer/redes-sociales.png"
            alt="redes sociales"
            className="w-1/3 max-w-xs h-auto"
          />
        </div>
      </footer>
    );
  }
}

export default Footer;
