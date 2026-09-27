'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Plus, 
  Trash2, 
  ExternalLink, 
  FileText, 
  LogOut, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  Edit3, 
  Sparkles, 
  Layers, 
  Calendar, 
  User, 
  Image as ImageIcon,
  ArrowLeft,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogPost, blogs as initialBlogs } from '@/lib/blogData';
import { getAllBlogPosts, createBlogPost, deleteBlogPost } from '@/lib/blogService';

const PRESET_IMAGES = [
  { name: 'Adjustable Coated Riser', url: '/images/manhole_riser/adjustable_manhole_riser_coated.png' },
  { name: 'Square Coated Basin Riser', url: '/images/catch_basin_riser/square_catch_basin_riser_coated.png' },
  { name: 'Rectangle Cast Iron Riser', url: '/images/catch_basin_riser/rectangle_catch_basin_riser_cast_iron.png' },
  { name: '14x24 Fabricated Steel Grate', url: '/images/catch_basin_riser/14x24x2_grate_with_riser.png' },
  { name: '10x36 Linear Steel Grate', url: '/images/catch_basin_riser/10x36x2_grate_with_riser.png' },
  { name: 'NY DOT G2 Catch Basin Grate', url: '/images/catch_basin_riser/sny_g2_state_ny_grate_1.png' },
  { name: 'NY DOT G3 High-Inflow Vane', url: '/images/catch_basin_riser/sny_g3_state_ny_grate_1.png' },
  { name: 'Galvanized Reticuline Lock Grate', url: '/images/catch_basin_riser/galvanized_reticuline_grate_with_lock.png' },
  { name: 'D-Shape Steel Riser', url: '/images/custom_riser/d_shape_riser_steel.png' }
];

