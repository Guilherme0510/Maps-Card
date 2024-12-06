import { images } from "../Assets/assets.ts";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-[80vh] w-full md:px-36 bg-gray-900">
      <div className="text-center justify-center flex flex-col w-full md:w-2/4 text-white">
        <h1 className="text-3xl font-bold mb-4">
          Transforme Avaliações em Visibilidade para o Seu Negócio
        </h1>
        <p className="text-lg">
          Facilitamos o acesso às avaliações no Google Maps com cartões
          personalizados. Aumente sua credibilidade e conquiste novos clientes.
        </p>
        <div className="mt-4 flex justify-center gap-6 flex-row">
          <ScrollLink
            to="sobre"
            smooth={true}
            duration={500}
            className="mt-4 w-40 px-6 py-2 bg-blue-500 text-white rounded hover:bg-white hover:text-black transform hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Saiba Mais
          </ScrollLink>
          <Link
            to="/form-card"
            className="mt-4 w-40 px-6 py-2 bg-white text-black rounded hover:bg-blue-500 hover:text-white transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
          >
            Obter Cartão
          </Link>
        </div>
      </div>
      <div className="mt-5 md:mt-0 w-full md:w-3/4 flex justify-center">
        <img src={images.img_banner} alt="" className="w-4/5" />
      </div>
    </div>
  );
};

export default Banner;
