'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle, Sparkles, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@pavingrisers.com');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem('paving_admin_authenticated', 'true');
        localStorage.setItem('paving_admin_email', email);
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Authentication failed. Please check your credentials.');
      }
    } catch (err: any) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col justify-between selection:bg-[#CC0000] selection:text-white relative overflow-hidden font-sans">
      
      {/* Background Aesthetics */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CC0000]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Brand Bar */}
      <header className="p-6 md:px-12 flex justify-between items-center border-b border-zinc-900 relative z-10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-sm bg-[#CC0000] flex items-center justify-center font-black text-white text-base shadow-[0_0_15px_rgba(204,0,0,0.5)]">
            P
          </div>
          <span className="font-black tracking-tight text-lg uppercase text-white group-hover:text-[#CC0000] transition-colors">
            PAVING <span className="text-[#CC0000]">RISERS</span>
          </span>
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
          <ShieldCheck className="w-3.5 h-3.5 text-[#CC0000]" />
          <span>Admin Portal</span>
        </div>
      </header>

      {/* Main Login Box */}
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-md bg-[#0a0a0a] border border-zinc-800 p-8 md:p-10 shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#CC0000]" />

          <div className="space-y-3 mb-8">
            <div className="w-12 h-12 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#CC0000] mb-4 shadow-inner">
              <KeyRound className="w-6 h-6" />
            </div>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
              Publisher Access
            </h1>
            <p className="text-xs text-zinc-400 font-medium leading-relaxed">
              Authenticate with administrative credentials to publish, edit, or manage blog publications.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-950/40 border border-red-800 text-red-300 text-xs font-mono flex items-start gap-2.5 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-[#CC0000] shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400 block">
                Admin Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="admin@pavingrisers.com"
                  className="w-full bg-[#141414] border border-zinc-800 focus:border-[#CC0000] text-white text-xs pl-10 pr-4 py-3 outline-none font-mono transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400 block">
                  Password
                </label>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••••••"
                  className="w-full bg-[#141414] border border-zinc-800 focus:border-[#CC0000] text-white text-xs pl-10 pr-4 py-3 outline-none font-mono transition-colors"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#CC0000] hover:bg-white hover:text-black text-white font-black uppercase tracking-widest text-xs h-12 rounded-none transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer mt-6"
            >
              {loading ? (
                <span>Verifying Credentials...</span>
              ) : (
                <>
                  <span>Sign In to Admin Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          {/* Quick Default Credential Helper Note */}
          <div className="mt-8 pt-6 border-t border-zinc-900 text-center">
            <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-2xs text-[11px] font-mono text-zinc-400 text-left space-y-1">
              <span className="text-[10px] text-[#CC0000] font-black uppercase tracking-wider block">Admin Credentials</span>
              <div><strong className="text-zinc-300">Email:</strong> admin@pavingrisers.com</div>
              <div><strong className="text-zinc-300">Password:</strong> Paving#1171</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-[10px] font-mono text-zinc-600 border-t border-zinc-900 relative z-10">
        Paving Risers USA // Secure Administrative CMS Engine
      </footer>

    </div>
  );
}
