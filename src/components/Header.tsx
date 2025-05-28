
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-rede-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/786ea5c3-8a31-4048-9213-c0410772ff11.png" 
              alt="Rede Consig" 
              className="h-8 md:h-10"
            />
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <span className="text-rede-dark font-medium">📞 (11) 4200-8888</span>
            <span className="text-rede-dark font-medium">📧 contato@redeconsig.com.br</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
