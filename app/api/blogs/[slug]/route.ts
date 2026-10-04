import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import { blogs as initialBlogs } from '@/lib/blogData';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .single();

      if (!error && data) {
        return NextResponse.json({ success: true, blog: data });
      }
    }
  } catch (err) {
    // Database query fallback
  }

  const found = initialBlogs.find(b => b.slug === slug);
  if (found) {
    return NextResponse.json({ success: true, blog: found });
  }

  return NextResponse.json({ success: false, message: 'Blog post not found' }, { status: 404 });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const body = await req.json();

    if (supabase) {
      const { data, error } = await supabase
        .from('blogs')
        .update({
          ...(body.title && { title: body.title.trim() }),
          ...(body.slug && { slug: body.slug.trim().toLowerCase() }),
          ...(body.excerpt && { excerpt: body.excerpt.trim() }),
          ...(body.content && { content: body.content.trim() }),
          ...(body.category && { category: body.category }),
          ...(body.author && { author: body.author }),
          ...(body.image && { image: body.image }),
          ...(body.date && { date: body.date })
        })
        .eq('slug', slug)
        .select();

      if (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, blog: data[0] });
    }

    return NextResponse.json({ success: true, blog: body });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    if (supabase) {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('slug', slug);

      if (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true, message: 'Blog post deleted' });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
