import { Link } from "react-scroll";
import { images } from "../Assets/assets";

const Sobre = () => {
  return (
    <section className="w-full py-16 px-6 lg:px-20" id="sobre">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
        <p className="text-lg text-gray-600">
          Ajudamos empresas a se destacarem no Google Maps com cartões personalizados para receber avaliações e melhorar a visibilidade.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:px-36 pt-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <img
              src={images.sobre}
              alt="Team collaboration"
              className="rounded-xl shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2 text-gray-700">
          <p className="mb-6">
            Nossa missão é simplificar o processo de receber avaliações no Google Maps, oferecendo cartões personalizados para seus clientes. Esses cartões tornam mais fácil e rápido para os consumidores avaliarem sua empresa, fortalecendo sua presença digital.
          </p>
          <p className="mb-6">
            Com nossos cartões, você pode aumentar sua credibilidade e atrair novos clientes. Oferecemos soluções práticas e acessíveis para que sua empresa se destaque no mercado e alcance mais pessoas.
          </p>
          <Link to="contato"  className="cursor-pointer px-6 py-3 bg-white border border-black rounded-md shadow hover:bg-gray-900 hover:text-white hover:border-white transition">
            Entre em Contato
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
