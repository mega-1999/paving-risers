'use client';

import React from 'react';
import R2Video from './R2Video';

export default function FooterVideoBanner() {
  return (
    <section className="w-full relative overflow-hidden bg-black flex items-center justify-center">
      <R2Video
        src="https://pub-a9b7eff88c5d4cb7b2837afc51696bde.r2.dev/videos/app_showcase/footer_all_product.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        suppressHydrationWarning
        className="w-full h-auto pointer-events-none"
      />
      {/* Subtle overlay to ensure the video blends perfectly with the dark aesthetic */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </section>
  );
}
