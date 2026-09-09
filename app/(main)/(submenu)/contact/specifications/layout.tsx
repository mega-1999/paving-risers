import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Paving Risers - Ultimate Paving Risers',
  description: 'Best Paving Risers and Ultimate Paving Risers for durable manhole frames and covers. Heavy-duty, DOT-compliant castings built for roads and infrastructure.',
  keywords: 'Paving Risers, Ultimate Paving Risers, manhole frame and cover, paving risers, manhole covers, manhole frames, cast iron manhole covers, heavy duty manhole covers, DOT compliant manhole covers, utility covers, roadway manhole covers, infrastructure products',
  alternates: {
    canonical: 'https://www.pavingrisers.com/contact/specifications',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
