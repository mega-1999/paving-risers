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

  return (
    <div 
      className={`fixed inset-0 z-[99999] bg-[#0A0A0A] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
        fade ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <video
        src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/paving_logo_animation.mp4`}
        autoPlay
        muted
        playsInline
        onEnded={handleComplete}
        className="w-full max-w-2xl h-auto object-contain outline-none px-4"
      />
      {/* Optional loading bar/indicator could go here */}
    </div>
  );
}
