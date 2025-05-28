
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "Empréstimo Consignado",
      description: "Desconto direto na folha de pagamento com as menores taxas",
      icon: "💰",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Empréstimo Pessoal",
      description: "Crédito pessoal com condições especiais para você",
      icon: "👤", 
      color: "from-rede-orange to-orange-600"
    },
    {
      title: "Antecipação do FGTS",
      description: "Antecipe seu FGTS de forma rápida e segura",
      icon: "🏦",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Refinanciamento",
      description: "Quite suas dívidas e reduza suas parcelas",
      icon: "🔄",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Cartão Consignado",
      description: "Cartão de crédito com desconto em folha",
      icon: "💳",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Saque Complementar",
      description: "Acesso a mais crédito quando precisar",
      icon: "💵",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-16 bg-rede-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-rede-dark mb-4">
            Nossos <span className="text-rede-orange">Produtos Financeiros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos as melhores soluções financeiras para aposentados, pensionistas e servidores públicos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
              <CardHeader className={`bg-gradient-to-r ${service.color} text-white pb-8`}>
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 bg-white">
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
