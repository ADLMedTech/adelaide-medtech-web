import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Sponsors from "@/components/sections/Sponsors";
import FeatureCards from "@/components/sections/FeatureCards";
import About from "@/components/sections/About";
import Themes from "@/components/sections/Themes";
import Timeline from "@/components/sections/Timeline";
import Gallery from "@/components/sections/Gallery";
import Audience from "@/components/sections/Audience";
import PrizePool from "@/components/sections/PrizePool";
import Winners from "@/components/sections/Winners";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

export default function Home() {
  return (
    <>
      <main>
        <BackgroundGlow />
        
        <Navbar />

        {/* --- HERO SECTION --- */}
        <Hero />

        {/* --- IMPORTANT NAV SECTIONS --- */}
        <About />       {/* Needs <section id="about"> in About.tsx */}
        <Timeline />    {/* Needs <section id="event"> in Timeline.tsx */}
        <Themes />      {/* Needs <section id="streams"> in Themes.tsx */}
        <Gallery />
        
        {/* --- SECONDARY INFO --- */}
        <PrizePool />
        <Winners />

        {/* --- MORE NAV SECTIONS --- */}
        <Team />        {/* Needs <section id="team"> in Team.tsx */}
        
        {/* --- CLOSING SECTIONS --- */}
        <FAQ />
        <CTA />
        <Sponsors />    {/* Needs <section id="sponsors"> in Sponsors.tsx */}

        <Footer />
      </main>
    </>
  );
}


/*
        <FeatureCards />
        <Audience />
*/