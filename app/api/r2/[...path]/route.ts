import { NextRequest, NextResponse } from 'next/server';

const R2_BASE = 'https://pub-a9b7eff88c5d4cb7b2837afc51696bde.r2.dev';

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: segments } = await context.params;
    const fullPath = segments.join('/');
    const targetUrl = `${R2_BASE}/${fullPath}`;

    const headers: HeadersInit = {};
    const range = req.headers.get('range');
    if (range) {
      headers['range'] = range;
    }

    const res = await fetch(targetUrl, {
      method: 'GET',
      headers,
      cache: 'no-store',
    });

    if (!res.ok && res.status !== 206) {
      return new NextResponse(`Cloudflare R2 Error: ${res.statusText}`, { status: res.status });
    }

    const responseHeaders = new Headers();
    res.headers.forEach((val, key) => {
      responseHeaders.set(key, val);
    });

    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    responseHeaders.set('Access-Control-Allow-Headers', '*');
    responseHeaders.set('Accept-Ranges', 'bytes');
    
    // For 206 Partial Content (range requests), tell Chromium not to attempt unsupported disk caching
    if (res.status === 206) {
      responseHeaders.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    } else {
      responseHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
    }

    return new NextResponse(res.body, {
      status: res.status,
      headers: responseHeaders,
    });
  } catch (error) {
    return new NextResponse('Cloudflare R2 Fetch Error', { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    },
  });
}
