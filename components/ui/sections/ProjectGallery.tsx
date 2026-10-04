'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- DATA ---
const CATEGORIES = [
  "All",
  "Municipal Roadways",
  "Commercial Dept",
  "Industrial Heavy",
  "Residential",
  "Highway & DOT",
  "Airport Infra",
  "Water & Sewer",
  "Telecom Utility",
  "Parks & Rec",
  "Custom Fab"
];

const PROJECTS = [
  // 1. Municipal Roadways
  {
    id: 101,
    title: "Ben & Ben's City Center Resurfacing: Manhole Adustments",
    category: "Municipal Roadways",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/muni-1.jpg`,
  },
  {
    id: 102,
    title: "Main St. Storm Drain Upgrade by Ben & Ben's",
    category: "Municipal Roadways",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/muni-2.jpg`,
  },

  // 2. Commercial Developments
  {
    id: 201,
    title: "Ben & Ben's Retail Plaza: Parking Lot Drainage",
    category: "Commercial Dept",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/comm-1.jpg`,
  },
  {
    id: 202,
    title: "Tech Park Utility Access Frames",
    category: "Commercial Dept",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/comm-2.jpg`,
  },
  {
    id: 203,
    title: "Ben & Ben's Hotel Driveway: Leveling Risers",
    category: "Commercial Dept",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/comm-3.jpg`,
  },

  // 3. Industrial Heavy Duty
  {
    id: 301,
    title: "Ben & Ben's Logistics Hub: 50-Ton Loading Dock",
    category: "Industrial Heavy",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/ind-1.jpg`,
  },
  {
    id: 302,
    title: "Factory Waste Water Access Points",
    category: "Industrial Heavy",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/ind-2.jpg`,
  },

  // 4. Residential Subdivisions
  {
    id: 401,
    title: "Ben & Ben's Oakwood Estates: Curb Inlets",
    category: "Residential",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/res-1.jpg`,
  },
  {
    id: 402,
    title: "Suburban Water Meter Box Risers",
    category: "Residential",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/res-2.jpg`,
  },

  // 5. Highway & DOT
  {
    id: 501,
    title: "Ben & Ben's Interstate 95: High Speed Grates",
    category: "Highway & DOT",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/hwy-1.jpg`,
  },
  {
    id: 502,
    title: "State Route 9 Bridge Scupper Drains",
    category: "Highway & DOT",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/hwy-2.jpg`,
  },

  // 6. Airport Infrastructure
  {
    id: 601,
    title: "Ben & Ben's Tarmac Repair: Extra Heavy Duty Risers",
    category: "Airport Infra",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/air-1.jpg`,
  },
  {
    id: 602,
    title: "Runway Lighting & Utility Vault Access",
    category: "Airport Infra",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/air-2.jpg`,
  },

  // 7. Water & Sewer Utilities
  {
    id: 701,
    title: "Sanitary Sewer Rehab: Watertight Frames",
    category: "Water & Sewer",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/water-1.jpg`,
  },
  {
    id: 702,
    title: "Ben & Ben's Water Main Valve Box Extensions",
    category: "Water & Sewer",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/water-2.jpg`,
  },

  // 8. Telecommunications
  {
    id: 801,
    title: "Ben & Ben's Fiber Optic Vault Risers",
    category: "Telecom Utility",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/tel-1.jpg`,
  },
  {
    id: 802,
    title: "Data Center Underground Utility Access",
    category: "Telecom Utility",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/tel-2.jpg`,
  },

  // 9. Parks & Recreation
  {
    id: 901,
    title: "City Park Walkways: Decorative Catch Basins",
    category: "Parks & Rec",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/park-1.jpg`,
  },
  {
    id: 902,
    title: "Ben & Ben's Sports Complex Field Drainage",
    category: "Parks & Rec",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/park-2.jpg`,
  },

  // 10. Custom Fabrication
  {
    id: 1001,
    title: "Ben & Ben's Historic District: Custom Iron Risers",
    category: "Custom Fab",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/cust-1.jpg`,
  },
  {
    id: 1002,
    title: "Oversized Rectangular Inlet Fabrication",
    category: "Custom Fab",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/projects/cust-2.jpg`,
  }
];
export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section className="bg-white py-8 border-t border-gray-100">
      <div className="container mx-auto px-4">

        {/* --- HEADER --- */}
        <div className="mb-12">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-6">
            Featured <span className="text-[#CC0000]">Projects</span>
          </h2>

          {/* --- FILTER BUTTONS --- */}
          {/* Matches the style of image_5c9c7b.jpg: Simple rectangular buttons */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 border text-sm font-bold uppercase tracking-wider transition-all duration-200",
                  activeCategory === cat
                    ? "bg-[#0F0F0F] text-white border-black"  // Active State
                    : "bg-white text-gray-600 border-gray-300 hover:border-[#CC0000] hover:text-[#CC0000]" // Inactive State
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- PROJECT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">

              {/* Image Container - Architectural Style */}
              <div className="relative aspect-[4/3] bg-gray-100 border border-gray-200 overflow-hidden mb-3">
                {/* Fallback styling if image missing */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 text-gray-300">
                  <span className="font-mono text-xs uppercase">{project.category}</span>
                </div>

                {/* Real Image */}
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0F0F0F]/0 group-hover:bg-[#0F0F0F]/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white p-2 rounded-full shadow-lg">
                    <ExternalLink className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>

              {/* Title - Simple text below image as per reference */}
              <h3 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-[#CC0000] transition-colors">
                {project.title}
              </h3>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p>No projects found in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
}