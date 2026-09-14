'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PlayCircle, ShieldCheck, HardHat, FileText, Send, Building2, Truck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabaseClient';

export default function QuoteRequestPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      product_type: selectedProduct || 'not-selected',
      specifications: {
        quantity: formData.get('quantity'),
        rise: formData.get('rise'),
        material: formData.get('material')
      },
      full_name: formData.get('fullName'),
      company_name: formData.get('company'),
      work_email: formData.get('email'),
      phone_number: formData.get('phone'),
      delivery_zip: formData.get('zip')
    };

    try {
      const { error } = await supabase
        .from('quote_requests')
        .insert([data]);
        
      if (error) throw error;
      
      setIsSubmitted(true);
      e.currentTarget.reset();
      
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-[#CC0000] selection:text-white pb-0">
      
      {/* ========================================= */}
      {/* 1. CINEMATIC VIDEO HERO                   */}
      {/* ========================================= */}
      <div className="relative w-full h-[60vh] min-h-[400px] flex items-center border-b border-white/10 overflow-hidden">
        
        {/* Full Bleed Background Video */}
        <video autoPlay loop muted playsInline  
           
           
           
          
          onEnded={(e) => e.currentTarget.play()}
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale mix-blend-screen scale-105"
        >
          <source src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/catch_basin_riser/catch_basin_riser_overview.mp4`} type="video/mp4" />
        </video>
        
        {/* Gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
        
        <div className="relative z-10 w-full px-10 md:px-20 pt-20 max-w-[1600px] mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#CC0000]/30 bg-[#CC0000]/10 backdrop-blur-md rounded-full mb-8">
            <Building2 className="w-4 h-4 text-[#CC0000]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#CC0000]">Municipal Sales Desk</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 shadow-black drop-shadow-2xl">
            Wholesale <br />
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px white' }}>Quote Portal</span>
          </h1>
          
          <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-xl border-l-4 border-[#CC0000] pl-6 bg-black/40 p-4 backdrop-blur-sm shadow-xl">
            Configure your bulk infrastructure order. Direct-from-foundry pricing for DOT contractors, municipalities, and wholesale distributors.
          </p>
        </div>
      </div>

      {/* ========================================= */}
      {/* 2. MAIN QUOTING DASHBOARD                 */}
      {/* ========================================= */}
      <div className="w-full px-10 md:px-20 py-16 max-w-[1600px] mx-auto">
        <div className="flex flex-col xl:flex-row gap-16 items-start">
          
          {/* LEFT: THE FORM (Interactive & Visual) */}
          <div className="xl:w-2/3 w-full space-y-16">
            
            {/* Step 1: Visual Product Selection */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="w-8 h-8 rounded-full bg-[#CC0000] text-white flex items-center justify-center font-black text-sm">1</div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide">Select Product Class</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Visual Option: Catch Basin */}
                <div 
                  onClick={() => setSelectedProduct('catch-basin')}
                  className={`relative aspect-[4/5] bg-black border ${selectedProduct === 'catch-basin' ? 'border-[#CC0000] shadow-[0_0_30px_rgba(204,0,0,0.2)]' : 'border-white/10 hover:border-white/30'} cursor-pointer group overflow-hidden transition-all duration-300`}
                >
                  <video autoPlay loop muted playsInline      onEnded={(e) => e.currentTarget.play()} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity">
                    <source src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/catch_basin_riser/catch_basin_riser_overview.mp4`} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-black uppercase tracking-wide mb-1 group-hover:text-[#CC0000] transition-colors">Catch Basin Risers</h3>
                    <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Rectangular / Square</p>
                  </div>
                  {selectedProduct === 'catch-basin' && (
                    <div className="absolute top-4 right-4 text-[#CC0000]"><CheckCircle2 className="w-8 h-8" /></div>
                  )}
                </div>
                {/* Visual Option: Valve Box */}
                <div 
                  onClick={() => setSelectedProduct('valve-box')}
                  className={`relative aspect-[4/5] bg-black border ${selectedProduct === 'valve-box' ? 'border-[#CC0000] shadow-[0_0_30px_rgba(204,0,0,0.2)]' : 'border-white/10 hover:border-white/30'} cursor-pointer group overflow-hidden transition-all duration-300`}
                >
                  <video autoPlay loop muted playsInline      onEnded={(e) => e.currentTarget.play()} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity">
                    <source src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/valve_box_riser/full_valve_box_riser_design_1.mp4`} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-black uppercase tracking-wide mb-1 group-hover:text-[#CC0000] transition-colors">Valve Box Risers</h3>
                    <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Water / Gas Mains</p>
                  </div>
                  {selectedProduct === 'valve-box' && (
                    <div className="absolute top-4 right-4 text-[#CC0000]"><CheckCircle2 className="w-8 h-8" /></div>
                  )}
                </div>
                {/* Visual Option: Manhole */}
                <div 
                  onClick={() => setSelectedProduct('manhole')}
                  className={`relative aspect-[4/5] bg-black border ${selectedProduct === 'manhole' ? 'border-[#CC0000] shadow-[0_0_30px_rgba(204,0,0,0.2)]' : 'border-white/10 hover:border-white/30'} cursor-pointer group overflow-hidden transition-all duration-300`}
                >
                  <video autoPlay loop muted playsInline      onEnded={(e) => e.currentTarget.play()} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity">
                    <source src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/manhole_riser/adjustable_manhole_riser_steel.mp4`} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-black uppercase tracking-wide mb-1 group-hover:text-[#CC0000] transition-colors">Manhole Risers</h3>
                    <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Round / Sloped</p>
                  </div>
                  {selectedProduct === 'manhole' && (
                    <div className="absolute top-4 right-4 text-[#CC0000]"><CheckCircle2 className="w-8 h-8" /></div>
                  )}
                </div>



              </div>
            </div>

            {/* Step 2: Project Specifications */}
            <form onSubmit={handleSubmit} className="space-y-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="w-8 h-8 rounded-full bg-[#CC0000] text-white flex items-center justify-center font-black text-sm">2</div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide">Project Specs & Quantities</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Estimated Quantity</label>
                  <input type="number" name="quantity" required placeholder="e.g. 150" className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#CC0000] p-4 text-white font-mono outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Required Rise (Inches)</label>
                  <input type="text" name="rise" placeholder="e.g. 1.5&quot; to 3&quot;" className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#CC0000] p-4 text-white font-mono outline-none transition-colors" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Material Specification</label>
                  <select name="material" className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#CC0000] p-4 text-white font-bold outline-none transition-colors appearance-none cursor-pointer">
                    <option>Black Coated (Standard)</option>
                    <option>Ductile Iron (Heavy Duty)</option>
                    <option>A36 Fabricated Steel</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-black text-sm">3</div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide">Contractor Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Full Name</label>
                  <input type="text" name="fullName" required className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#CC0000] p-4 text-white outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Company Name</label>
                  <input type="text" name="company" className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#CC0000] p-4 text-white outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Work Email</label>
                  <input type="email" name="email" required className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#CC0000] p-4 text-white outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Phone Number</label>
                  <input type="tel" name="phone" className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#CC0000] p-4 text-white outline-none transition-colors" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Delivery Zip Code (For Freight Estimate)</label>
                  <input type="text" name="zip" className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#CC0000] p-4 text-white font-mono outline-none transition-colors" />
                </div>
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting || isSubmitted} className={`w-full ${isSubmitted ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-[#CC0000] text-white hover:bg-white hover:text-black'} font-black uppercase tracking-[0.2em] h-20 text-lg transition-colors rounded-none group flex items-center justify-center gap-4`}>
              {isSubmitting ? 'Encrypting & Sending...' : isSubmitted ? 'Quote Request Sent' : 'Submit Request for Quote'}
              {!isSubmitting && !isSubmitted && <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />}
            </Button>
            </form>

          </div>


          {/* RIGHT: THE STICKY VISUAL/INFO SIDEBAR */}
          <div className="xl:w-1/3 w-full sticky top-32 space-y-8">
            
            {/* Dynamic Product Image based on selection (or default) */}
            <div className="w-full aspect-square bg-[#0A0A0A] border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0" />
              <div className="absolute inset-0 flex items-center justify-center z-10 p-8">
                <Image 
                  src={
                    selectedProduct === 'catch-basin' ? `/images/catch_basin_riser/rectangle_catch_basin_riser_right.png` : 
                    selectedProduct === 'valve-box' ? `/images/valve_box_riser/valve_box_riser_4in.jpeg` : 
                    `/images/manhole_riser/round_manhole_riser_iron_finish.png`
                  }
                  alt="Product Rendering" 
                  fill
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl" 
                />
              </div>
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-[#CC0000] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1">
                  {selectedProduct === 'catch-basin' ? 'Catch Basin Frame' : 
                   selectedProduct === 'valve-box' ? 'Valve Box Cover' : 
                   'Manhole Solid Ring'}
                </span>
              </div>
            </div>

            {/* Info Cards */}
            <div className="bg-[#0A0A0A] border border-white/10 p-8 space-y-6">
              <div className="flex gap-4 items-start">
                <Truck className="w-6 h-6 text-[#CC0000] shrink-0" />
                <div>
                  <h4 className="font-black uppercase tracking-wider text-sm mb-1">Freight Shipping Available</h4>
                  <p className="text-zinc-400 text-xs font-medium leading-relaxed">Palletized LTL shipping direct from our NY or FL foundries to your jobsite.</p>
                </div>
              </div>
              
              <div className="h-[1px] w-full bg-white/10" />
              
              <div className="flex gap-4 items-start">
                <ShieldCheck className="w-6 h-6 text-[#CC0000] shrink-0" />
                <div>
                  <h4 className="font-black uppercase tracking-wider text-sm mb-1">DOT Pre-Approved</h4>
                  <p className="text-zinc-400 text-xs font-medium leading-relaxed">Our iron meets or exceeds Heavy-Duty Paving Grade & Load Rating: See individual product specification heavy traffic load specifications.</p>
                </div>
              </div>
            </div>

            {/* Call Action */}
            <div className="bg-white p-8">
              <p className="text-black text-xs font-black uppercase tracking-widest mb-2">Need Immediate Assistance?</p>
              <p className="text-4xl font-black tracking-tighter text-black">+1 (516) 252-1111</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
