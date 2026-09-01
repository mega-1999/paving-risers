'use client';

import React, { useState, use } from 'react';
import { Search, X, Filter, Box, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from "@/lib/utils";
import { MOCK_FILTERS, adjustment_risers } from '@/lib/product';
import { PRODUCT_CATEGORIES } from '@/components/ui/sections/AdjustmentProducts';

const ProductCatalog = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const [openFilters, setOpenFilters] = useState<{ [key: string]: boolean }>(
    MOCK_FILTERS.reduce((acc, filter) => ({ ...acc, [filter.category]: true }), {})
  );

  // Unwrap the params safely
  const resolvedParams = use(params);
  const currentSlug = resolvedParams.slug;

  // Retrieve title based on slug
  const titleData = PRODUCT_CATEGORIES.find(c => c.slug === currentSlug);
  const rawTitle = titleData ? titleData.title : currentSlug.replace(/-/g, ' ');

  // A small helper to split title into the last word and everything else,
  // to replicate the black and red text styling: 
  // "Adjustment" (black) and "Risers" (red)
  const titleWords = rawTitle.split(' ');
  const lastWord = titleWords.length > 1 ? titleWords.pop() : '';
  const firstPart = titleWords.join(' ');


  const toggleFilter = (category: string) => {
    setOpenFilters((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const handleFilterChange = (category: string, option: string) => {
    setCurrentPage(1);
    setSelectedFilters((prev) => {
      const currentSelected = prev[category] || [];
      if (currentSelected.includes(option)) {
        return {
          ...prev,
          [category]: currentSelected.filter((item) => item !== option),
        };
      } else {
        return {
          ...prev,
          [category]: [...currentSelected, option],
        };
      }
    });
  };

  const filteredProducts = adjustment_risers.filter((product) => {
    if (searchTerm && !product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    for (const [category, options] of Object.entries(selectedFilters)) {
      if (options.length === 0) continue;

      switch (category) {
        case 'MATERIAL':
          if (!options.includes(product.attributes.material)) return false;
          break;
        case 'SHAPE':
          if (!options.includes(product.attributes.shape)) return false;
          break;
        case 'CLEAR OPENING':
          if (!options.includes(product.attributes.clearOpening)) return false;
          break;
        case 'SEAT THICKNESS':
          if (!options.includes(product.attributes.seatThickness)) return false;
          break;
        case 'RISE':
          if (!options.includes(product.attributes.rise)) return false;
          break;
        case 'SURFACE':
          if (!options.includes(product.attributes.surface)) return false;
          break;
        case 'CLASSIC SERIES':
          if (!options.includes(product.attributes.classicSeries)) return false;
          break;
      }
    }
    return true;
  }).sort((a, b) => {
    if (sortOption === 'name-asc') {
      return a.title.localeCompare(b.title);
    } else if (sortOption === 'name-desc') {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="bg-white min-h-screen py-16 font-sans text-black border-t border-gray-200">
      <div className="w-full px-10 md:px-20">

        {/* PAGE HEADER */}
        <div className="mb-12 border-b-4 border-black pb-4 flex flex-col md:flex-row justify-between items-end gap-4 mt-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              {firstPart} <span className="text-[#CC0000]">{lastWord}</span>
            </h1>
            <p className="text-gray-500 font-medium mt-2">Filter and search through our industrial risers.</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="text-sm font-bold uppercase tracking-widest text-[#CC0000]">
              {filteredProducts.length} Results Found
            </div>
            <div className="flex items-center gap-2">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-gray-50 border-2 border-[#CC0000] text-[#CC0000] text-xs font-bold uppercase tracking-widest p-2 outline-none focus:border-black cursor-pointer appearance-none"
              >
                <option value="default">Sort: Default</option>
                <option value="name-asc">Sort: Name (A-Z)</option>
                <option value="name-desc">Sort: Name (Z-A)</option>
              </select>
              {sortOption !== 'default' && (
                <button
                  onClick={() => setSortOption('default')}
                  className="text-gray-400 hover:text-[#CC0000] transition-colors"
                  title="Clear Sorting"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* --- SIDEBAR FILTERS --- */}
          <aside className="w-full lg:w-1/4 shrink-0">
            <div className="bg-white border-2 border-gray-100 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6 border-b-2 border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-[#CC0000]" />
                  <h2 className="text-xl text-[#CC0000] font-black uppercase tracking-wider">Filters</h2>
                </div>
                {Object.values(selectedFilters).some(arr => arr.length > 0) && (
                  <button
                    onClick={() => { setSelectedFilters({}); setCurrentPage(1); }}
                    className="text-xs font-bold text-[#CC0000] hover:text-black uppercase tracking-widest transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {MOCK_FILTERS.map((filter, index) => {
                const isOpen = openFilters[filter.category];
                return (
                  <div key={index} className="mb-8 last:mb-0">
                    <button
                      onClick={() => toggleFilter(filter.category)}
                      className="w-full flex items-center justify-between text-xs font-black text-[#CC0000] uppercase tracking-widest mb-4 bg-gray-50 p-2 border-l-4 border-[#CC0000] hover:bg-gray-100 transition-colors"
                    >
                      <span>{filter.category}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                    </button>
                    {isOpen && (
                      <div className="space-y-3 px-2 animate-in slide-in-from-top-2 fade-in duration-200">
                        {filter.options.map((option, optIndex) => {
                          const isChecked = selectedFilters[filter.category]?.includes(option) || false;
                          return (
                            <label key={optIndex} className="flex items-start cursor-pointer group">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => handleFilterChange(filter.category, option)}
                                className="mt-1 h-4 w-4 accent-[#CC0000] border-gray-300 rounded-none cursor-pointer"
                              />
                              <span className={cn(
                                "ml-3 text-sm font-medium transition-colors duration-200",
                                isChecked ? "text-black font-bold" : "text-gray-600 group-hover:text-[#CC0000]"
                              )}>
                                {option}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="w-full lg:w-3/4">

            {/* Search Bar */}
            <div className="mb-8 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-12 pr-12 py-4 bg-gray-50 border-2 border-gray-200 rounded-none text-black font-medium focus:border-black focus:ring-0 outline-none transition-colors"
                placeholder="SEARCH FOR PRODUCTS, SHAPES, OR DIMENSIONS..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setCurrentPage(1);
                  }}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#CC0000] transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Product Grid */}
            <div>
              {filteredProducts.length === 0 ? (
                /* Empty State */
                <div className="py-20 text-center border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center">
                  <Box className="w-16 h-16 text-gray-300 mb-4" />
                  <p className="text-black font-bold uppercase tracking-widest text-lg mb-2">No Products Found</p>
                  <p className="text-gray-500 mb-6">Adjust your search or filter criteria.</p>
                  <button
                    onClick={() => { setSearchTerm(''); setSelectedFilters({}); setCurrentPage(1); }}
                    className="bg-[#CC0000] hover:bg-[#0F0F0F] text-white px-6 py-3 font-bold uppercase tracking-widest text-sm transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                /* Grid Layout */
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {paginatedProducts.map((product) => (
                      <div key={product.id} className="group flex flex-col bg-white border-2 border-gray-100 hover:border-[#CC0000] transition-all duration-300 shadow-sm hover:shadow-xl rounded-sm overflow-hidden">

                        {/* Image Container */}
                        <div className="relative w-full h-64 bg-white p-6 border-b-2 border-gray-50 flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* ID Badge */}
                          <div className="absolute top-0 right-0 bg-[#CC0000] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                            {product.id}
                          </div>
                        </div>

                        {/* Content Container */}
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-sm font-black uppercase leading-snug mb-4 group-hover:text-[#CC0000] transition-colors line-clamp-3">
                            {product.title}
                          </h3>

                          <div className="space-y-2 mb-6 mt-auto">
                            {/* Specs Grid */}
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                              <div className="flex flex-col border-t border-gray-100 pt-2">
                                <span className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">Shape</span>
                                <span className="font-semibold text-black">{product.attributes.shape}</span>
                              </div>
                              <div className="flex flex-col border-t border-gray-100 pt-2">
                                <span className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">Material</span>
                                <span className="font-semibold text-black">{product.attributes.material}</span>
                              </div>
                              <div className="flex flex-col border-t border-gray-100 pt-2 col-span-2">
                                <span className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">Clear Opening</span>
                                <span className="font-semibold text-black">{product.attributes.clearOpening}</span>
                              </div>
                            </div>
                          </div>

                          {/* Action Button */}
                          <button className="w-full bg-[#0F0F0F] hover:bg-[#CC0000] text-white py-4 font-bold uppercase tracking-widest text-xs transition-colors rounded-none mt-auto">Download Catalog</button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="mt-12 flex justify-center items-center space-x-2 flex-wrap gap-y-2">
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setCurrentPage(i + 1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className={cn(
                            "w-10 h-10 flex items-center justify-center border-2 text-sm font-bold transition-colors",
                            currentPage === i + 1
                              ? "bg-[#CC0000] border-[#CC0000] text-white"
                              : "bg-white border-gray-200 text-black hover:border-black hover:text-[#CC0000]"
                          )}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

          </main>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;