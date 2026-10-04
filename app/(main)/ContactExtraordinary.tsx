'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Send, Phone, Mail, MapPin, HardHat, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function ContactExtraordinary() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      full_name: formData.get('fullName'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      project_requirements: formData.get('requirements'),
    };

    try {
      if (supabase) {
        const { error } = await supabase
          .from('contact_requests')
          .insert([data]);
          
        if (error) throw error;
      }
      
      setIsSubmitted(true);
      e.currentTarget.reset();
      
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-zinc-950 font-sans overflow-hidden py-8">

      {/* --- BACKGROUND ANIMATED GLOWS --- */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#CC0000]/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#CC0000]/10 rounded-full blur-[150px]"></div>

      <div className="w-full px-10 md:px-20 relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <h2 className="text-[#CC0000] font-black tracking-widest uppercase text-sm mb-4 flex items-center justify-center gap-2">
            <HardHat className="w-5 h-5" /> Direct Foundry Access
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            LET'S BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CC0000] to-red-500">TOGETHER.</span>
          </h3>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-medium">
            Skip the middleman. Send us your project specs, blueprints, or custom fabrication needs, and our engineering team will deliver a prompt, customized quote and submittal package.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* --- LEFT: 3D RENDER & CONTACT INFO --- */}
          <div className="lg:col-span-5 flex flex-col justify-center">

            {/* FLOATING 3D RENDER STAGE */}
            <div className="relative w-full h-[350px] mb-12 flex items-center justify-center group perspective-1000">
              {/* Glowing Pedestal */}
              <div className="absolute bottom-10 w-48 h-8 bg-[#CC0000]/30 rounded-[100%] blur-xl group-hover:bg-[#CC0000]/50 transition-colors duration-700"></div>

              {/* 3D Image Container (Floating Animation) */}
              <div className="relative w-120 h-120 animate-[bounce_4s_ease-in-out_infinite] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                <Image
                  src={`/images/manhole_riser/round_manhole_riser_with_screws_iron_finish.png`} // Put a high-res, transparent 3D render of a riser here
                  alt="3D Paving Riser Render"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(201,32,39,0.5)]"
                />
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 hover:border-[#CC0000]/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-[#CC0000]/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#CC0000]" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-1">VIP Pro Desk</p>
                  <p className="text-white text-xl font-medium">+1 (516) 252-1111</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 hover:border-[#CC0000]/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-[#CC0000]/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#CC0000]" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-1">Send Blueprints</p>
                  <p className="text-white text-xl font-medium">info@pavingrisers.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT: PREMIUM GLASSMORPHISM FORM --- */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">

              {/* Subtle top border highlight */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CC0000] to-transparent opacity-50"></div>

              <h3 className="text-2xl font-bold text-white mb-8">Request a Custom Quote</h3>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name & Company Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      className="w-full bg-zinc-950/50 border border-zinc-800 text-white rounded-lg px-5 py-4 focus:outline-none focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Company / Municipality</label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full bg-zinc-950/50 border border-zinc-800 text-white rounded-lg px-5 py-4 focus:outline-none focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] transition-all"
                      placeholder="City Paving Dept."
                    />
                  </div>
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-zinc-950/50 border border-zinc-800 text-white rounded-lg px-5 py-4 focus:outline-none focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full bg-zinc-950/50 border border-zinc-800 text-white rounded-lg px-5 py-4 focus:outline-none focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] transition-all"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                {/* Requirements Textarea */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Project Requirements (Specs, Sizes, Load Ratings)</label>
                  <textarea
                    name="requirements"
                    rows={4}
                    required
                    className="w-full bg-zinc-950/50 border border-zinc-800 text-white rounded-lg px-5 py-4 focus:outline-none focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] transition-all resize-none"
                    placeholder="We need 50 expandable adjustment rings for a highway resurfacing project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full h-16 rounded-lg font-black uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_40px_-10px_rgba(201,32,39,0.5)] hover:shadow-[0_0_60px_-10px_rgba(201,32,39,0.7)]
                    ${isSubmitted ? 'bg-green-500 text-white' : 'bg-[#CC0000] hover:bg-red-600 text-white'}
                    ${isSubmitting ? 'opacity-80 cursor-wait' : ''}
                  `}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Encrypting & Sending...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> Specs Received
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Submit to Engineering <Send className="w-4 h-4" />
                    </span>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}