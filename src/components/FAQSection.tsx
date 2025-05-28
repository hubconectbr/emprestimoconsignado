
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona o empréstimo consignado?",
      answer: "O empréstimo consignado é descontado diretamente do seu benefício ou salário. As parcelas são automaticamente deduzidas, garantindo maior segurança para o banco e menores taxas de juros para você."
    },
    {
      question: "Quem pode contratar um empréstimo consignado?",
      answer: "Aposentados e pensionistas do INSS, servidores públicos federais, estaduais e municipais, além de funcionários de empresas privadas que possuem convênio."
    },
    {
      question: "Qual o limite de parcelas?",
      answer: "Para aposentados e pensionistas do INSS, o limite é de 84 parcelas. Para servidores públicos, pode chegar até 96 parcelas, dependendo do órgão."
    },
    {
      question: "E se eu estiver negativado?",
      answer: "Uma das principais vantagens do consignado é que não há consulta ao SPC/Serasa. Mesmo com o nome sujo, você pode ser aprovado."
    },
    {
      question: "Posso fazer mais de um contrato?",
      answer: "Sim, desde que o valor total das parcelas não ultrapasse 35% da sua renda líquida (margem consignável)."
    },
    {
      question: "Quanto tempo leva para aprovação?",
      answer: "Após envio da documentação completa, a aprovação pode ocorrer em até 24 horas úteis."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-rede-dark mb-4">
            Perguntas <span className="text-rede-orange">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas principais dúvidas sobre empréstimo consignado
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-rede-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-rede-dark hover:text-rede-orange">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
          <a 
            href="https://wa.me/5511988887777" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-rede-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-rede-orange/90 transition-colors"
          >
            <span>💬</span>
            <span>Fale conosco no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
