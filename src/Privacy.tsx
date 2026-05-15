import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './components/MainLayout';

export default function Privacy() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-32 md:py-48">
        <h1 className="text-6xl md:text-8xl font-serif font-black mb-16 leading-tight">Política de Privacidade</h1>
        <div className="prose prose-lg md:prose-xl prose-slate max-w-none">
          <p className="mb-16 italic text-text-muted text-2xl border-l-8 border-brand-red pl-8 py-4 leading-loose">Última atualização: 15 de Maio de 2024</p>
          <p className="mb-12 leading-loose text-xl">Sua privacidade é importante para nós. É política do Protocolo de Bama respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://www.protocolodebama.com.br/" className="hover:underline text-brand-red font-bold">www.protocolodebama.com.br</a>, e outros sites que possuímos e operamos.</p>
          
          <h2 className="text-4xl font-serif font-black text-black mt-24 mb-10">1. Informações que coletamos</h2>
          <p className="mb-12 leading-loose text-xl">Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
          
          <h2 className="text-4xl font-serif font-black text-black mt-24 mb-10">2. Uso das informações</h2>
          <p className="mb-12 leading-loose text-xl">Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
          
          <h2 className="text-4xl font-serif font-black text-black mt-24 mb-10">3. Cookies e Publicidade (Google AdSense)</h2>
          <p className="mb-12 leading-loose text-xl">Nós usamos cookies para coletar informações sobre sua atividade em nosso site, otimizando sua experiência. Além disso, o Google, como fornecedor de terceiros, utiliza cookies para exibir anúncios no nosso site. Com o uso do cookie de publicidade, o Google e seus parceiros podem veicular anúncios para nossos usuários com base nas visitas feitas ao nosso site e/ou a outros sites na Internet. Os usuários podem desativar a publicidade personalizada acessando as Configurações de anúncios do Google.</p>
          
          <h2 className="text-4xl font-serif font-black text-black mt-24 mb-10">4. Links para sites de terceiros</h2>
          <p className="mb-12 leading-loose text-xl">Nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
          
          <h2 className="text-4xl font-serif font-black text-black mt-24 mb-10">5. Consentimento</h2>
          <p className="mb-12 leading-loose text-xl">O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato pelo e-mail: <span className="text-brand-red font-bold">suporte@protocolodebama.com.br</span></p>
        </div>
        <div className="mt-32 pt-16 border-t border-gray-100">
          <Link to="/" className="text-brand-red font-bold uppercase tracking-widest text-sm hover:underline">← Voltar para a página inicial</Link>
        </div>
      </div>
    </Layout>
  );
}
