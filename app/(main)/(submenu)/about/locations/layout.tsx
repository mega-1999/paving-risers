import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paving Risers for NYC - Paving Risers for DOT',
  description: 'Paving Risers provides durable paving risers and manhole frames for NYC DOT projects, with heavy-duty castings engineered for traffic and compliance.',
  keywords: 'Paving Risers, NYC paving risers, paving risers for NYC DOT, NYC DOT paving risers, DOT paving risers, manhole frame and cover, NYC manhole frame cover, DOT manhole covers, manhole riser rings, paving adjustment rings, cast iron manhole frames, NYC DOT manhole frames, street paving risers, utility manhole covers, heavy duty manhole frames',
  alternates: {
    canonical: 'https://www.pavingrisers.com/about/locations',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