const CATEGORIES = [
  'Guides',
  'Technical Analysis',
  'Case Studies',
  'Materials',
  'Custom Engineering',
  'Maintenance',
  'Municipal Standards'
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [blogsList, setBlogsList] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Form Editor State
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState('');
  const [formError, setFormError] = useState('');

  // Form Fields
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('Guides');
  const [customCategory, setCustomCategory] = useState('');
  const [author, setAuthor] = useState('Paving Risers Engineering Team');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(PRESET_IMAGES[0].url);
  const [customImage, setCustomImage] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');

  // Auth Verification on Load
  useEffect(() => {
    const isAuth = localStorage.getItem('paving_admin_authenticated');
    if (isAuth !== 'true') {
      router.replace('/admin/login');
      return;
    }
    loadBlogs();
  }, [router]);

  const loadBlogs = async () => {
    setLoading(true);
    try {
      const posts = await getAllBlogPosts();
      setBlogsList(posts);
    } catch (e) {
      setBlogsList(initialBlogs);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
    } catch (e) {}
    localStorage.removeItem('paving_admin_authenticated');
    localStorage.removeItem('paving_admin_email');
    router.replace('/admin/login');
  };

  // Auto-generate slug when typing title
  const handleTitleChange = (val: string) => {
    setTitle(val);
    const generated = val
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    setSlug(generated);
  };

  const resetForm = () => {
    setTitle('');
    setSlug('');
    setCategory('Guides');
    setCustomCategory('');
    setAuthor('Paving Risers Engineering Team');
    setDate('');
    setImage(PRESET_IMAGES[0].url);
    setCustomImage('');
    setExcerpt('');
    setContent('');
    setFormError('');
    setFormSuccess('');
    setIsPreviewMode(false);
  };

  const handlePublishPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    if (!title.trim() || !slug.trim() || !content.trim()) {
      setFormError('Please fill in the title, slug, and content.');
      return;
    }

    setIsSubmitting(true);

    const postDate = date.trim() || new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    const finalCategory = category === 'custom' ? (customCategory.trim() || 'General') : category;
    const finalImage = customImage.trim() || image;

    try {
      const result = await createBlogPost({
        slug: slug.trim().toLowerCase(),
        title: title.trim(),
        excerpt: excerpt.trim() || title.trim(),
        content: content.trim(),
        category: finalCategory,
        author: author.trim() || 'Engineering Team',
        image: finalImage,
        date: postDate
      });

      if (result.success) {
        setFormSuccess('Article successfully published and live!');
        await loadBlogs();
        setTimeout(() => {
          setIsEditorOpen(false);
          resetForm();
        }, 1200);
      } else {
        setFormError(result.error || 'Failed to publish post');
      }
    } catch (err: any) {
      setFormError(err.message || 'Error occurred while saving article');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeletePost = async (id: string, postSlug: string, postTitle: string) => {
    if (!confirm(`Are you sure you want to delete "${postTitle}"?`)) return;

    try {
      await deleteBlogPost(postSlug);
      setBlogsList(prev => prev.filter(b => b.slug !== postSlug && b.id !== id));
    } catch (err) {
      alert('Error deleting post');
    }
  };

  const filteredBlogs = blogsList.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || b.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#CC0000] selection:text-white">
      
      {/* ─── TOP ADMIN NAVBAR ─── */}
      <header className="bg-[#0a0a0a] border-b border-zinc-900 sticky top-0 z-40 px-6 md:px-12 py-4 flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-sm bg-[#CC0000] flex items-center justify-center font-black text-white text-sm shadow-[0_0_15px_rgba(204,0,0,0.4)]">
              P
            </div>
            <span className="font-black text-base uppercase tracking-tight text-white hidden sm:inline">
              PAVING <span className="text-[#CC0000]">RISERS</span>
            </span>
          </Link>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 bg-zinc-900 px-2.5 py-1 border border-zinc-800">
            Publisher Control Center
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/blog" 
            target="_blank"
            className="hidden md:flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-400 hover:text-[#CC0000] transition-colors"
          >
            <span>Live Blog</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <Button
            onClick={handleLogout}
            variant="outline"
            className="bg-zinc-900 border-zinc-800 hover:bg-[#CC0000] hover:text-white hover:border-[#CC0000] text-zinc-300 text-xs font-mono uppercase tracking-wider h-9 px-3.5 flex items-center gap-1.5 rounded-none transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sign Out</span>
          </Button>
        </div>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 space-y-8">
        
        {/* Top Header & Stat Cards */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-zinc-900">
          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
              Blog Publications Manager
            </h1>
            <p className="text-xs md:text-sm text-zinc-400 font-medium">
              Create, publish, and manage verified municipal infrastructure articles and case studies.
            </p>
          </div>

          <Button
            onClick={() => {
              resetForm();
              setIsEditorOpen(true);
            }}
            className="bg-[#CC0000] hover:bg-white hover:text-black text-white font-black uppercase tracking-widest text-xs h-12 px-6 rounded-none transition-all duration-300 shadow-[0_0_25px_rgba(204,0,0,0.3)] flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Write New Article</span>
          </Button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#0a0a0a] border border-zinc-900 p-5 rounded-xs space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold block">
              Total Published Articles
            </span>
            <div className="text-3xl font-black text-white font-mono">
              {blogsList.length}
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-zinc-900 p-5 rounded-xs space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold block">
              Active Topic Categories
            </span>
            <div className="text-3xl font-black text-[#CC0000] font-mono">
              {new Set(blogsList.map(b => b.category)).size}
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-zinc-900 p-5 rounded-xs space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold block">
              Status & Indexing
            </span>
            <div className="text-sm font-bold text-emerald-400 font-mono flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>100% Live & SEO Ready</span>
            </div>
          </div>
        </div>

        {/* ─── ARTICLES SEARCH & FILTER BAR ─── */}
        <div className="bg-[#0a0a0a] border border-zinc-900 p-4 rounded-xs flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search title, author, or keywords..."
              className="w-full bg-[#141414] border border-zinc-800 focus:border-[#CC0000] text-white text-xs pl-10 pr-4 py-2.5 outline-none font-mono transition-colors"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                selectedCategory === 'all'
                  ? 'bg-[#CC0000] text-white border-[#CC0000]'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
              }`}
            >
              All
            </button>
            {Array.from(new Set(blogsList.map(b => b.category))).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer border whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#CC0000] text-white border-[#CC0000]'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ─── ARTICLES LIST / TABLE ─── */}
        <div className="bg-[#0a0a0a] border border-zinc-900 rounded-xs overflow-hidden shadow-2xl">
          {loading ? (
            <div className="p-16 text-center text-zinc-500 font-mono text-xs flex items-center justify-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#CC0000] animate-ping" />
              <span>Fetching publications list...</span>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="p-16 text-center space-y-3">
              <FileText className="w-10 h-10 text-zinc-700 mx-auto" />
              <div className="text-sm font-mono text-zinc-400">No articles match your criteria.</div>
            </div>
          ) : (
            <div className="divide-y divide-zinc-900">
              {filteredBlogs.map((post) => (
                <div 
                  key={post.id || post.slug} 
                  className="p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-[#111] transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    {/* Cover Thumbnail */}
                    <div className="relative w-20 h-20 bg-white border border-zinc-800 shrink-0 overflow-hidden flex items-center justify-center p-1">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="80px"
                        className="object-contain p-1"
                      />
                    </div>

                    {/* Article Details */}
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2 py-0.5 bg-[#CC0000] text-white text-[9px] font-mono font-bold uppercase tracking-wider">
                          {post.category}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">
                          {post.date}
                        </span>
                        <span className="text-zinc-700">•</span>
                        <span className="text-[10px] font-mono text-zinc-400">
                          By {post.author}
                        </span>
                      </div>

                      <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-white group-hover:text-[#CC0000] transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs text-zinc-400 line-clamp-1 max-w-2xl font-mono">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="px-3 py-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#CC0000]" />
                      <span>Preview</span>
                    </Link>

                    <button
                      onClick={() => handleDeletePost(post.id, post.slug, post.title)}
                      className="p-2 bg-zinc-900 border border-zinc-800 hover:bg-red-950/60 hover:border-red-800 text-zinc-400 hover:text-red-300 transition-colors cursor-pointer"
                      title="Delete Article"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </main>

      {/* ─── FULL-SCREEN ARTICLE EDITOR MODAL ─── */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto">
          <div className="bg-[#0c0c0c] border border-zinc-800 w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#CC0000]" />

            {/* Modal Header */}
            <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-[#111]">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#CC0000] font-black block">
                  Authoring Console
                </span>
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
                  Publish New Blog Article
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPreviewMode(!isPreviewMode)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider border transition-colors flex items-center gap-1.5 cursor-pointer ${
                    isPreviewMode
                      ? 'bg-[#CC0000] text-white border-[#CC0000]'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{isPreviewMode ? 'Edit Mode' : 'Live Preview'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsEditorOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6">
              
              {formError && (
                <div className="p-4 bg-red-950/40 border border-red-800 text-red-300 text-xs font-mono flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-[#CC0000] shrink-0 mt-0.5" />
                  <span>{formError}</span>
                </div>
              )}

              {formSuccess && (
                <div className="p-4 bg-emerald-950/40 border border-emerald-800 text-emerald-300 text-xs font-mono flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{formSuccess}</span>
                </div>
              )}

              {isPreviewMode ? (
                /* ─── LIVE PREVIEW TAB ─── */
                <div className="space-y-6 bg-[#050505] p-6 border border-zinc-800">
                  <div className="border-b border-zinc-800 pb-4 space-y-2">
                    <span className="px-2.5 py-0.5 bg-[#CC0000] text-white text-[10px] font-mono font-bold uppercase tracking-widest">
                      {category === 'custom' ? (customCategory || 'Category') : category}
                    </span>
                    <h1 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                      {title || 'Article Title Preview'}
                    </h1>
                    <div className="text-[10px] font-mono text-zinc-400 flex gap-4">
                      <span>By {author}</span>
                      <span>•</span>
                      <span>{date || new Date().toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="relative w-full h-60 bg-white border border-zinc-800 flex items-center justify-center p-4">
                    <Image
                      src={customImage || image}
                      alt="Cover Preview"
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  <div className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                    {content || 'Enter article content in the editor to see preview here...'}
                  </div>
                </div>
              ) : (
                /* ─── FORM EDIT MODE ─── */
                <form id="blog-form" onSubmit={handlePublishPost} className="space-y-6">
                  
                  {/* Title & Slug */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400 block">
                        Article Title *
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        placeholder="e.g. Modern Paving Risers & Storm Inflow Optimization"
                        required
                        className="w-full bg-[#141414] border border-zinc-800 focus:border-[#CC0000] text-white text-xs px-3.5 py-3 outline-none font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400 block">
                        URL Slug (/blog/[slug]) *
                      </label>
                      <input
                        type="text"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        placeholder="modern-paving-risers-storm-inflow"
                        required
                        className="w-full bg-[#141414] border border-zinc-800 focus:border-[#CC0000] text-white text-xs px-3.5 py-3 outline-none font-mono"
                      />
                    </div>
                  </div>

                  {/* Category, Author, Date */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400 block">
                        Topic Category
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-[#141414] border border-zinc-800 focus:border-[#CC0000] text-white text-xs px-3 py-3 outline-none font-mono"
                      >
                        {CATEGORIES.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                        <option value="custom">+ Custom Category</option>
                      </select>
                      {category === 'custom' && (
                        <input
                          type="text"
                          value={customCategory}
                          onChange={(e) => setCustomCategory(e.target.value)}
                          placeholder="Enter custom category"
                          className="w-full bg-[#141414] border border-zinc-800 text-white text-xs px-3 py-2 outline-none font-mono mt-1"
                        />
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400 block">
                        Author Byline
                      </label>
                      <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Engineering Team"
                        className="w-full bg-[#141414] border border-zinc-800 focus:border-[#CC0000] text-white text-xs px-3.5 py-3 outline-none font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400 block">
                        Publication Date
                      </label>
                      <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="e.g. September 26, 2026"
                        className="w-full bg-[#141414] border border-zinc-800 focus:border-[#CC0000] text-white text-xs px-3.5 py-3 outline-none font-mono"
                      />
                    </div>
                  </div>

                  {/* Cover Image Selector */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400 block">
                      Select Cover Image
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {PRESET_IMAGES.map((img) => (
                        <button
                          key={img.url}
                          type="button"
                          onClick={() => {
                            setImage(img.url);
                            setCustomImage('');
                          }}
                          className={`relative p-1.5 bg-white border text-left cursor-pointer transition-all ${
                            image === img.url && !customImage
                              ? 'border-[#CC0000] ring-2 ring-[#CC0000]'
                              : 'border-zinc-800 hover:border-zinc-500'
                          }`}
                        >
                          <div className="relative w-full aspect-video bg-white overflow-hidden">
                            <Image src={img.url} alt={img.name} fill className="object-contain" />
                          </div>
                          <span className="text-[8px] font-mono line-clamp-1 block text-center font-bold text-zinc-800 mt-1 uppercase">
                            {img.name}
                          </span>
                        </button>
                      ))}
                    </div>

                    <input
                      type="text"
                      value={customImage}
                      onChange={(e) => setCustomImage(e.target.value)}
                      placeholder="Or enter custom image URL: /images/..."
                      className="w-full bg-[#141414] border border-zinc-800 focus:border-[#CC0000] text-white text-xs px-3.5 py-2.5 outline-none font-mono mt-2"
                    />
                  </div>

                  {/* Excerpt */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400 block">
                      Article Summary / Excerpt *
                    </label>
                    <textarea
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      rows={2}
                      placeholder="Short 2-3 sentence overview displayed on blog cards and Google meta description..."
                      required
                      className="w-full bg-[#141414] border border-zinc-800 focus:border-[#CC0000] text-white text-xs p-3 outline-none font-mono"
                    />
                  </div>

                  {/* Main Content Markdown */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400 block">
                        Article Content (Markdown Supported) *
                      </label>
                      <span className="text-[9px] font-mono text-zinc-500">
                        Use ## for Subheaders, - for Bullet lists, **bold** for highlights
                      </span>
                    </div>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={10}
                      placeholder={`## The Future of Storm Drainage Engineering\n\nWhen resurfacing city streets, paving contractors face strict municipal compliance mandates...\n\n### Key Technical Highlights\n- **Zero Excavation**: Drops directly into existing catch basin frame.\n- **High-Tensile Steel**: Fabricated domestically for extreme axle loadings.\n\nLearn more about our customized riser specifications.`}
                      required
                      className="w-full bg-[#141414] border border-zinc-800 focus:border-[#CC0000] text-white text-xs p-4 outline-none font-mono leading-relaxed"
                    />
                  </div>

                </form>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-zinc-800 bg-[#111] flex justify-between items-center">
              <button
                type="button"
                onClick={() => setIsEditorOpen(false)}
                className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <Button
                type="submit"
                form="blog-form"
                disabled={isSubmitting}
                className="bg-[#CC0000] hover:bg-white hover:text-black text-white font-black uppercase tracking-widest text-xs h-11 px-8 rounded-none transition-all shadow-xl cursor-pointer"
              >
                {isSubmitting ? 'Publishing...' : 'Publish Article Now'}
              </Button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
