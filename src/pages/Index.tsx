import { portfolioData } from "@/data/portfolioData";
import { Navigation } from "@/components/portfolio/Navigation";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { AchievementsSection } from "@/components/portfolio/AchievementsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  const { settings } = portfolioData;

  return (
    <div className="font-space-grotesk transition-colors duration-300">
      <Navigation />
      
      <div className="flex flex-col min-h-screen">
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        
        <main className="flex-grow max-w-4xl mx-auto px-6 pt-40 pb-8 animate-blur-in">
          <HeroSection />
          
          <p className="text-lg text-muted-foreground leading-relaxed my-16">
            {settings.summary}
          </p>
          
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
