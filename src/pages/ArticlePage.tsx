import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { Layout, AdSenseDisclaimer } from '../components/MainLayout';
import { articles } from '../data/articles';

export default function ArticlePage() {
  const { categoryId, slug } = useParams();
  const category = articles[categoryId as keyof typeof articles];
  
  if (!category) {
    return <Layout><div className="py-24 text-center">Categoria não encontrada.</div></Layout>;
  }

  const article = category.items.find((item) => item.slug === slug);

  if (!article) {
    return <Layout><div className="py-24 text-center">Artigo não encontrado.</div></Layout>;
  }

  return (
    <Layout>
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <Link to={`/${categoryId}`} className={`text-${category.theme}-600 font-bold tracking-widest uppercase text-sm hover:underline flex items-center gap-2 mb-8`}>
              ← Voltar para {category.title}
            </Link>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-black leading-tight mt-10 mb-12">
              {article.title}
            </h1>
            <div className="aspect-video w-full overflow-hidden my-12 rounded-sm shadow-2xl">
               <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="prose prose-lg md:prose-xl prose-slate max-w-none">
            <div className="markdown-body">
              <Markdown>{article.content}</Markdown>
            </div>
            
            <div className="mt-24">
              <AdSenseDisclaimer />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
