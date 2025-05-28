
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-rede-dark">
              O que é <span className="text-rede-orange">Empréstimo Consignado?</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              O empréstimo consignado é uma modalidade de crédito onde as <strong>parcelas são descontadas diretamente do seu benefício</strong> 
              ou salário, oferecendo as <strong className="text-rede-orange">menores taxas de juros do mercado</strong>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              É a opção mais <strong>segura e econômica</strong> para aposentados, pensionistas do INSS e servidores públicos 
              que precisam de crédito com facilidade e agilidade.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="text-center p-4 bg-rede-gray rounded-lg">
                <div className="text-3xl mb-2">📅</div>
                <h3 className="font-bold text-rede-dark mb-1">Até 96x</h3>
                <p className="text-sm text-gray-600">para pagar</p>
              </div>
              
              <div className="text-center p-4 bg-rede-gray rounded-lg">
                <div className="text-3xl mb-2">📉</div>
                <h3 className="font-bold text-rede-dark mb-1">Juros Baixos</h3>
                <p className="text-sm text-gray-600">melhores taxas</p>
              </div>
              
              <div className="text-center p-4 bg-rede-gray rounded-lg">
                <div className="text-3xl mb-2">🏦</div>
                <h3 className="font-bold text-rede-dark mb-1">Pagamento</h3>
                <p className="text-sm text-gray-600">via folha</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-rede-orange rounded-2xl p-8 text-white">
              <img 
                src="/lovable-uploads/7ea81414-be51-4681-83f4-0aa36106e9c5.png" 
                alt="Casal sorrindo - Empréstimo Consignado" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-2">Realize seus sonhos!</h3>
                <p className="text-blue-100">Com segurança e as melhores condições do mercado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
