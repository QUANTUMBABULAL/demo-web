"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, FileText, CheckCircle, Brain } from "lucide-react";

export default function WhyUsSection() {
  const features = [
    { icon: <Users size={36} strokeWidth={1.5} />, title: "Experienced Faculty", desc: "Learn from the best educators in Mysuru with years of teaching experience." },
    { icon: <CheckCircle size={36} strokeWidth={1.5} />, title: "Small Batch Size", desc: "Ensuring individual attention and personalized guidance for every student." },
    { icon: <FileText size={36} strokeWidth={1.5} />, title: "Regular Tests", desc: "Continuous evaluation through structured test series to track academic progress." },
    { icon: <GraduationCap size={36} strokeWidth={1.5} />, title: "Printed Notes", desc: "Comprehensive, structured, and exam-oriented study materials provided." },
    { icon: <Brain size={36} strokeWidth={1.5} />, title: "Personal Attention", desc: "Dedicated mentorship sessions tailored to identify and solve specific learning gaps." },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0B1536] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose <span className="text-accent">Us?</span></h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">The Rathod's Ideal Academy difference that builds confidence and guarantees success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="text-accent mb-6 bg-white/5 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300 border border-white/5">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
