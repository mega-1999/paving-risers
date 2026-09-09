import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Same in Thirteen Provinces in Canada',
  description: 'Get wholesale paving risers and infrastructure castings across all 13 Canadian provinces. Request a project quote for catch basin, manhole & valve box risers.',
  keywords: 'paving risers Canada, paving risers supplier Canada, paving risers wholesale Canada, paving risers manufacturer Canada, utility risers Canada, manhole risers Canada, catch basin risers Canada, valve box risers Canada, infrastructure castings Canada, paving products Canada, asphalt risers Canada, road construction products Canada, construction supplies Canada, municipal infrastructure products, paving contractors Canada, paving supplies Canada, riser rings Canada, manhole adjustment risers, catch basin riser rings, quote paving risers Canada',
  alternates: {
    canonical: 'https://www.pavingrisers.com/contact/quote',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
