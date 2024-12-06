import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, ChangeEvent } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import HeaderSemLink from '../Components/HeaderSemLink';

interface FormData {
  nomeEmpresa: string;
  endereco: string;
  telefone: string;
}

interface Plan {
  name: string;
  price: string;
}

const FormCard: React.FC = () => {
  const location = useLocation();
  const selectedPlanFromState = location.state?.plano;

  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(
    selectedPlanFromState ? { name: selectedPlanFromState, price: location.state?.price } : null
  );

  const [formData, setFormData] = useState<FormData>({
    nomeEmpresa: '',
    endereco: '',
    telefone: ''
  });

  const handlePlanSelect = (planName: string): void => {
    let planPrice: string;

    // Validação dos preços dos planos
    switch (planName) {
      case "Plano Bronze":
        planPrice = "R$ 50"; // Preço para o plano Bronze
        break;
      case "Plano Prata":
        planPrice = "R$ 120"; // Preço para o plano Prata
        break;
      case "Plano Ouro":
        planPrice = "R$ 300"; // Preço para o plano Ouro
        break;
      default:
        planPrice = "0"; // Valor padrão caso o plano não seja reconhecido
        break;
    }

    // Atualiza o estado do plano selecionado com o nome e o preço
    setSelectedPlan({
      name: planName,
      price: planPrice,
    });
  };

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (): void => {
    let phoneNumber = 5511932911121;

    console.log('Selected Plan:', selectedPlan); // This will now log both the name and price correctly

    if (selectedPlan && formData.nomeEmpresa && formData.endereco && formData.telefone) {
      const message = `*Informações da Empresa para o Gmaps Card:*\n
        Nome: ${formData.nomeEmpresa}\n
        Endereço: ${formData.endereco}\n
        Telefone: ${formData.telefone}\n\n
        *Plano Escolhido:*\n
        Nome do Plano: ${selectedPlan.name}\n
        Preço: ${selectedPlan.price}`;  // Ensure price is included here

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
    } else {
      alert("Por favor, preencha todos os dados e escolha um plano.");
    }
  };

  return (
    <>
      <HeaderSemLink />
      <button
        className="mt-5 ml-5 flex items-center justify-center text-white bg-blue-500 w-10 h-10 rounded-2xl hover:bg-blue-800 focus:outline-none transition duration-300"
        onClick={() => window.history.back()}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <div className="md:h-[80vh] flex flex-col justify-center items-center px-5 md:px-20 py-10 gap-5 md:gap-12">
        <div className="w-full md:max-w-3xl bg-gray-900 p-8 rounded-2xl">
          <h2 className="text-3xl font-semibold text-center text-white mb-6">
            Informe os dados de sua Empresa
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="nomeEmpresa" className="block text-sm font-semibold text-white">Nome da Empresa</label>
              <input
                type="text"
                id="nomeEmpresa"
                name="nomeEmpresa"
                value={formData.nomeEmpresa}
                onChange={handleFormChange}
                placeholder="Nome da Empresa"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="endereco" className="block text-sm font-semibold text-white">Endereço</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleFormChange}
                placeholder="Endereço da Empresa"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="telefone" className="block text-sm font-semibold text-white">Telefone</label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleFormChange}
                placeholder="Telefone de Contato da empresa"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="text-center">
              <button type="button" onClick={handleSubmit} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300">
                Continuar
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col md:flex-row md:w-2/3 w-full gap-4 md:gap-10">
          {['Plano Bronze', 'Plano Prata', 'Plano Ouro'].map((planName, index) => {
            const price = index === 0 ? 'R$ 50' : index === 1 ? 'R$ 120' : 'R$ 300';
            
            return (
              <div
                key={planName}
                className={`text-center md:text-start bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 w-full ${selectedPlan?.name === planName ? 'border-4 border-blue-500' : ''}`}
                onClick={() => handlePlanSelect(planName)}
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{planName}</h3>
                <p className="text-3xl font-semibold text-yellow-500 mb-2">{price}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300">
                  {selectedPlan?.name === planName ? 'Selecionado' : 'Comece Agora'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FormCard;
