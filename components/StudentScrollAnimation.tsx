"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, User } from "lucide-react";

export default function StudentScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Cap drops from top
  const capY = useTransform(scrollYProgress, [0.4, 0.8], [-120, 0]);
  const capOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  
  // Gown rises from bottom
  const gownY = useTransform(scrollYProgress, [0.4, 0.8], [150, 0]);
  const gownOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Journey to <span className="text-gradient">Success</span></h2>
          <p className="text-slate-600 text-xl">Watch our students transform into successful graduates through dedicated mentoring and expert guidance.</p>
        </div>

        <div className="relative w-64 h-80 mx-auto bg-slate-50 rounded-3xl border-2 border-slate-100 p-8 flex flex-col items-center justify-end shadow-2xl overflow-hidden group">
          
          {/* Graduation Cap */}
          <motion.div 
            className="absolute top-8 z-20 text-accent drop-shadow-lg"
            style={{ y: capY, opacity: capOpacity }}
          >
            <GraduationCap size={90} strokeWidth={1.5} />
          </motion.div>

          {/* Student Face/Body Default */}
          <div className="absolute top-32 z-10 text-slate-700 transition-transform duration-500 group-hover:scale-105">
            <User size={80} strokeWidth={1.5} />
          </div>

          {/* Gown Rising */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full bg-primary z-20 flex justify-center pt-6 shadow-[0_-10px_20px_rgba(0,0,0,0.1)]"
            style={{ height: "140px", y: gownY, opacity: gownOpacity }}
          >
            {/* Gown details */}
            <div className="w-16 h-full bg-primary-light/40 border-l-2 border-r-2 border-primary-light/20"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
