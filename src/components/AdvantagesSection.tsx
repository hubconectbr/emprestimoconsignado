
import React from 'react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "✅",
      title: "Sem consulta ao SPC/Serasa",
      description: "Seu nome sujo não é problema aqui"
    },
    {
      icon: "⚡",
      title: "Crédito em até 24h",
      description: "Aprovação rápida após análise"
    },
    {
      icon: "📱",
      title: "Atendimento completo",
      description: "Online e presencial para sua comodidade"
    },
    {
      icon: "🏦",
      title: "Parcerias com grandes bancos",
      description: "PAN, Olé, BIB e Banco do Brasil"
    },
    {
      icon: "🔒",
      title: "100% Seguro",
      description: "Plataforma protegida e dados criptografados"
    },
    {
      icon: "💬",
      title: "Suporte especializado",
      description: "Equipe preparada para te atender"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-rede-dark mb-4">
            Por que escolher a <span className="text-rede-orange">Rede Consig?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos especialistas em empréstimo consignado com anos de experiência no mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-rede-orange to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                <span className="text-3xl">{advantage.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-rede-dark mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-rede-orange text-white rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-2">Mais de 15 anos no mercado!</h3>
            <p className="text-blue-100">Confiança e credibilidade em cada operação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
