'use client';

import React from 'react';

export default function FooterVideoBanner() {
  return (
    <section className="w-full relative overflow-hidden bg-black flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto pointer-events-none"
        src="/videos/app_showcase/footer_all_product.mp4"
      />
      {/* Subtle overlay to ensure the video blends perfectly with the dark aesthetic */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </section>
  );
}
