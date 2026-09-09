'use client';

import React from 'react';

export default function StopSignDivider() {
  return (
    <section className="relative bg-[#0F0F0F] py-12 overflow-hidden select-none">

      {/* Road line animation */}
      <style>{`
        @keyframes road-lines-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes road-lines-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .road-left { animation: road-lines-left 12s linear infinite; }
        .road-right { animation: road-lines-right 12s linear infinite; }
      `}</style>
      
      {/* Asphalt texture */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="w-full px-10 md:px-20 relative z-10">
        <div className="flex items-center justify-center gap-6 md:gap-10">
          
          {/* Left road line — animated */}
          <div className="hidden sm:flex items-center flex-1 overflow-hidden">
            <div className="flex gap-4 w-max road-left">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={`l-${i}`} className="w-10 h-[3px] bg-yellow-400/70 shrink-0" />
              ))}
            </div>
          </div>

          {/* Stop Sign 1 */}
          <div className="shrink-0 group">
            <svg viewBox="0 0 120 140" className="w-16 h-20 md:w-20 md:h-24 drop-shadow-lg">
              {/* Post */}
              <rect x="55" y="95" width="10" height="45" fill="#666" rx="2" />
              {/* Octagon stop sign */}
              <polygon 
                points="60,5 85,15 95,40 95,65 85,90 60,100 35,90 25,65 25,40 35,15"
                fill="#CC0000"
                stroke="#fff"
                strokeWidth="4"
              />
              <text x="60" y="62" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1">
                STOP
              </text>
            </svg>
          </div>

          {/* Center content */}
          <div className="text-center shrink-0 space-y-1">
            <p className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.3em] text-yellow-400/80">
              U.S. Road Infrastructure
            </p>
            <p className="text-xs md:text-sm font-black uppercase tracking-tight text-white/90">
              Built for American Roads
            </p>
            <div className="flex items-center justify-center gap-3 pt-1">
              <span className="w-2 h-2 bg-[#CC0000] rounded-full animate-pulse" />
              <span className="text-[9px] font-mono text-white/50 uppercase tracking-widest">FHWA • MUTCD • DOT Compliant</span>
              <span className="w-2 h-2 bg-[#CC0000] rounded-full animate-pulse" />
            </div>
          </div>

          {/* Stop Sign 2 */}
          <div className="shrink-0 group">
            <svg viewBox="0 0 120 140" className="w-16 h-20 md:w-20 md:h-24 drop-shadow-lg">
              {/* Post */}
              <rect x="55" y="95" width="10" height="45" fill="#666" rx="2" />
              {/* Octagon stop sign */}
              <polygon 
                points="60,5 85,15 95,40 95,65 85,90 60,100 35,90 25,65 25,40 35,15"
                fill="#CC0000"
                stroke="#fff"
                strokeWidth="4"
              />
              <text x="60" y="62" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1">
                STOP
              </text>
            </svg>
          </div>

          {/* Right road line — animated */}
          <div className="hidden sm:flex items-center flex-1 overflow-hidden">
            <div className="flex gap-4 w-max road-right">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={`r-${i}`} className="w-10 h-[3px] bg-yellow-400/70 shrink-0" />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
