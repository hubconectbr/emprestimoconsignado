
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    phone: '',
    cep: '',
    email: '',
    amount: '',
    agreement: '',
    lgpd: false
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.lgpd) {
      toast({
        title: "Erro",
        description: "É necessário aceitar os termos de privacidade",
        variant: "destructive",
      });
      return;
    }
    
    console.log('Form submitted:', formData);
    toast({
      title: "Sucesso!",
      description: "Entraremos em contato em breve!",
    });
  };

  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const formatCEP = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  };

  return (
    <section className="relative min-h-[80vh] gradient-bg overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              EMPRÉSTIMO CONSIGNADO 
              <span className="block text-yellow-300">SEM SAIR DE CASA</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light">
              Para Aposentados, Pensionistas e Servidores Públicos com as <strong>melhores taxas do mercado</strong>
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <span>⚡</span>
                <span>Crédito em até 24h</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <span>🔒</span>
                <span>Sem consulta SPC/Serasa</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <span>💰</span>
                <span>Até 96x para pagar</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-scale-in">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-rede-dark mb-2">
                SOLICITE SEU EMPRÉSTIMO
              </h2>
              <p className="text-gray-600">Preencha os dados e receba nossa ligação</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nome Completo *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Digite seu nome completo"
                  required
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cpf">CPF *</Label>
                  <Input
                    id="cpf"
                    value={formData.cpf}
                    onChange={(e) => setFormData({...formData, cpf: formatCPF(e.target.value)})}
                    placeholder="000.000.000-00"
                    maxLength={14}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: formatPhone(e.target.value)})}
                    placeholder="(11) 99999-9999"
                    maxLength={15}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cep">CEP *</Label>
                  <Input
                    id="cep"
                    value={formData.cep}
                    onChange={(e) => setFormData({...formData, cep: formatCEP(e.target.value)})}
                    placeholder="00000-000"
                    maxLength={9}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="seu@email.com"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="amount">Valor Desejado *</Label>
                <Input
                  id="amount"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  placeholder="R$ 10.000,00"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="agreement">Convênio *</Label>
                <Select onValueChange={(value) => setFormData({...formData, agreement: value})}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecione seu convênio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inss">INSS - Aposentados/Pensionistas</SelectItem>
                    <SelectItem value="federal">Servidor Público Federal</SelectItem>
                    <SelectItem value="estadual">Servidor Público Estadual</SelectItem>
                    <SelectItem value="municipal">Servidor Público Municipal</SelectItem>
                    <SelectItem value="militar">Forças Armadas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox
                  id="lgpd"
                  checked={formData.lgpd}
                  onCheckedChange={(checked) => setFormData({...formData, lgpd: checked as boolean})}
                />
                <Label htmlFor="lgpd" className="text-xs text-gray-600 leading-4">
                  Aceito receber contato da Rede Consig e concordo com a{' '}
                  <a href="#" className="text-rede-orange underline">Política de Privacidade</a>
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-rede-orange hover:bg-rede-orange/90 text-white font-bold py-4 text-lg rounded-lg"
              >
                ME LIGUE AGORA!
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
