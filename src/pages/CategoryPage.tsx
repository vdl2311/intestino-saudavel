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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className={`text-${category.theme}-600 font-bold tracking-widest uppercase text-sm`}>
              Protocolo de Bama
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-black leading-tight mt-4 mb-6">
              {category.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {category.items.map((item, idx) => (
              <article key={idx} className="group">
                <Link to={`/${categoryId}/${item.slug}`} className="block">
                  <div className="aspect-[16/9] bg-gray-200 mb-6 overflow-hidden rounded-sm shadow-sm group-hover:shadow-md transition-all">
                     <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold mt-2 leading-tight group-hover:underline text-black">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-gray-600 line-clamp-3">
                    {item.content.replace(/##.*/g, '').replace(/<[^>]*>?/gm, '').substring(0, 150)}...
                  </p>
                  <div className={`mt-6 inline-block font-bold text-xs uppercase tracking-widest text-${category.theme}-700 border-b-2 border-${category.theme}-100 pb-1 group-hover:border-${category.theme}-700 transition-colors`}>
                    Ler Artigo Completo
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <AdSenseDisclaimer />
        </div>
      </section>
    </Layout>
  );
}
