'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Safety fallback timer in case the video can't play or end event fails
    // Assuming the animation is around 4-6 seconds.
    const timer = setTimeout(() => {
      handleComplete();
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setFade(true);
    setTimeout(() => setShow(false), 800); // Allow time for fade transition
  };

  if (!show) return null;

  const videoUrl = `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/paving_logo_animation.mp4`;

  return (
    <>
      <link rel="preload" as="video" type="video/mp4" href={videoUrl} />
      <div 
      className={`fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
        fade ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-full max-w-2xl overflow-hidden flex items-center justify-center px-4">
        <video
          src={videoUrl}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleComplete}
          className="w-full h-auto object-contain outline-none border-0 shadow-none mix-blend-multiply scale-[1.02]"
          style={{ mixBlendMode: 'multiply', clipPath: 'inset(2px 6px 2px 6px)' }}
        />
      </div>
      {/* Optional loading bar/indicator could go here */}
    </div>
    </>
  );
}
