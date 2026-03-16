"use client";

import { motion } from "framer-motion";


export default function HeroSection() {
  return (
    <>
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-16 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            >
              Empowering Students for <br className="hidden md:block"/>
              <span className="text-gradient">Academic Excellence</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 mb-10 font-medium"
            >
              Expert coaching for School, PUC and Degree students.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="tel:+919741605750" className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
                Call Now
              </a>
              <a href="https://wa.me/919741605750" target="_blank" rel="noreferrer" className="bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
