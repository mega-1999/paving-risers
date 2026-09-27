'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminRootPage() {
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem('paving_admin_authenticated');
    if (isAuth === 'true') {
      router.replace('/admin/dashboard');
    } else {
      router.replace('/admin/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white font-mono text-xs">
      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#CC0000] animate-ping" />
        <span>Loading Admin Control Center...</span>
      </div>
    </div>
  );
}
