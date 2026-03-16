"use client";

import { motion } from "framer-motion";
import { academyData } from "../data/academy";
import { BookOpen, Clock } from "lucide-react";

export default function CoursesSection() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="courses" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-gradient">Programs</span></h2>
          <p className="text-xl text-slate-600 max-w-2xl font-medium">Discover our comprehensive range of courses designed to help you achieve your academic goals.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {academyData.courses.map((course: any) => (
            <motion.div 
              key={course.id} 
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-light/10 to-transparent rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-500"></div>
              
              <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 border border-primary/10">
                <BookOpen size={30} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{course.name}</h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{course.description}</p>
              
              <div className="flex items-center text-sm font-semibold text-primary bg-primary/5 py-3 px-5 rounded-xl w-fit">
                <Clock size={18} className="mr-2" />
                {course.duration}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
