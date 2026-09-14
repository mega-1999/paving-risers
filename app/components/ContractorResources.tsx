import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RESOURCES = [
  {
    id: 'safety',
    title: 'Safety & DOT Compliance',
    description: 'Learn best practices for minimizing jobsite risks and ensuring your adjustment risers meet local DOT load ratings.',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/manhole_riser/adjustable_manhole_riser_low_screw_coated.png`,
    href: '#safety'
  },
  {
    id: 'installation',
    title: 'Installation Guides',
    description: 'Get step-by-step tips from the foundry on setting, sealing, and expanding heavy-duty cast iron frames.',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/square_catch_basin_riser_coated.png`,
    href: '#installation'
  },
  {
    id: 'case-studies',
    title: 'Case Studies',
    description: 'See how our direct-to-site delivery helped municipal road crews overcome tight resurfacing deadlines.',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/rectangle_catch_basin_riser_cast_iron.png`,
    href: '#case-studies'
  }
];

export default function ContractorResources() {
  return (
    <section className="bg-gray-50  font-sans py-12">
      <div className="w-full px-10 md:px-20 space-y-6">

        {/* --- HEADER --- */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-wide">
            Contractor Resource Center
          </h2>
          <Link
            href="#all-resources"
            className="text-[#CC0000] font-medium hover:underline transition-colors"
          >
            Explore all technical resources
          </Link>
        </div>

        {/* --- 3-COLUMN HORIZONTAL CARD GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {RESOURCES.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="flex flex-row bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group border border-gray-100 min-h-[160px]"
            >

              {/* Image Section (Left side) */}
              <div className="relative w-2/5 shrink-0 overflow-hidden bg-white border-r border-gray-100 p-2">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Section (Right side) */}
              <div className="w-3/5 p-5 flex flex-col justify-center">
                <h3 className="text-gray-900 font-bold text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}