'use client';

import React, { use } from 'react';
import { useRouter, notFound } from 'next/navigation';
import { ChevronLeft, Download, PlayCircle, FileText, Calendar, HardDrive } from 'lucide-react';

// --- MOCK DATABASE ---
const RESOURCE_DATABASE = [
  {
    slug: 'Paving-Adjust-white-paper',
    title: 'Paving-Adjust™ White Paper',
    type: 'document',
    format: 'PDF',
    size: '2.4 MB',
    date: 'August 2025',
    description: 'An in-depth technical analysis of the Paving-Adjust™ expandable riser system. This white paper covers load testing results, DOT compliance standards, and long-term cost-saving metrics for municipal roadwork compared to traditional mortar bed installations.',
  },
  {
    slug: 'installation-guidelines',
    title: 'Installation Guidelines',
    type: 'document',
    format: 'PDF',
    size: '1.1 MB',
    date: 'January 2026',
    description: 'Step-by-step field instructions for installing solid steel, cast iron, and expandable adjustment risers. Includes torque specifications, sealant recommendations, and safety protocols for high-traffic paving environments.',
  },
  {
    slug: 'adjustment-riser-brochure',
    title: 'Adjustment Riser Brochure',
    type: 'document',
    format: 'PDF',
    size: '5.8 MB',
    date: 'March 2026',
    description: 'Our complete catalog of heavy-duty adjustment risers, catch basin frames, and utility vault access solutions. Includes sizing charts and material specifications.',
  },
  {
    slug: 'manhole-riser-video',
    title: 'Adjustment Riser Installation Video',
    type: 'video',
    format: 'MP4',
    size: '1080p',
    date: 'April 2026',
    description: 'Watch our field experts demonstrate the rapid installation of a Paving-Adjust™ riser right before the paving crew lays the final asphalt layer. See exactly how the mechanical expansion lock secures the ring to the existing frame.',
  }
];

// In Next.js 15, params is a Promise that must be unwrapped
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ResourceDetailPage({ params }: PageProps) {
  // 1. Initialize router and unwrap the params promise
  const router = useRouter();
  const resolvedParams = use(params);

  // 2. Find the resource matching the unwrapped URL slug
  const resource = RESOURCE_DATABASE.find((r) => r.slug === resolvedParams.slug);

  // 3. If the slug doesn't exist, trigger Next.js 404 page
  if (!resource) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-24">
      
      {/* --- BREADCRUMB HEADER --- */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="w-full px-10 md:px-20">
          <button 
            onClick={() => router.back()} // Utilizing the router to go back
            className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#C92027] transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            BACK TO RESOURCES
          </button>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-4 max-w-5xl mt-12">
        <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* LEFT COLUMN: Icon/Thumbnail Area */}
          <div className="md:w-1/3 bg-gray-900 p-12 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-800">
            {resource.type === 'video' ? (
              <PlayCircle className="w-24 h-24 text-[#C92027] mb-6" strokeWidth={1} />
            ) : (
              <FileText className="w-24 h-24 text-[#C92027] mb-6" strokeWidth={1} />
            )}
            <h3 className="text-white font-bold tracking-widest uppercase text-sm opacity-80">
              {resource.type === 'video' ? 'Video Resource' : 'Technical Document'}
            </h3>
          </div>

          {/* RIGHT COLUMN: Details & Download */}
          <div className="md:w-2/3 p-8 md:p-12 flex flex-col">
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
              {resource.title}
            </h1>
            
            {/* Meta Tags */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-sm text-gray-500 font-medium">
                <Calendar className="w-4 h-4 mr-2 text-[#C92027]" />
                {resource.date}
              </div>
              <div className="flex items-center text-sm text-gray-500 font-medium">
                <HardDrive className="w-4 h-4 mr-2 text-[#C92027]" />
                {resource.size} ({resource.format})
              </div>
            </div>

            {/* Description */}
            <div className="text-gray-700 leading-relaxed mb-10">
              {resource.description}
            </div>

            {/* Call to Action Button */}
            <div className="mt-auto">
              {resource.type === 'video' ? (
                <button 
                  onClick={() => router.push('#play')} // Example router usage
                  className="w-full md:w-auto inline-flex items-center justify-center bg-[#C92027] hover:bg-red-800 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-sm transition-colors"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Watch Video Now
                </button>
              ) : (
                <button 
                  onClick={() => window.open(`/downloads/${resource.slug}.pdf`, '_blank')} 
                  className="w-full md:w-auto inline-flex items-center justify-center bg-[#C92027] hover:bg-red-800 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-sm transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download {resource.format}
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
      
    </div>
  );
}