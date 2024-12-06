import React, { useState, FormEvent } from "react";

const Contato = () => {
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Personalizando a mensagem com emojis
    const whatsappMessage = `
    Eu estou enviando essa mensagem via formulário no site!
    
    *Assunto:* ${subject}
    
    *Mensagem:* 
    ${message}
    `;

    // URL do WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/5511932911121?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Abre a URL do WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white text-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Fale Conosco 💬</h2>
      <p className="text-center mb-4">
        Tem algum problema técnico? 🤔 Quer enviar feedback sobre uma
        funcionalidade beta? 🛠️ Precisa de detalhes sobre o nosso plano de
        negócios? 📊 Nos avise!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-lg font-semibold mb-2">
            Assunto 📩
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold mb-2">
            Sua mensagem 💬
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/2 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Enviar via WhatsApp 📲
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contato;
