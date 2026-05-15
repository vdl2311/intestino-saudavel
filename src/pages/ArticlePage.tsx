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
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link to={`/${categoryId}`} className={`text-${category.theme}-600 font-bold tracking-widest uppercase text-sm hover:underline flex items-center gap-2`}>
              ← Voltar para {category.title}
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-black leading-tight mt-6 mb-6">
              {article.title}
            </h1>
            <div className="aspect-video w-full overflow-hidden my-8 rounded-sm shadow-lg">
               <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:mb-8 prose-p:mb-8 prose-li:mb-4">
            <div className="markdown-body">
              <Markdown>{article.content}</Markdown>
            </div>
            
            <AdSenseDisclaimer />
          </div>
        </div>
      </section>
    </Layout>
  );
}
