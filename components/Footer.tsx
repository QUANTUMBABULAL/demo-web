import Link from "next/link";
import { academyData } from "../data/academy";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Academy Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-extrabold text-white mb-6 pb-4 inline-block border-b-2 border-primary">{academyData.name}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed font-medium">
              {academyData.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 font-medium">
              <li><Link href="#home" className="hover:text-primary-light hover:translate-x-1 transition-all inline-block">Home</Link></li>
              <li><Link href="#why-us" className="hover:text-primary-light hover:translate-x-1 transition-all inline-block">Why Choose Us</Link></li>
              <li><Link href="#contact" className="hover:text-primary-light hover:translate-x-1 transition-all inline-block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Courses</h4>
            <ul className="space-y-4 font-medium">
              {academyData.courses.slice(0, 4).map((course: any) => (
                <li key={course.id}>
                  <Link href="#courses" className="hover:text-primary-light hover:translate-x-1 transition-all inline-block line-clamp-1">{course.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Stay Updated</h4>
            <p className="text-slate-400 mb-6 font-medium">Enroll now and start your journey towards academic excellence.</p>
            <a href="#contact" className="block bg-primary hover:bg-primary-light text-white px-6 py-4 rounded-2xl font-bold transition-colors w-full text-center shadow-lg shadow-primary/20">
              Enroll Today
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} {academyData.name}. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
