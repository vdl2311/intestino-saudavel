import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './components/MainLayout';

export default function Contato() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-32 md:py-48">
        <h1 className="text-6xl md:text-8xl font-serif font-black mb-16 leading-tight">Entre em Contato</h1>
        <div className="prose prose-lg md:prose-xl prose-slate max-w-none">
          <p className="mb-16 text-2xl leading-loose text-gray-700">
            Sinta-se à vontade para nos enviar uma mensagem com suas dúvidas, sugestões ou para saber mais sobre o Protocolo de Bama.
          </p>
          
          <div className="bg-gray-50 border border-gray-200 p-12 md:p-16 rounded-xl mb-24 shadow-sm">
            <h2 className="text-3xl font-serif font-bold text-black mt-0 mb-10 leading-tight">Nossos Canais Oficiais</h2>
            
            <div className="space-y-10">
              <div>
                <strong className="block text-brand-red uppercase tracking-widest text-xs mb-3">E-mail:</strong>
                <a href="mailto:suporte@protocolodebama.com.br" className="text-2xl md:text-3xl font-medium text-gray-800 hover:text-brand-red transition-colors">
                  suporte@protocolodebama.com.br
                </a>
              </div>
              
              <div>
                <strong className="block text-brand-red uppercase tracking-widest text-xs mb-3">Horário de Atendimento:</strong>
                <p className="text-xl text-gray-800 m-0 leading-relaxed">Segunda a Sexta, das 09h às 18h (Horário de Brasília)</p>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-black text-black mb-10 leading-tight">Envie-nos uma Mensagem</h2>
          <p className="mb-12 text-xl leading-loose">
            Você também pode preencher o formulário abaixo ou usar nosso e-mail direto para entrar em contato com a equipe de suporte.
          </p>
          
          <form className="grid grid-cols-1 gap-10 mt-12 bg-white p-10 md:p-16 border border-gray-100 shadow-xl rounded-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-gray-600">Nome Completo</label>
              <input type="text" id="name" className="w-full px-6 py-4 border-2 border-gray-100 rounded-sm focus:ring-brand-red focus:border-brand-red outline-none transition-all text-lg" placeholder="Seu nome" required />
            </div>
            
            <div className="space-y-4">
              <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-gray-600">E-mail</label>
              <input type="email" id="email" className="w-full px-6 py-4 border-2 border-gray-100 rounded-sm focus:ring-brand-red focus:border-brand-red outline-none transition-all text-lg" placeholder="Seu e-mail" required />
            </div>
            
            <div className="space-y-4">
              <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-gray-600">Mensagem</label>
              <textarea id="message" rows={6} className="w-full px-6 py-4 border-2 border-gray-100 rounded-sm focus:ring-brand-red focus:border-brand-red outline-none transition-all resize-none text-lg" placeholder="Como podemos ajudar?" required></textarea>
            </div>
            
            <button type="submit" className="bg-brand-red text-white text-sm font-bold tracking-widest uppercase px-14 py-6 rounded-sm hover:bg-black transition-all inline-block w-full md:w-auto text-center shadow-lg">
              Enviar Mensagem
            </button>
          </form>
        </div>
        
        <div className="mt-32 pt-16 border-t border-gray-100">
          <Link to="/" className="text-brand-red font-bold uppercase tracking-widest text-sm hover:underline">← Voltar para a página inicial</Link>
        </div>
      </div>
    </Layout>
  );
}
