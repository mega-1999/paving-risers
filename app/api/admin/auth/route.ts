import { NextRequest, NextResponse } from 'next/server';

const DEFAULT_ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@pavingrisers.com';
const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Paving#1171';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (email.trim().toLowerCase() === DEFAULT_ADMIN_EMAIL.toLowerCase() && password === DEFAULT_ADMIN_PASSWORD) {
      // Create session token
      const sessionToken = Buffer.from(`${email}:${Date.now()}:${Math.random()}`).toString('base64');
      
      const response = NextResponse.json({
        success: true,
        message: 'Authentication successful',
        user: { email: DEFAULT_ADMIN_EMAIL, role: 'admin' }
      });

      // Set secure auth cookie
      response.cookies.set({
        name: 'paving_admin_session',
        value: sessionToken,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: 'Invalid admin credentials. Please verify your email and password.' },
      { status: 401 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Server authentication error' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: 'Logged out successfully' });
  response.cookies.delete('paving_admin_session');
  return response;
}
