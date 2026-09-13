'use client';

import React from 'react';

// Premium MUTCD Standard Octagon Highway Stop Sign SVG
const RealisticStopSign = ({ className = "w-16 h-20 md:w-20 md:h-24" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 145"
    className={`${className} transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* High-intensity prismatic retroreflective red gradient */}
      <linearGradient id="stopRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E60000" />
        <stop offset="50%" stopColor="#C40000" />
        <stop offset="100%" stopColor="#990000" />
      </linearGradient>

      {/* Sheen reflection overlay */}
      <linearGradient id="signSheen" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.28" />
        <stop offset="45%" stopColor="#ffffff" stopOpacity="0.08" />
        <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
      </linearGradient>

      {/* Galvanized Steel Post Gradient */}
      <linearGradient id="galvanizedPost" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#5B6570" />
        <stop offset="25%" stopColor="#9AA2AB" />
        <stop offset="50%" stopColor="#DDE2E7" />
        <stop offset="75%" stopColor="#8A939E" />
        <stop offset="100%" stopColor="#4A535C" />
      </linearGradient>

      {/* Outer Sign Drop Shadow */}
      <filter id="plateShadow" x="-10%" y="-10%" width="125%" height="125%">
        <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.7" />
      </filter>
    </defs>

    {/* Galvanized Perforated Steel Square Post */}
    <g>
      <rect x="55.5" y="86" width="9" height="56" fill="url(#galvanizedPost)" rx="1.5" />
      {/* Perforation holes in the post */}
      <circle cx="60" cy="96" r="1.4" fill="#1C2127" opacity="0.9" />
      <circle cx="60" cy="106" r="1.4" fill="#1C2127" opacity="0.9" />
      <circle cx="60" cy="116" r="1.4" fill="#1C2127" opacity="0.9" />
      <circle cx="60" cy="126" r="1.4" fill="#1C2127" opacity="0.9" />
      <circle cx="60" cy="136" r="1.4" fill="#1C2127" opacity="0.9" />
    </g>

    {/* Sign Plate Group with shadow */}
    <g filter="url(#plateShadow)">
      {/* Aluminum backing edge */}
      <polygon
        points="42.6,8 77.4,8 102,32.6 102,67.4 77.4,92 42.6,92 18,67.4 18,32.6"
        fill="#CBD5E1"
      />

      {/* Red Prismatic Sheeting Field */}
      <polygon
        points="43,9 77,9 101,33 101,67 77,91 43,91 19,67 19,33"
        fill="url(#stopRedGrad)"
      />

      {/* Authentic MUTCD Inset White Border */}
      <polygon
        points="43.8,12 76.2,12 98,33.8 98,66.2 76.2,88 43.8,88 22,66.2 22,33.8"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.8"
        strokeLinejoin="miter"
      />

      {/* Glass Sheen overlay */}
      <polygon
        points="43,9 77,9 101,33 101,67 77,91 43,91 19,67 19,33"
        fill="url(#signSheen)"
      />

      {/* Bold Highway Gothic "STOP" Text */}
      <text
        x="60"
        y="58"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#FFFFFF"
        style={{
          fontFamily: 'Impact, "Arial Black", -apple-system, sans-serif',
          fontWeight: 900,
          fontSize: '23px',
          letterSpacing: '0.8px',
        }}
      >
        STOP
      </text>

      {/* Mounting Hex Bolts */}
      <circle cx="60" cy="22" r="1.7" fill="#E2E8F0" stroke="#334155" strokeWidth="0.6" />
      <circle cx="60" cy="78" r="1.7" fill="#E2E8F0" stroke="#334155" strokeWidth="0.6" />
    </g>
  </svg>
);

export default function StopSignDivider() {
  return (
    <section className="relative bg-[#0a0a0a] border-y border-white/10 py-10 overflow-hidden select-none">
      {/* Continuous animated road lines keyframes */}
      <style>{`
        @keyframes road-lines-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes road-lines-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .road-left { animation: road-lines-left 14s linear infinite; }
        .road-right { animation: road-lines-right 14s linear infinite; }
      `}</style>

      {/* Subtle asphalt road texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 0.75px, transparent 0.75px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Subtle ambient highway glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] bg-red-600/10 blur-[90px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Left road line — animated highway dashes */}
          <div className="hidden sm:flex items-center flex-1 overflow-hidden mask-fade-left">
            <div className="flex gap-4 w-max road-left">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={`l-${i}`}
                  className="w-12 h-[3.5px] rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 opacity-80 shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                />
              ))}
            </div>
          </div>

          {/* Left Realistic Stop Sign */}
          <div className="shrink-0 group cursor-default">
            <RealisticStopSign className="w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28" />
          </div>

          {/* Center Industrial Highway Badge */}
          <div className="text-center shrink-0 px-3 md:px-6 py-2 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm shadow-2xl">
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
              <p className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.25em] text-yellow-400">
                U.S. Road Infrastructure
              </p>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            </div>

            <h3 className="text-sm md:text-lg font-black uppercase tracking-wider text-white">
              Engineered For American Roadways
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 pt-1 text-[9px] md:text-[10px] font-mono text-white/60 tracking-wider">
              <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10">HEAVY TRAFFIC</span>
              <span className="text-white/30">•</span>
              <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10">MUTCD SPEC</span>
              <span className="text-white/30">•</span>
              <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10">DOT COMPLIANT</span>
            </div>
          </div>

          {/* Right Realistic Stop Sign */}
          <div className="shrink-0 group cursor-default">
            <RealisticStopSign className="w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28" />
          </div>

          {/* Right road line — animated highway dashes */}
          <div className="hidden sm:flex items-center flex-1 overflow-hidden">
            <div className="flex gap-4 w-max road-right">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={`r-${i}`}
                  className="w-12 h-[3.5px] rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 opacity-80 shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
