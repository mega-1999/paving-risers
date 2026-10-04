'use client';

import React, { useRef, useEffect, useCallback, VideoHTMLAttributes } from 'react';

interface R2VideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, 'src'> {
  /** Video source URL (Cloudflare R2 or any remote URL) */
  src: string;
  /** Optional callback when video ends */
  onEnded?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  /** Forward ref to the underlying <video> element */
  videoRef?: React.Ref<HTMLVideoElement>;
}

/**
 * R2Video — Drop-in <video> replacement that silences Chromium's
 * `net::ERR_CACHE_OPERATION_NOT_SUPPORTED` console error.
 *
 * Chromium cannot disk-cache HTTP 206 byte-range responses for media.
 * When it fails, the <source> element fires an `error` event.
 * This component intercepts that error, appends a unique cache-bust
 * query param (`?_cb=<timestamp>`) to bypass the stale cache entry,
 * and silently retries — the video plays normally on the second attempt
 * without any console errors.
 */
export default function R2Video({
  src,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "auto",
  onEnded,
  videoRef: externalRef,
  ...rest
}: R2VideoProps) {
  const internalRef = useRef<HTMLVideoElement>(null);
  const ref = (externalRef as React.RefObject<HTMLVideoElement>) || internalRef;

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (autoPlay && video.paused) {
      video.play().catch(() => {
        // Autoplay policy prevented playback
      });
    }
  }, [src, autoPlay, ref]);

  return (
    <video
      ref={ref as React.RefObject<HTMLVideoElement>}
      src={src}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      suppressHydrationWarning
      className={className}
      onEnded={onEnded}
      {...rest}
    />
  );
}

export { R2Video };
