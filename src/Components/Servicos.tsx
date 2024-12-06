import { Link } from "react-router-dom";

const Servicos = () => {
  return (
    <div className="bg-gray-900 text-white py-16 md:px-36 px-5">
      <h2 className="text-center text-3xl font-semibold mb-8">
        Planos para o Seu Negócio
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="bg-gray-800 p-8 rounded-lg w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Plano Bronze</h3>
          <p className="text-lg mb-4">
            Ideal para pequenos negócios e projetos iniciais.
          </p>
          <p className="text-3xl font-semibold mb-4">R$ 50</p>
          <ul className="mb-6">
            <li className="mb-2">✔ Configuração personalizada</li>
            <li className="mb-2">✔ Suporte básico</li>
            <li className="mb-2">✔ 1 Gmaps Card</li>
          </ul>
          <button className="w-full bg-blue-500 py-2 text-white rounded hover:bg-blue-600">
            <Link to="/form-card" state={{ plano: "Plano Bronze", price: 'R$ 50' }}>
              Comece Agora
            </Link>
          </button>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Plano Prata</h3>
          <p className="text-lg mb-4">
            Ideal para equipes maiores e com mais funcionalidades.
          </p>
          <p className="text-3xl font-semibold mb-4">R$ 120</p>
          <ul className="mb-6">
            <li className="mb-2">✔ Configuração personalizada</li>
            <li className="mb-2">✔ Suporte premium</li>
            <li className="mb-2">✔ 3 Gmaps Card</li>
          </ul>
          <button className="w-full bg-blue-500 py-2 text-white rounded hover:bg-blue-600">
            <Link to="/form-card" state={{ plano: "Plano Prata", price: 'R$ 120' }}>
              Comece Agora
            </Link>
          </button>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Plano Ouro</h3>
          <p className="text-lg mb-4">
            Para grandes equipes e necessidades avançadas.
          </p>
          <p className="text-3xl font-semibold mb-4">R$ 300</p>
          <ul className="mb-6">
            <li className="mb-2">✔ Configuração personalizada</li>
            <li className="mb-2">✔ Suporte 24/7</li>
            <li className="mb-2">✔ 10 Gmaps Card</li>
          </ul>
          <button className="w-full bg-blue-500 py-2 text-white rounded hover:bg-blue-600">
            <Link to="/form-card" state={{ plano: "Plano Ouro", price: 'R$ 300' }}>
              Comece Agora
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
