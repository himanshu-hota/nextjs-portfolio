import AboutSection from "@/components/AboutSection";
import HeroSecion from "@/components/HeroSecion";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSecion />
        <AboutSection />
        <ProjectSection />
      </div>

    </main>
  )
}
