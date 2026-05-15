import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './components/MainLayout';

export default function Contato() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-serif font-black mb-12">Entre em Contato</h1>
        <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:mt-16 prose-headings:mb-8 prose-p:mb-8 leading-loose">
          <p className="mb-10 text-xl">
            Sinta-se à vontade para nos enviar uma mensagem com suas dúvidas, sugestões ou para saber mais sobre o Protocolo de Bama.
          </p>
          
          <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-serif font-bold text-black mt-0 mb-6">Nossos Canais Oficiais</h2>
            
            <div className="space-y-6">
              <div>
                <strong className="block text-brand-red uppercase tracking-widest text-xs mb-1">E-mail:</strong>
                <a href="mailto:suporte@protocolodebama.com.br" className="text-xl font-medium text-gray-800 hover:text-brand-red transition-colors">
                  suporte@protocolodebama.com.br
                </a>
              </div>
              
              <div>
                <strong className="block text-brand-red uppercase tracking-widest text-xs mb-1">Horário de Atendimento:</strong>
                <p className="text-gray-800 m-0">Segunda a Sexta, das 09h às 18h (Horário de Brasília)</p>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-serif font-black text-black">Envie-nos uma Mensagem</h2>
          <p>
            Você também pode preencher o formulário abaixo ou usar nosso e-mail direto para entrar em contato com a equipe de suporte.
          </p>
          
          <form className="space-y-6 mt-8" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
              <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="Seu nome" required />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
              <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="Seu e-mail" required />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
              <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-brand-red focus:border-brand-red outline-none transition-all resize-none" placeholder="Como podemos ajudar?" required></textarea>
            </div>
            
            <button type="submit" className="bg-brand-red text-white text-sm font-semibold tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-black transition-all inline-block w-full md:w-auto text-center">
              Enviar Mensagem
            </button>
          </form>
        </div>
        
        <div className="mt-20 pt-10 border-t border-gray-100">
          <Link to="/" className="text-brand-red font-bold uppercase tracking-widest text-xs hover:underline">← Voltar para a página inicial</Link>
        </div>
      </div>
    </Layout>
  );
}
