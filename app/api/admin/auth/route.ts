import { NextRequest, NextResponse } from 'next/server';

const VALID_ADMIN_EMAILS = [
  'admin@pavingrisers.com',
  (process.env.ADMIN_EMAIL || '').trim().toLowerCase()
].filter(Boolean);

const VALID_ADMIN_PASSWORDS = [
  'Paving#1171',
  'PavingAdmin2026!',
  (process.env.ADMIN_PASSWORD || '').trim()
].filter(Boolean);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '').trim();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const isEmailValid = VALID_ADMIN_EMAILS.includes(email);
    const isPasswordValid = VALID_ADMIN_PASSWORDS.includes(password);

    if (isEmailValid && isPasswordValid) {
      // Create session token
      const sessionToken = Buffer.from(`${email}:${Date.now()}:${Math.random()}`).toString('base64');
      
      const response = NextResponse.json({
        success: true,
        message: 'Authentication successful',
        user: { email: 'admin@pavingrisers.com', role: 'admin' }
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
