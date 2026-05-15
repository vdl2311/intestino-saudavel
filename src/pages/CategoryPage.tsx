import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout, AdSenseDisclaimer } from '../components/MainLayout';
import { articles } from '../data/articles';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = articles[categoryId as keyof typeof articles];

  if (!category) {
    return (
      <Layout>
        <div className="py-24 text-center">Categoria não encontrada.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <span className={`text-${category.theme}-600 font-bold tracking-widest uppercase text-sm mb-6 block`}>
              Protocolo de Bama
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-black leading-tight mt-4 mb-10">
              {category.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-loose">
              {category.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {category.items.map((item, idx) => (
              <article key={idx} className="group">
                <Link to={`/${categoryId}/${item.slug}`} className="block">
                  <div className="aspect-[16/9] bg-gray-200 mb-10 overflow-hidden rounded-sm shadow-sm group-hover:shadow-xl transition-all">
                     <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  </div>
                  <h2 className="text-4xl font-serif font-bold mt-2 leading-tight group-hover:underline text-black mb-6">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-xl text-gray-600 line-clamp-3 leading-loose mb-8">
                    {item.content.replace(/##.*/g, '').replace(/<[^>]*>?/gm, '').substring(0, 180)}...
                  </p>
                  <div className={`mt-6 inline-block font-bold text-xs uppercase tracking-widest text-${category.theme}-700 border-b-2 border-${category.theme}-100 pb-2 group-hover:border-${category.theme}-700 transition-colors`}>
                    Ler Artigo Completo
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-24">
            <AdSenseDisclaimer />
          </div>
        </div>
      </section>
    </Layout>
  );
}
