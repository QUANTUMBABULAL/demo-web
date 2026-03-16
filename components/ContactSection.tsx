"use client";

import { motion } from "framer-motion";
import { academyData } from "../data/academy";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Contact Info */}
          <div className="flex-1 w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In <span className="text-gradient">Touch</span></h2>
            <p className="text-xl text-slate-600 mb-12 font-medium">Ready to start your journey with us? Visit our academy or reach out via phone or WhatsApp.</p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="bg-primary/5 p-5 rounded-2xl text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin size={32} />
                </div>
                <div className="pt-1">
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">Location</h4>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    <span className="font-semibold text-slate-700">{academyData.name}</span><br />
                    {academyData.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-primary/5 p-5 rounded-2xl text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone size={32} />
                </div>
                <div className="pt-1">
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">Call Us</h4>
                  {academyData.phones.map((phone: string) => (
                    <a key={phone} href={`tel:+91${phone}`} className="block text-slate-600 text-lg hover:text-primary hover:translate-x-1 transition-all mb-2 font-medium">
                      +91 {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-14">
              <a href="https://wa.me/919741605750" target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-[#25D366]/30 hover:scale-105 flex items-center justify-center gap-3 w-full sm:w-fit">
                <MessageCircle size={26} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Map Embed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl min-h-[450px] border-8 border-slate-50 relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.397621431602!2d76.6508933!3d12.3015485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7010f38baca1%3A0x6b42b65691e9f1a0!2sAgrahara%2C%20Mysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714574971485!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: "brightness(0.95) contrast(1.1)" }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
