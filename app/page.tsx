"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const inkBg = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop";

const portfolioItems = [
  { id: 'curation', title: 'Private Gala', src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000" },
  { id: 'logistics', title: 'Desert Soirée', src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000" },
  { id: 'artistry', title: 'Grand Opening', src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000" },
  { id: 'production', title: 'Vow Exchange', src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000" }
];

const serviceSamples = [
  { title: "Atmospheric Curation", samples: ["Lighting Design", "Floral Architecture", "Sensory Branding"] },
  { title: "Global Logistics", samples: ["Venue Scouting", "Private Travel", "Concierge Coordination"] },
  { title: "Creative Direction", samples: ["Concept Sketching", "Visual Identity", "Live Production"] }
];

export default function LunaEvents() {
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader" className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] text-white" exit={{ opacity: 0 }}>
           <motion.h1 animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-4xl tracking-[1em] font-light uppercase">Luna</motion.h1>
        </motion.div>
      ) : (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-white selection:text-black">
          <div className="fixed inset-0 z-0 pointer-events-none" style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.95)), url(${inkBg})`,
            backgroundSize: 'cover', backgroundPosition: 'center' 
          }} />

          <div className="relative z-10">
            <nav className="flex justify-between items-center px-8 py-10 md:px-16">
              <h1 className="text-3xl tracking-[0.4em] font-medium uppercase">Luna</h1>
              <button onClick={() => setIsFormOpen(true)} className="text-[11px] font-bold uppercase tracking-[0.2em] border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition-all duration-500">
                Enquire
              </button>
            </nav>

            <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
              <motion.h2 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-7xl md:text-[9rem] mb-12 tracking-tighter leading-[0.8]">
                Elevating the <span className="italic serif">art</span> <br /> of celebration.
              </motion.h2>
            </section>

            <section className="px-8 py-32 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {portfolioItems.map((item, i) => (
                  <Link href={`/portfolio/${item.id}`} key={item.id}>
                    <motion.div whileHover={{ scale: 0.98 }} className={`group relative overflow-hidden aspect-[3/4] border border-white/5 cursor-pointer ${i % 2 !== 0 ? 'mt-16' : ''}`}>
                      <img src={item.src} alt={item.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" />
                      <div className="absolute inset-0 bg-black/40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{item.title} — Explore</span>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5">
              {serviceSamples.map((service, i) => (
                <div key={i} className="space-y-6">
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.4em] opacity-40">0{i+1} — {service.title}</h3>
                  <ul className="space-y-3">
                    {service.samples.map((sample, idx) => (
                      <li key={idx} className="text-sm font-light opacity-80 flex items-center gap-3 hover:translate-x-2 transition-transform">
                        <span className="w-1 h-1 bg-white rounded-full opacity-30" /> {sample}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <footer className="px-8 py-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-12 bg-black/50 backdrop-blur-md">
              <div className="max-w-xs">
                <h4 className="text-xl tracking-tighter mb-4 serif italic">Luna Events</h4>
                <p className="text-[10px] uppercase tracking-widest opacity-50 leading-loose">Available for private commissions globally.</p>
              </div>
              <div className="flex gap-12 text-[10px] uppercase tracking-[0.4em] font-bold">
                <a href="#" className="hover:line-through">Instagram</a>
                <a href="#" className="hover:line-through">Studio</a>
              </div>
            </footer>
          </div>

          <AnimatePresence>
            {isFormOpen && (
              <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 30 }} className="fixed inset-y-0 right-0 w-full md:w-[500px] bg-[#0a0a0a] z-[110] p-16 flex flex-col border-l border-white/10 shadow-2xl">
                <button onClick={() => setIsFormOpen(false)} className="self-end text-[10px] uppercase tracking-widest mb-20 opacity-50">Close — Esc</button>
                <h2 className="text-5xl serif italic mb-12">The Beginning.</h2>
                <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                   <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-white transition-all" />
                   <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-white transition-all" />
                   <textarea placeholder="Your Vision" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-white transition-all h-32 resize-none" />
                   <button className="w-full bg-white text-black py-6 font-bold uppercase tracking-[0.4em] hover:bg-transparent hover:text-white border border-white transition-all">Submit Enquiry</button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.main>
      )}
    </AnimatePresence>
  );
}