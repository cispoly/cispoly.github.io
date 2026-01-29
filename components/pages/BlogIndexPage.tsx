import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { getAllPosts } from '../../src/services/blogService';
import { BlogPost } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

const BlogIndexPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6"
        >
          CISPOLY Blog
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 max-w-2xl mx-auto font-light"
        >
          Latest updates, research findings, and insights into methylation-based cancer triage.
        </motion.p>
      </div>

      {/* Blog List */}
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            No posts found.
          </div>
        ) : (
          posts.map((post, index) => (
            <motion.article 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl hover:shadow-lg transition-all duration-300 group border border-white/60"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Optional Cover Image Thumbnail if needed, currently just text layout */}
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-slate-400 mb-3 uppercase">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="flex items-center gap-1">
                      <User size={12} /> {post.author}
                    </span>
                    {post.categories && post.categories.length > 0 && (
                      <>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span className="text-teal-600">{post.categories[0]}</span>
                      </>
                    )}
                  </div>

                  <Link to={`/blog/${post.slug}`} className="block group-hover:text-teal-700 transition-colors">
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-3 leading-tight">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-slate-600 mb-6 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2">
                      {post.tags?.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] uppercase tracking-wider rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-teal-600 transition-colors uppercase tracking-wider"
                    >
                      Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogIndexPage;
