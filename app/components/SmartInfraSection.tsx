import React from 'react';
import Image from 'next/image';
import {
  Cpu,
  Radio,
  Bot,
  Activity,
  ShieldAlert,
  Database,
  ArrowRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AI_FEATURES = [
  {
    id: "iot-telemetry",
    title: "IoT Telemetry Sensors",
    icon: <Radio className="w-8 h-8 text-[#CC0000]" />,
    description: "Optional embedded sensors transmit real-time data on water levels, hazardous gas levels, and temperature directly to municipal dashboards."
  },
  {
    id: "predictive-ml",
    title: "ML Predictive Maintenance",
    icon: <Activity className="w-8 h-8 text-[#CC0000]" />,
    description: "Machine learning algorithms analyze micro-stress and traffic load patterns over time to help identify potential maintenance concers."
  },
  {
    id: "robotic-fab",
    title: "Robotic Precision Casting",
    icon: <Bot className="w-8 h-8 text-[#CC0000]" />,
    description: "Our foundries utilize AI-guided robotics for automated manufacturing toleranced pouring and milling, ensuring tight manufacturing tolerancess down to the millimeter."
  },
  {
    id: "security-grid",
    title: "Automated Threat Detection",
    icon: <ShieldAlert className="w-8 h-8 text-[#CC0000]" />,
    description: "Smart access frames detect unauthorized lid removal or tampering, immediately alerting central security networks for utility vaults."
  }
];

export default function SmartInfraSection() {
  return (
    <section className="bg-zinc-950 py-8 border-t border-zinc-900 font-sans text-white overflow-hidden relative">

      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#CC0000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="w-full px-10 md:px-20 relative z-10">

        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="text-[#CC0000] w-5 h-5 animate-pulse" />
              <span className="text-[#CC0000] font-bold uppercase tracking-widest text-sm">
                Smart City Ready
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
              AI & Robotic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                Infrastructure
              </span>
            </h2>
            <p className="text-zinc-400 mt-4 text-lg leading-relaxed">
              Transitioning from passive iron to active intelligence. Our next-generation risers and frames integrate seamlessly with municipal data networks, transforming standard access points into a real-time diagnostic grid.
            </p>
          </div>

          <Button className="bg-white text-black hover:bg-[#CC0000] hover:text-white font-bold uppercase tracking-wider px-8 h-12 transition-all">
            View Smart Specs <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* --- MAIN FEATURE SPLIT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">

          {/* Left: Large Highlight Card */}
          <div className="lg:col-span-7 relative bg-[#0F0F0F] rounded-xl border border-zinc-800 overflow-hidden group p-8 md:p-12 flex flex-col justify-center">
            {/* Glowing Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#CC0000] rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

            <Badge className="w-fit bg-zinc-900 text-zinc-300 border-zinc-700 mb-6 uppercase tracking-widest text-xs">
              <Database className="w-3 h-3 mr-2 text-[#CC0000]" /> Paving-Grid Platform
            </Badge>

            <h3 className="text-3xl font-bold mb-4">The Connected Catch Basin</h3>
            <p className="text-zinc-400 mb-8 max-w-lg">
              Equip your flood-prone areas with our smart grates. Using low-power wide-area networks (LPWAN), these units autonomously report flow rates and blockage risks, allowing public works to deploy clearing teams exactly where needed, when needed.
            </p>

            {/* Mock Data UI element */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 font-mono text-sm text-[#CC0000] inline-block w-fit">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-zinc-500">UNIT_ID:</span> M72400-SMART
                <span className="flex items-center gap-1 text-green-500"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> ONLINE</span>
              </div>
              <div className="flex gap-6">
                <div><span className="text-zinc-500">FLOW_RT:</span> 84 L/m</div>
                <div><span className="text-zinc-500">STRESS:</span> 1.2%</div>
                <div><span className="text-zinc-500">BATT:</span> 98%</div>
              </div>
            </div>
          </div>

          {/* Right: Drone/Robotic Access Image */}
          <div className="lg:col-span-5 relative bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden min-h-[300px]">

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0F0F0F]/40 z-10 p-6 text-center">
              <Scan className="w-12 h-12 text-[#CC0000] mb-4 opacity-70" />
              <h4 className="font-bold text-xl mb-2">Robotic Inspection Ports</h4>
              <p className="text-sm text-zinc-400">Specially milled access configurations designed to accommodate automated subterranean survey crawlers without human entry.</p>
            </div>
            {/* Add an actual image here if you have one */}
            {/* <Image src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/robot-crawler.jpg`} alt="Robotic Access" fill className="object-cover opacity-30 mix-blend-luminosity" /> */}
          </div>
        </div>

        {/* --- 4-COLUMN FEATURE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {AI_FEATURES.map((feature) => (
            <Card key={feature.id} className="bg-[#0F0F0F] border-zinc-800 hover:border-[#CC0000] transition-colors duration-300">
              <CardContent className="p-6">
                <div className="bg-zinc-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-lg mb-3 text-white">{feature.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

// Needed for the icon used in the image placeholder
import { Scan } from 'lucide-react';