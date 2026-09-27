import { supabase } from './supabaseClient';
import { BlogPost, blogs as initialBlogs } from './blogData';

const LOCAL_STORAGE_KEY = 'paving_risers_custom_blogs';

// Fetch all blog posts (Supabase -> LocalStorage -> Default Seed)
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        // Map database schema to BlogPost
        const dbBlogs: BlogPost[] = data.map((item: any) => ({
          id: String(item.id),
          slug: item.slug,
          title: item.title,
          excerpt: item.excerpt,
          content: item.content,
          date: item.date || new Date(item.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          author: item.author || 'Engineering Team',
          image: item.image || '/images/manhole_riser/adjustable_manhole_riser_coated.png',
          category: item.category || 'Guides'
        }));

        // Merge with initial blogs without duplicating slugs
        const existingSlugs = new Set(dbBlogs.map(b => b.slug));
        const nonDuplicateSeed = initialBlogs.filter(b => !existingSlugs.has(b.slug));
        return [...dbBlogs, ...nonDuplicateSeed];
      }
    }
  } catch (err) {
    console.warn('Supabase fetch failed, falling back to local/seed:', err);
  }

  // Client-side local storage fallback for custom created blogs
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const localBlogs: BlogPost[] = JSON.parse(stored);
        const existingSlugs = new Set(localBlogs.map(b => b.slug));
        const nonDuplicateSeed = initialBlogs.filter(b => !existingSlugs.has(b.slug));
        return [...localBlogs, ...nonDuplicateSeed];
      }
    } catch (e) {
      console.warn('LocalStorage parse error:', e);
    }
  }

  return initialBlogs;
}

// Fetch single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const allBlogs = await getAllBlogPosts();
  return allBlogs.find(b => b.slug === slug) || null;
}

// Create blog post (Admin action)
export async function createBlogPost(post: Omit<BlogPost, 'id'>): Promise<{ success: boolean; post?: BlogPost; error?: string }> {
  const newPost: BlogPost = {
    ...post,
    id: `blog_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`
  };

  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('blogs')
        .insert([
          {
            slug: newPost.slug,
            title: newPost.title,
            excerpt: newPost.excerpt,
            content: newPost.content,
            date: newPost.date,
            author: newPost.author,
            image: newPost.image,
            category: newPost.category,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (!error && data && data.length > 0) {
        return { success: true, post: { ...newPost, id: String(data[0].id) } };
      }
    }
  } catch (err: any) {
    console.warn('Supabase insert failed, saving locally:', err);
  }

  // Fallback to client-side localStorage
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      const currentList: BlogPost[] = stored ? JSON.parse(stored) : [];
      currentList.unshift(newPost);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentList));
      return { success: true, post: newPost };
    } catch (e: any) {
      return { success: false, error: e.message || 'Failed to save blog post' };
    }
  }

  return { success: true, post: newPost };
}

// Delete blog post (Admin action)
export async function deleteBlogPost(idOrSlug: string): Promise<{ success: boolean; error?: string }> {
  try {
    if (supabase) {
      await supabase
        .from('blogs')
        .delete()
        .or(`id.eq.${idOrSlug},slug.eq.${idOrSlug}`);
    }
  } catch (err) {
    console.warn('Supabase delete error:', err);
  }

  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const currentList: BlogPost[] = JSON.parse(stored);
        const filtered = currentList.filter(b => b.id !== idOrSlug && b.slug !== idOrSlug);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filtered));
      }
    } catch (e: any) {
      return { success: false, error: e.message };
    }
  }

  return { success: true };
}
