'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Rss, Layers } from 'lucide-react';
import { BlogPost, blogs as initialBlogs } from '@/lib/blogData';
import { getAllBlogPosts } from '@/lib/blogService';

export default function BlogListingPage() {
  const [blogsList, setBlogsList] = useState<BlogPost[]>(initialBlogs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getAllBlogPosts();
        if (data && data.length > 0) {
          setBlogsList(data);
        }
      } catch (err) {
        // Handled silently with default initialBlogs fallback
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#CC0000] selection:text-white pb-32">
      
      {/* Precision Technical Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />

      {/* ─── HERO SECTION ─── */}
      <div className="relative z-10 w-full pt-12 pb-12 px-10 md:px-20 flex flex-col items-center justify-center overflow-hidden border-b border-slate-200">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0F0F0F] text-white text-[11px] font-mono font-bold uppercase tracking-[0.25em] border-l-4 border-[#CC0000]">
            <Rss className="w-3.5 h-3.5 text-[#CC0000]" />
            <span>Industry Insights & Tech Notes</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-slate-900 leading-none">
            Paving <span className="text-[#CC0000]">Intelligence</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            Deep dives into infrastructure, verified installation methods, and the engineering behind modern road solutions.
          </p>
        </motion.div>
      </div>

      {/* ─── BLOG GRID (BLACK CARDS ON FULL WHITE BG) ─── */}
      <div className="relative z-10 w-full px-10 md:px-20 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {blogsList.map((blog, index) => (
            <motion.article 
              key={blog.id || blog.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative flex flex-col bg-[#0F0F0F] text-white border-2 border-[#0F0F0F] shadow-xl hover:border-[#CC0000] transition-all duration-300 overflow-hidden h-full"
            >
              {/* Top Accent Indicator Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#CC0000] z-20" />

              {/* Image Container */}
              <Link href={`/blog/${blog.slug}`} className="relative h-72 w-full overflow-hidden bg-white border-b border-slate-200 flex items-center justify-center p-8">
                <Image 
                  src={blog.image} 
                  alt={blog.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-20 px-3 py-1 bg-[#CC0000] text-white text-xs font-mono font-bold uppercase tracking-widest">
                  {blog.category}
                </div>
              </Link>

              {/* Content Container */}
              <div className="flex flex-col flex-1 p-8">
                <div className="flex items-center gap-6 text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#CC0000]" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#CC0000]" />
                    {blog.author}
                  </div>
                </div>

                <Link href={`/blog/${blog.slug}`} className="group/title">
                  <h2 className="text-2xl font-black uppercase tracking-tight text-white group-hover/title:text-[#CC0000] transition-colors mb-4 line-clamp-2">
                    {blog.title}
                  </h2>
                </Link>

                <p className="text-slate-300 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#CC0000] hover:bg-white hover:text-slate-900 text-white text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 group/link"
                  >
                    Read Article 
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

    </div>
  );
}
