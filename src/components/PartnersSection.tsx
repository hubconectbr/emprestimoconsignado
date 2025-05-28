
import React from 'react';

const PartnersSection = () => {
  const partners = [
    {
      name: "Banco PAN",
      logo: "/lovable-uploads/a4b8dff4-a869-4a4d-ab9d-1d2020d61cfc.png",
      description: "Parceiro oficial para empréstimos consignados"
    },
    {
      name: "Olé Consignado", 
      logo: "/lovable-uploads/aafa456f-8433-4427-9376-1089d25b9ca1.png",
      description: "Especialista em crédito consignado"
    },
    {
      name: "Banco Industrial do Brasil",
      logo: "/lovable-uploads/32112861-fd05-4913-826a-277f3d5f9603.png", 
      description: "Tradição e confiabilidade"
    },
    {
      name: "Banco do Brasil",
      logo: "/lovable-uploads/5d5de5f7-7b6a-4801-a136-46739efdc996.png",
      description: "O banco dos brasileiros"
    }
  ];

  return (
    <section className="py-16 bg-rede-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-rede-dark mb-4">
            Nossos <span className="text-rede-orange">Parceiros Bancários</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhamos com os principais bancos do país para oferecer as melhores condições
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-16 object-contain mx-auto mb-4"
                />
                <h3 className="font-bold text-rede-dark text-sm mb-1">{partner.name}</h3>
                <p className="text-xs text-gray-600">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 inline-block">
            <h3 className="text-xl font-bold mb-2">🏦 Convênios Ativos</h3>
            <p className="text-green-100">Parcerias que garantem as melhores taxas para você</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
