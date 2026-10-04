'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 0% to 100% animated progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 70);

    // Fallback timer
    const timer = setTimeout(() => {
      handleComplete();
    }, 5500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const handleComplete = () => {
    setFade(true);
    setTimeout(() => setShow(false), 800); // Allow time for fade transition
  };

  if (!show) return null;

  const videoUrl = '/videos/animations/paving_logo_animation.mp4';

  return (
    <>
      <div 
        className={`fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out px-6 md:px-12 ${
          fade ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="w-full max-w-5xl flex flex-col items-center space-y-10 z-10">
          
          {/* --- TOP: 2-COLUMN SIDE-BY-SIDE (LEFT ROAD, RIGHT VIDEO) --- */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12">
            
            {/* LEFT COLUMN: ANIMATED ROAD */}
            <div className="md:col-span-6 flex items-center justify-center">
              <div className="relative w-full h-48 sm:h-56 bg-white overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full absolute inset-0">
                  {/* Dark Asphalt Road Surface */}
                  <polygon points="45,0 55,0 100,100 0,100" fill="#18181b" />
                  
                  {/* White Side Lane Borders */}
                  <polygon points="48.8,0 49.6,0 14,100 10,100" fill="#ffffff" />
                  <polygon points="50.4,0 51.2,0 90,100 86,100" fill="#ffffff" />

                  {/* Center Moving Red Dashes */}
                  <line 
                    x1="50" y1="0" x2="50" y2="100" 
                    stroke="#CC0000" 
                    strokeWidth="1.5" 
                    strokeDasharray="4 6" 
                    className="animate-road-dash"
                  />
                </svg>
                <style jsx>{`
                  @keyframes dash-move {
                    from { stroke-dashoffset: 0; }
                    to { stroke-dashoffset: -20; }
                  }
                  .animate-road-dash {
                    animation: dash-move 1s linear infinite;
                  }
                `}</style>
              </div>
            </div>

            {/* RIGHT COLUMN: VIDEO ANIMATION */}
            <div className="md:col-span-6 flex items-center justify-center">
              <div className="relative w-full max-w-lg overflow-hidden flex items-center justify-center p-2">
                <video
                  src={videoUrl}
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  suppressHydrationWarning
                  onEnded={handleComplete}
                  className="w-full h-auto object-contain outline-none border-0 shadow-none mix-blend-multiply scale-[1.02]"
                  style={{ mixBlendMode: 'multiply', clipPath: 'inset(2px 6px 2px 6px)' }}
                />
              </div>
            </div>

          </div>

          {/* --- BOTTOM: FULL WIDTH PROGRESS LOADING BAR COVERING BOTH AREAS --- */}
          <div className="w-full space-y-2.5 pt-4 border-t border-slate-100">
            <div className="flex justify-between items-center text-xs font-mono font-bold uppercase tracking-widest text-slate-600">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#CC0000] animate-ping" />
                PAVING ROADWAY MATRIX
              </span>
              <span className="text-[#CC0000] font-black">{progress}%</span>
            </div>

            {/* Full Width Progress Track */}
            <div className="relative w-full h-3 bg-slate-100 border border-slate-300 rounded-full overflow-hidden shadow-inner p-0.5">
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(to right, #000 50%, transparent 50%)',
                  backgroundSize: '12px 100%'
                }}
              />
              <div 
                className="h-full bg-gradient-to-r from-slate-900 via-[#CC0000] to-[#CC0000] rounded-full transition-all duration-100 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#CC0000] rounded-full shadow-[0_0_8px_#CC0000]" />
              </div>
            </div>

            {/* One-time Status Notice (Protected with data-nosnippet so Google SEO is not affected) */}
            <div data-nosnippet className="flex items-center justify-center gap-2 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 border border-slate-200 rounded-full text-[10px] font-mono uppercase tracking-wider text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000] animate-pulse" />
                <span>Website System Updates In Progress </span>
              </div>
            </div>
 
          </div>

        </div>
      </div>
    </>
  );
}
