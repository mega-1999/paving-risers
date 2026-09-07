import React from 'react';
import { notFound } from 'next/navigation';
import { blogs } from '@/lib/blogData';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, ChevronRight } from 'lucide-react';

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: any }) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  // Markdown to HTML parser for blog articles
  const parseContent = (content: string) => {
    return content
      .split('\n')
      .map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return '<br/>';
        if (trimmed.startsWith('###')) return `<h3 class="text-xl md:text-2xl font-black uppercase tracking-tight text-[#CC0000] mt-8 mb-4">${trimmed.replace('###', '').trim()}</h3>`;
        if (trimmed.startsWith('##')) return `<h2 class="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 mt-10 mb-6 border-b border-slate-200 pb-3">${trimmed.replace('##', '').trim()}</h2>`;
        if (trimmed.startsWith('-')) {
          let liContent = trimmed.replace('-', '').trim();
          liContent = liContent.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#CC0000]">$1</strong>');
          return `<li class="ml-6 mb-3 text-slate-700 font-medium relative list-disc marker:text-[#CC0000]">${liContent}</li>`;
        }
        
        let pContent = trimmed;
        pContent = pContent.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-bold">$1</strong>');
        return `<p class="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-6">${pContent}</p>`;
      })
      .join('');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#CC0000] selection:text-white pb-32 pt-36 relative">
      
      {/* Technical Blueprint Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* ─── BREADCRUMB & BACK NAV ─── */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-500 hover:text-[#CC0000] transition-colors group px-3 py-1.5 bg-white border border-slate-200 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>
        </div>

        {/* ─── HERO HEADER ─── */}
        <article>
          <header className="mb-12 bg-white border-2 border-slate-200 p-8 md:p-12 shadow-sm relative">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#CC0000]"></div>
            
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-[#CC0000] text-white text-xs font-mono font-bold uppercase tracking-widest">
                {blog.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 mb-8 leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono font-bold uppercase tracking-widest text-slate-500 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#CC0000]" />
                {blog.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#CC0000]" />
                {blog.author}
              </div>
            </div>
          </header>

          {/* ─── HERO IMAGE ─── */}
          <div className="relative w-full h-[40vh] md:h-[50vh] bg-white border-2 border-slate-200 shadow-sm overflow-hidden mb-12 flex items-center justify-center p-8">
            <Image 
              src={blog.image} 
              alt={blog.title}
              fill
              sizes="100vw"
              className="object-contain p-6"
            />
          </div>

          {/* ─── CONTENT ─── */}
          <div className="bg-white border-2 border-slate-200 p-8 md:p-12 shadow-sm mb-12">
            <div 
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: parseContent(blog.content) }}
            />
          </div>

          {/* ─── FOOTER CTA ─── */}
          <div className="p-8 md:p-12 bg-[#0F0F0F] text-white border-l-4 border-[#CC0000] shadow-xl text-center">
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
              Ready to Upgrade Your <span className="text-[#CC0000]">Infrastructure?</span>
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-8 font-medium text-sm md:text-base leading-relaxed">
              Connect with our engineering team today to discuss how our verified paving solutions can save your next project time and money.
            </p>
            <Link 
              href="/contact/quote"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#CC0000] hover:bg-white hover:text-slate-900 text-white text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300"
            >
              Get Certified Specs <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
