import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const SERVICE_OPTIONS = [
  {
    id: 'online',
    title: "Online Ordering & Tracking",
    description: "Manage your riser inventory from the truck. Use our contractor portal to check live stock for standard cast iron rings, submit specs for custom fabrication, and track your jobsite deliveries in real-time.",
    linkText: "Explore online tools",
    linkHref: "#online-tools",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/d-shape.png` // Replace with an image of a contractor on a tablet
  },
  {
    id: 'jobsite',
    title: "Heavy-Duty Jobsite Delivery",
    description: "Don't waste time making warehouse runs. We deliver pallets of steel and ductile iron adjustment risers straight to your staging area. Our logistics crew ensures you have the exact sizes you need before the road gets torn up.",
    linkText: "Find delivery solutions",
    linkHref: "#delivery",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/d-shape.png` // Replace with an image of a contractor on a tablet
  },
  {
    id: 'branch',
    title: "Pro Desk & Warehouse Support",
    description: "Drop by our warehouse to get hands-on help from our infrastructure experts. We can help you match degraded manhole seats with the right expandable rings, walk you through DOT specs, and set up commercial credit terms.",
    linkText: "Connect with our pro desk",
    linkHref: "#pro-desk",
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/d-shape.png` // Replace with an image of a contractor on a tablet
  }
];

export default function ServiceOptionsGrid() {
  return (
    <section className="bg-white font-sans">
      <div className="p-6 md:p-8 lg:p-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SERVICE_OPTIONS.map((service) => (
            <div key={service.id} className="flex flex-col h-full group">

              {/* Image Container */}
              <div className="relative w-full h-56 mb-6 overflow-hidden bg-gray-100 rounded-sm">
                {/* Fallback styling if image is missing */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-xs uppercase tracking-widest z-0">

                </div>

                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 z-10"
                />
              </div>

              {/* Text Content */}
              <div className="flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bottom Link */}
                <div className="mt-auto">
                  <a
                    href={service.linkHref}
                    className="inline-flex items-center text-[#CC0000] font-bold hover:text-black transition-colors"
                  >
                    {service.linkText}
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}