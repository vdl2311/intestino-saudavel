import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './components/MainLayout';

export default function Terms() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-32 md:py-48">
        <h1 className="text-6xl md:text-8xl font-serif font-black mb-16 leading-tight">Termos de Uso</h1>
        <div className="prose prose-lg md:prose-xl prose-slate max-w-none">
          <p className="mb-16 italic text-text-muted text-2xl border-l-8 border-brand-red pl-8 py-4 leading-loose">Última atualização: 15 de Maio de 2024</p>
          <p className="mb-12 leading-loose text-xl">Ao acessar o site <a href="https://www.protocolodebama.com.br/" className="hover:underline text-brand-red font-bold">www.protocolodebama.com.br</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
          
          <h2 className="text-4xl font-serif font-black text-black mt-24 mb-10">1. Licença de Uso</h2>
          <p className="mb-12 leading-loose text-xl">É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site do Protocolo de Bama, apenas para visualização transitória pessoal e não comercial.</p>
          
          <h2 className="text-4xl font-serif font-black text-black mt-24 mb-10">2. Isenção de Responsabilidade</h2>
          <div className="space-y-8">
            <p className="mb-0 leading-loose text-xl">Os materiais no site do Protocolo de Bama são fornecidos 'como estão'. Protocolo de Bama não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>
            <p className="mb-0 leading-loose text-xl">As informações contidas neste site são apenas para fins informativos e não substituem o conselho, diagnóstico ou tratamento médico profissional.</p>
          </div>
          
          <h2 className="text-4xl font-serif font-black text-black mt-24 mb-10">3. Limitações</h2>
          <p className="mb-12 leading-loose text-xl">Em nenhum caso o Protocolo de Bama ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Protocolo de Bama.</p>
          
          <h2 className="text-4xl font-serif font-black text-black mt-24 mb-10">4. Precisão dos materiais</h2>
          <p className="mb-12 leading-loose text-xl">Os materiais exibidos no site do Protocolo de Bama podem incluir erros técnicos, tipográficos ou fotográficos. Protocolo de Bama não garante que qualquer material em seu site seja preciso, completo ou atual.</p>
          
          <h2 className="text-4xl font-serif font-black text-black mt-24 mb-10">5. Links</h2>
          <p className="mb-12 leading-loose text-xl">O Protocolo de Bama não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Protocolo de Bama do site.</p>
        </div>
        <div className="mt-32 pt-16 border-t border-gray-100">
          <Link to="/" className="text-brand-red font-bold uppercase tracking-widest text-sm hover:underline">← Voltar para a página inicial</Link>
        </div>
      </div>
    </Layout>
  );
}
