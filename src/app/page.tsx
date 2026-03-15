import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import StudentGraduationScroll from "@/components/StudentGraduationScroll"
import CoursesSection from "@/components/CoursesSection"
import WhyUsSection from "@/components/WhyUsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <HeroSection />
      <StudentGraduationScroll />
      <CoursesSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
