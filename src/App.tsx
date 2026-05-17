import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Layout, AdSenseDisclaimer } from './components/MainLayout';
import Privacy from './Privacy';
import Terms from './Terms';
import Contato from './Contato';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';

// --- Home Page ---
function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-black py-40 md:py-64 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1546587348-d12660c30c50?auto=format&fit=crop&q=80&w=2000" alt="Paisagem serena nas montanhas" className="w-full h-full object-cover" />
        </div>
        <header className="max-w-4xl mx-auto relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-white font-semibold tracking-[0.2em] uppercase text-sm mb-10"
          >
            Longevidade Sistêmica
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-serif font-black text-white leading-[1.1] mb-12"
          >
            O Protocolo de Bama
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl text-gray-200 leading-loose mb-20 max-w-2xl mx-auto"
          >
            Descubra os segredos biológicos da vila centenária mais famosa do mundo em um método prático e moderno para restaurar sua vitalidade.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/sobre" className="bg-brand-red text-white text-sm font-semibold tracking-widest uppercase px-14 py-6 rounded-sm hover:bg-white hover:text-black transition-all inline-block shadow-2xl">
              EXPLORAR O MÉTODO
            </Link>
          </motion.div>
        </header>
      </section>

      {/* Pillars Grid */}
      <section className="py-48 px-4 bg-white" id="pilares">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { title: "Alimentação", color: "bg-green-50", text: "text-green-900", icon: "🥗", desc: "A dieta anti-inflamatória e o poder dos nutrientes ancestrais.", path: "/alimentacao" },
              { title: "Movimento", color: "bg-blue-50", text: "text-blue-900", icon: "🏃‍♀️", desc: "Mobilidade e exercícios funcionais para longevidade articular.", path: "/movimento" },
              { title: "Mente", color: "bg-purple-50", text: "text-purple-900", icon: "🧘‍♀️", desc: "Gestão do estresse e blindagem contra o cortisol elevado.", path: "/mente" },
              { title: "Sono", color: "bg-orange-50", text: "text-orange-900", icon: "🌙", desc: "Higiene do sono para reparo profundo e limpeza celular.", path: "/sono" },
            ].map((pillar, i) => (
              <Link 
                key={i} 
                to={pillar.path}
                className={`p-12 ${pillar.color} rounded-sm transition-all group hover:shadow-xl`}
              >
                <div className="text-5xl mb-8">{pillar.icon}</div>
                <h3 className={`text-3xl font-serif font-bold mb-6 ${pillar.text}`}>{pillar.title}</h3>
                <p className="text-lg text-text-muted mb-10 leading-loose">{pillar.desc}</p>
                <div className="font-semibold text-xs uppercase tracking-widest border-b-2 border-black inline-block pb-1">
                  Ler Guia Completo
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-48 px-4 bg-brand-bg" aria-labelledby="featured-articles-title">
        <div className="max-w-7xl mx-auto">
          <h2 id="featured-articles-title" className="text-6xl font-serif font-black mb-32 text-center">Artigos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { cat: "Alimentação", title: "Jejum Intermitente e Autofagia: O Ritual de Limpeza Celular", path: "/alimentacao/jejum-intermitente-e-autofagia-reforma-celular", img: "/jejum-intermitente.png" },
              { cat: "Movimento", title: "Exercícios de 15 Minutos para Quem Trabalha Sentado", path: "/movimento/exercicios-de-15-minutos-trabalha-sentado", img: "/mulher-movimento.png" },
              { cat: "Sono", title: "Por Que Você Acorda às 3 da Manhã e Como Evitar Isso com Bama", path: "/sono/por-que-voce-acorda-as-3-da-manha", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800" },
            ].map((art, idx) => (
              <article key={idx}>
                <Link to={art.path} className="group block">
                  <div className="aspect-[3/2] bg-gray-200 mb-6 overflow-hidden border border-gray-100 rounded-sm">
                     <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <span className="text-brand-red font-bold text-xs uppercase tracking-widest">{art.cat}</span>
                  <h3 className="text-2xl font-serif font-bold mt-2 leading-tight group-hover:underline">
                    {art.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

// --- About Page ---
function AboutPage() {
  return (
    <Layout>
      <section className="py-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-brand-red font-bold uppercase tracking-widest text-sm mb-6 block"
            >
              Nossa História & Missão
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-serif font-black text-black leading-tight"
            >
              Sobre o Protocolo de Bama
            </motion.h1>
          </div>
          
          {/* Main Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[21/9] w-full overflow-hidden mb-40 shadow-2xl rounded-sm"
          >
            <img src="/casal-idosos-caminhando.png" alt="Casal de idosos saudáveis caminhando no parque" className="w-full h-full object-cover" />
          </motion.div>

          {/* Intro Quote */}
          <div className="max-w-4xl mx-auto mb-40 px-6">
            <p className="text-3xl md:text-5xl text-gray-800 italic border-l-8 border-brand-red pl-12 py-8 leading-relaxed font-serif">
              "Não buscamos apenas adicionar anos à vida, mas vida aos anos através da sabedoria ancestral e da ciência preventiva."
            </p>
          </div>

          {/* Content Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-40">
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-serif font-black text-black leading-tight">Por que Bama?</h2>
                <div className="h-2 w-32 bg-brand-red"></div>
              </div>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Bama é mais do que um local geográfico na China; é um símbolo de resistência biológica. Em um mundo onde o envelhecimento precoce e as doenças do estilo de vida se tornaram a norma, a Vila de Bama permanece como uma prova viva de que o corpo humano possui uma capacidade incrível de regeneração quando alinhado com a natureza.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Este portal nasceu do desejo de democratizar essa sabedoria. Traduzimos as práticas centenárias em guias práticos, fundamentados em evidências de saúde preventiva, para que você possa resgatar sua vitalidade no meio da correria moderna.
              </p>
            </div>
            <div className="bg-gray-50 p-16 md:p-24 rounded-sm border border-gray-100 shadow-sm flex flex-col justify-center">
              <h2 className="text-5xl font-serif font-black text-black mb-12">Quem Somos</h2>
              <div className="space-y-10">
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Somos um coletivo de entusiastas da longevidade, pesquisadores de saúde preventiva e educadores de bem-estar.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Nossa missão é ser o seu guia definitivo na jornada de retorno à sua essência biológica, combinando tradição e ciência de ponta.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-black text-white p-16 md:p-32 rounded-sm mb-32 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red opacity-10 rounded-full -mr-64 -mt-64 blur-[120px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-serif font-black mb-16 leading-tight">Nossa Filosofia E-E-A-T</h2>
              <p className="text-2xl text-gray-400 mb-20 max-w-2xl leading-relaxed">Acreditamos que a autoridade em saúde é construída através de quatro pilares fundamentais:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-left">
                {[
                  { title: "Experiência (Experience)", desc: "Nossa curadoria é baseada no estudo direto das Zonas Azuis e na observação clínica de especialistas." },
                  { title: "Especialidade (Expertise)", desc: "Cada pilar do Protocolo é estruturado para fornecer informações tecnicamente precisas." },
                  { title: "Autoridade (Authoritativeness)", desc: "O Protocolo de Bama é reconhecido como uma fonte de referência em estilo de vida preventivo." },
                  { title: "Confiança (Trustworthiness)", desc: "Somos transparentes sobre nossas fontes e incentivamos o acompanhamento médico profissional." }
                ].map((item, id) => (
                  <div key={id} className="space-y-4">
                    <h4 className="text-2xl font-bold text-brand-red uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xl text-gray-300 leading-loose">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center py-24 border-t border-gray-100">
            <h3 className="text-4xl md:text-5xl font-serif font-black mb-10">O Futuro da Sua Saúde Começa Hoje</h3>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-loose">
              Convidamos você a explorar cada pilar do nosso protocolo. Este não é um destino, mas uma jornada contínua.
            </p>
            <Link to="/" className="bg-brand-red text-white text-sm font-semibold tracking-widest uppercase px-16 py-6 rounded-sm hover:bg-black transition-all inline-block shadow-xl">
              VOLTAR PARA A PÁGINA INICIAL
            </Link>
          </div>

          <div className="mt-16">
            <AdSenseDisclaimer />
          </div>
        </div>
      </section>
    </Layout>
  );
}

// --- Main App Entry ---
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:categoryId" element={<CategoryPage />} />
        <Route path="/:categoryId/:slug" element={<ArticlePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/politica-de-privacidade" element={<Privacy />} />
        <Route path="/termos-de-uso" element={<Terms />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}
