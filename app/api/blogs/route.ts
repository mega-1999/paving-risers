import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import { blogs as initialBlogs } from '@/lib/blogData';

export async function GET() {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        const dbBlogs = data.map((item: any) => ({
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

        const existingSlugs = new Set(dbBlogs.map((b: any) => b.slug));
        const nonDuplicateSeed = initialBlogs.filter(b => !existingSlugs.has(b.slug));
        return NextResponse.json({ success: true, blogs: [...dbBlogs, ...nonDuplicateSeed] });
      }
    }
  } catch (err) {
    console.warn('Supabase fetch failed:', err);
  }

  return NextResponse.json({ success: true, blogs: initialBlogs });
}

export async function POST(req: NextRequest) {
  try {
    const sessionCookie = req.cookies.get('paving_admin_session');
    
    // Check authentication
    if (!sessionCookie && process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { success: false, message: 'Unauthorized. Admin login required.' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { title, slug, excerpt, content, category, author, image, date } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { success: false, message: 'Title, slug, and content are required.' },
        { status: 400 }
      );
    }

    const formattedDate = date || new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    const newPost = {
      slug: slug.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-'),
      title: title.trim(),
      excerpt: excerpt || title.substring(0, 150),
      content,
      category: category || 'General',
      author: author || 'Paving Risers Engineering',
      image: image || '/images/manhole_riser/adjustable_manhole_riser_coated.png',
      date: formattedDate,
      created_at: new Date().toISOString()
    };

    if (supabase) {
      const { data, error } = await supabase
        .from('blogs')
        .insert([newPost])
        .select();

      if (error) {
        return NextResponse.json(
          { success: false, message: error.message },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, post: data[0] });
    }

    return NextResponse.json({ success: true, post: newPost });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Server error creating post' },
      { status: 500 }
    );
  }
}
