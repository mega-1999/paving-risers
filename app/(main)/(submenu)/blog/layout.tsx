import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Same to All Fifty States in USA',
  description: 'Shop heavy-duty paving risers for manholes, catch basins and roadways. Paving Risers delivers durable, DOT-compliant infrastructure solutions nationwide.',
  keywords: 'paving risers, paving riser, manhole paving risers, adjustable paving risers, road paving risers, manhole riser rings, catch basin risers, infrastructure products, roadway infrastructure, DOT compliant risers, paving products USA, paving risers USA, manhole solutions, road construction products, drainage risers, utility risers, nationwide paving risers, paving riser supplier, paving riser manufacturer, USA paving solutions',
  alternates: {
    canonical: 'https://www.pavingrisers.com/blog',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
