"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projectData: Record<string, any> = {
  curation: {
    title: "Atmospheric Curation",
    description: "Designing the invisible. We focus on the intersection of light, scent, and spatial harmony to create environments that breathe.",
    samples: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000"
    ],
    bg: "bg-[#0a0a0a]"
  },
  logistics: {
    title: "Global Logistics",
    description: "Complexity made silent. From private air travel to heritage venue access, we manage the friction so you can experience the moment.",
    samples: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1520645521318-f03a712f0e60?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1464037058332-f60814962055?auto=format&fit=crop&q=80&w=1000"
    ],
    bg: "bg-[#0b0c10]"
  },
  artistry: {
    title: "Creative Artistry",
    description: "The visual narrative of your celebration. Bespoke installations and performance curation tailored to your personal history.",
    samples: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1000"
    ],
    bg: "bg-[#0d0d0b]"
  },
  production: {
    title: "Technical Production",
    description: "Engineering wonder. High-fidelity audio, immersive mapping, and structural builds that defy the standard event mold.",
    samples: [
      "https://images.unsplash.com/photo-1459749411177-042180ec7739?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=1000"
    ],
    bg: "bg-[#0f0a0a]"
  }
};

export default function ProjectPage() {
  const params = useParams();
  const id = params.id as string;
  const project = projectData[id] || projectData.curation;

  return (
    <main className={`min-h-screen ${project.bg} text-white transition-colors duration-1000`}>
      <nav className="p-8 md:p-12 flex justify-between items-center relative z-20">
        <Link href="/" className="text-[10px] uppercase tracking-[0.5em] opacity-40 hover:opacity-100 transition-all">← Studio</Link>
        <span className="text-[10px] uppercase tracking-[0.3em] opacity-20">Luna — {id}</span>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-5 space-y-12">
            <h1 className="text-6xl md:text-8xl serif italic leading-[0.9] tracking-tighter capitalize">{id}</h1>
            <p className="text-xl font-light opacity-60 leading-relaxed max-w-md">{project.description}</p>
            <div className="h-[1px] w-full bg-white/10" />
            <div className="text-[9px] uppercase tracking-[0.4em] font-bold opacity-30">2026 Commission / Global</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-7 space-y-12">
            {project.samples.map((url: string, index: number) => (
              <div key={index} className={`relative aspect-video overflow-hidden border border-white/5 ${index === 1 ? 'ml-0 md:ml-20' : ''}`}>
                <img src={url} alt="Sample" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-1000" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }} />
    </main>
  );
}