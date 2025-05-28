
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-rede-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/786ea5c3-8a31-4048-9213-c0410772ff11.png" 
              alt="Rede Consig" 
              className="h-10 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm">
              Especialistas em empréstimo consignado há mais de 15 anos. 
              Oferecemos as melhores condições do mercado com total segurança.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-rede-orange font-bold mb-4">Produtos</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-rede-orange transition-colors">Empréstimo Consignado</a></li>
              <li><a href="#" className="hover:text-rede-orange transition-colors">Empréstimo Pessoal</a></li>
              <li><a href="#" className="hover:text-rede-orange transition-colors">Antecipação FGTS</a></li>
              <li><a href="#" className="hover:text-rede-orange transition-colors">Refinanciamento</a></li>
              <li><a href="#" className="hover:text-rede-orange transition-colors">Cartão Consignado</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-rede-orange font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/privacidade.html" className="hover:text-rede-orange transition-colors">Política de Privacidade</a></li>
              <li><a href="/termosdeuso.html" className="hover:text-rede-orange transition-colors">Termos de Uso</a></li>
              <li><a href="/lgpd.html" className="hover:text-rede-orange transition-colors">LGPD</a></li>
              <li><a href="/ouvidoria.html" className="hover:text-rede-orange transition-colors">Ouvidoria</a></li>
              <li><a href="/trabalheconosco.html" className="hover:text-rede-orange transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-rede-orange font-bold mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>(11) 4200-8888</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>contato@redeconsig.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>💬</span>
                <a href="https://wa.me/5511988887777" className="hover:text-rede-orange transition-colors">
                  WhatsApp: (11) 98888-7777
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>São Paulo - SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Rede Consig. Todos os direitos reservados.
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rede-orange transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-rede-orange transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.337-1.26C3.542 14.27 3.542 12.027 3.542 12.027s0-2.243 1.57-3.701c.889-.77 2.04-1.26 3.337-1.26 1.297 0 2.448.49 3.337 1.26 1.57 1.458 1.57 3.701 1.57 3.701s0 2.243-1.57 3.701c-.889.77-2.04 1.26-3.337 1.26z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-rede-orange transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Security Badge */}
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <span>🔒</span>
              <span>Conexão Segura SSL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
