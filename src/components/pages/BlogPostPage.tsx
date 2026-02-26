import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Tag, Clock, Globe } from 'lucide-react';
import { getPostBySlug } from '../../services/blogService';
import { BlogPost } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import SEO from '../SEO';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        setLoading(true);
        try {
          const fetchedPost = await getPostBySlug(slug, language);
          setPost(fetchedPost || null);
        } catch (error) {
          console.error('Failed to fetch blog post:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPost();
  }, [slug, language]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-24 px-6 text-center">
        <h1 className="text-3xl font-serif text-slate-900 mb-4">Post not found</h1>
        <Link to="/blog" className="text-teal-600 hover:underline">Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <SEO 
        title={post.title}
        description={post.excerpt}
        type="article"
        keywords={post.tags}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "datePublished": post.date,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "description": post.excerpt
        }}
      />
      <article className="max-w-3xl mx-auto px-6">
        {/* Back Link */}
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-teal-600 mb-8 uppercase tracking-wider transition-colors"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12 text-center">
          <div className="flex justify-center gap-2 mb-6">
             {post.categories?.map(cat => (
               <span key={cat} className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest rounded-full border border-teal-100">
                 {cat}
               </span>
             ))}
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight"
          >
            {post.title}
          </motion.h1>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-light uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span className="flex items-center gap-2">
              <User size={14} /> {post.author}
            </span>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-teal-600 hover:border-teal-200 transition-all shadow-sm hover:shadow-md"
            >
              <Globe size={14} />
              {language === 'en' ? '切换至中文' : 'Switch to English'}
            </button>
          </div>
        </header>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg prose-slate max-w-none"
        >
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-serif font-bold text-slate-800 mt-10 mb-4 border-b border-slate-100 pb-2" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-serif font-bold text-slate-800 mt-8 mb-3" {...props} />,
              p: ({node, ...props}) => <p className="mb-6 leading-relaxed text-slate-600 font-light text-lg" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 font-light" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-600 font-light" {...props} />,
              li: ({node, ...props}) => <li className="pl-1" {...props} />,
              a: ({node, ...props}) => <a className="text-teal-600 font-medium hover:text-teal-800 hover:underline decoration-teal-300 underline-offset-2 transition-colors" {...props} />,
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-4 border-rose-400 pl-6 py-2 my-8 italic text-xl text-slate-700 bg-gradient-to-r from-rose-50 to-transparent rounded-r-xl" {...props} />
              ),
              img: ({node, ...props}) => {
                let src = props.src;
                // If src is relative, prepend the blog folder path
                if (src && !src.startsWith('http') && !src.startsWith('/')) {
                  src = `/blog/${post.folderName}/${src}`;
                }
                return (
                  <div className="my-10">
                    <img className="rounded-2xl shadow-xl w-full object-cover max-h-[500px]" {...props} src={src} />
                    {props.title && <p className="text-center text-sm text-slate-400 mt-2 italic">{props.title}</p>}
                  </div>
                );
              },
              code: ({node, className, children, ...props}: any) => {
                const match = /language-(\w+)/.exec(className || '')
                return !className ? (
                  <code className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded text-sm font-mono" {...props}>
                    {children}
                  </code>
                ) : (
                  <pre className="bg-slate-900 text-slate-50 p-6 rounded-2xl overflow-x-auto my-8 text-sm font-mono shadow-lg">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                )
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </motion.div>

        {/* Footer / Tags */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-wrap gap-2">
            {post.tags?.map(tag => (
              <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">
                <Tag size={12} /> {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
