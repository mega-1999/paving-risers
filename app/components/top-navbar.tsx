'use client'

import { useState } from 'react';
import { ChevronDown, Facebook, Instagram, Linkedin, Twitter, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const topMenuItems = [
  { label: 'INDUSTRY SOLUTIONS', href: '/industry-solutions' },
  { label: 'CONTRACTOR BENEFITS', href: '/paving-advantage' },
  { label: 'PRO SERVICE', href: '/pro-service' }
];
// 1. Define Options Data
const languageOptions = [
  { label: "English-USD", flag: "🇺🇸", id: "en" },
  { label: "Arabic-JOD", flag: "🇯🇴", id: "ar" },
  { label: "French-EUR", flag: "🇫🇷", id: "fr" },
]

const countryOptions = [
  { label: "USA", flag: "🇺🇸", id: "us" },
  { label: "Canada", flag: "🇨🇦", id: "ca" },
  { label: "Latin America", flag: "🇧🇷", id: "lat" }, // Used Brazil as a representative flag
  { label: "North America", flag: "🌎", id: "na" },  // Changed "America" to "North America" or use 🌎
  { label: "Caribbean", flag: "🇯🇲", id: "car" },    // Used Jamaica as a representative flag
  { label: "Europe", flag: "🇪🇺", id: "eu" },        // EU Flag
]
const TopNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languageOptions[0])
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0])
  return (
    <div className='w-full relative z-50'>

      {/* --- ALERTS MARQUEE BANNER --- */}
      <div className="bg-[#CC0000] text-white w-full py-1.5 overflow-hidden flex whitespace-nowrap">
        <style>{`
          @keyframes scroll-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-marquee {
            display: flex;
            white-space: nowrap;
            animation: scroll-marquee 60s linear infinite;
          }
        `}</style>
        <div className="animate-scroll-marquee">
          {/* We duplicate the text twice to create a seamless infinite scroll loop */}
          <div className="flex shrink-0">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-6 text-[10px] font-normal uppercase tracking-widest flex items-center gap-2">
                🚧 Site is Under Construction
              </span>
            ))}
          </div>
          <div className="flex shrink-0">
            {[...Array(10)].map((_, i) => (
              <span key={i + 10} className="mx-6 text-[10px] font-normal uppercase tracking-widest flex items-center gap-2">
                🚧 Site is Under Construction
              </span>
            ))}
          </div>
        </div>
      </div>

      <nav className="bg-neutral-800 text-neutral-200 w-full shadow-md">
        <div className="w-full px-10 md:px-20">
          <div className="flex justify-between items-center h-10 gap-4">

            {/* --- Left Menu Items (Scrollable on Mobile) --- */}
            <div className="flex space-x-4 lg:space-x-6 items-center overflow-x-auto hide-scrollbar whitespace-nowrap">
              {topMenuItems.map((item) => (
                <Link
                  className='text-[10px] md:text-xs font-semibold hover:text-[#CC0000] transition-colors tracking-wide'
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* --- Middle Certification Buttons (White bg, Hover Red) --- */}
            <div className="hidden sm:flex items-center gap-2 mx-auto">
              <Link
                href="#"
                className="bg-white text-black font-black hover:bg-[#CC0000] hover:text-white text-[10px] uppercase tracking-wider px-3 py-1 transition-all duration-300 shadow-sm"
              >
                USA Certification
              </Link>
              <Link
                href="#"
                className="bg-white text-black font-black hover:bg-[#CC0000] hover:text-white text-[10px] uppercase tracking-wider px-3 py-1 transition-all duration-300 shadow-sm"
              >
                SGS Certification
              </Link>
            </div>

            {/* --- Right Side Icons & Dropdowns --- */}
            <div className="flex items-center space-x-3 md:space-x-4 shrink-0">

              {/* --- LANGUAGE DROPDOWN --- */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-center gap-1 text-[10px] md:text-xs hover:text-[#CC0000] transition-colors outline-none">
                  <span className="text-[10px] md:text-xs">{selectedLang.flag}</span>
                  <span className="hidden sm:inline">{selectedLang.label}</span>
                  <span className="sm:hidden">{selectedLang.id.toUpperCase()}</span>
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="min-w-[120px]">
                  {languageOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.id}
                      onClick={() => setSelectedLang(option)}
                      className="text-xs cursor-pointer gap-2"
                    >
                      <span className="text-xs">{option.flag}</span> {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* --- COUNTRY DROPDOWN --- */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-center gap-1 text-[10px] md:text-xs hover:text-[#CC0000] transition-colors outline-none">
                  <span className="text-[10px] md:text-xs">{selectedCountry.flag}</span>
                  <span className="hidden sm:inline">{selectedCountry.label}</span>
                  <span className="sm:hidden">{selectedCountry.id.toUpperCase()}</span>
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="min-w-[120px]">
                  {countryOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.id}
                      onClick={() => setSelectedCountry(option)}
                      className="text-xs cursor-pointer gap-2"
                    >
                      <span className="text-xs">{option.flag}</span> {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default TopNavbar