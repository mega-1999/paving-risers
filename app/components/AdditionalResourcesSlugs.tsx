import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Link as LinkIcon, PlayCircle } from 'lucide-react';

// --- DATA WITH SLUGS ---
const RESOURCES = [
  {
    id: 'res-1',
    title: 'Paving-Adjust™ White Paper',
    slug: 'Paving-Adjust-white-paper', // Used for routing
    type: 'document', // Determines the icon used
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_riser.811.png`, // Replace with product photo
  },
  {
    id: 'res-2',
    title: 'Installation Guidelines',
    slug: 'installation-guidelines',
    type: 'document',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Custom_Riser/D_shape_Rise__with_Iron.635.png`, // Replace with product photo
  },
  {
    id: 'res-3',
    title: 'Adjustment Riser Brochure',
    slug: 'adjustment-riser-brochure',
    type: 'document',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/Adjustbale_riser_coated_finish.808.png`, // Replace with product photo
  },
  {
    id: 'res-4',
    title: 'Manhole Riser Video',
    slug: 'manhole-riser-video',
    type: 'video',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/Round_Riser_with_screw_iron_Finish.615.png`, // Replace with product photo
  },
  {
    id: 'res-5',
    title: 'Load Test Reports',
    slug: 'load-test-reports',
    type: 'document',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_Riser_with_cast_iron.637.png`,
  },
  {
    id: 'res-6',
    title: 'Custom Fabrication Guide',
    slug: 'custom-fabrication-guide',
    type: 'document',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Custom_Riser/D_shape_Riser_with_cast_iron.636.png`,
  },
  {
    id: 'res-7',
    title: 'INFRA-RISER Specs',
    slug: 'infra-riser-specs',
    type: 'document',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/trash_racks/tr1.21.png`,
  },
  {
    id: 'res-8',
    title: 'Case Study: Highway Paving',
    slug: 'case-study-highway-paving',
    type: 'document',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Sqaure_Riser_iron.609.png`,
  }
];

export default function AdditionalResourcesSlugs() {
  return (
    <section className="bg-white w-full  font-sans border-t border-gray-100">
      <div className="px-10 md:px-20 py-12">

        {/* --- HEADER --- */}
        <h2 className="text-3xl md:text-4xl font-black text-[#CC0000] uppercase tracking-tight mb-8">
          Additional Resources
        </h2>
 
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {RESOURCES.map((resource) => (
            <Link
              key={resource.id}
              href={`/resources/${resource.slug}`}
              className="group relative w-full overflow-hidden flex flex-col transition-all duration-300 h-full bg-zinc-50 border border-zinc-200 hover:border-[#CC0000] rounded-sm shadow-sm hover:shadow-md"
            >
              {/* TOP TEXT SECTION */}
              <div className="p-4 flex justify-between items-start gap-2 z-10 relative bg-[#CC0000] shrink-0 transition-colors duration-300">
                <h3 className="text-white text-sm md:text-[15px] font-bold leading-snug">
                  {resource.title}
                </h3>
                
                {/* Type Indicator Icon */}
                <div className="text-white/80 shrink-0 mt-0.5">
                  {resource.type === 'video' ? (
                    <PlayCircle className="w-5 h-5" strokeWidth={2.5} />
                  ) : (
                    <LinkIcon className="w-5 h-5" strokeWidth={2.5} />
                  )}
                </div>
              </div> 

              {/* BOTTOM IMAGE SECTION */}
              <div className="relative w-full aspect-[4/3] bg-zinc-50 group-hover:bg-white transition-colors duration-300 overflow-hidden flex items-center justify-center border-t border-zinc-200">
                <Image
                  src={resource.imageSrc}
                  alt={resource.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}