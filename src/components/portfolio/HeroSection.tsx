import { 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  X as XIcon,
  FileDown 
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function HeroSection() {
  const { settings, sections } = portfolioData;
  const { hero } = sections;

  if (!hero.enabled) return null;

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="grid md:grid-cols-3 gap-12 items-center mb-16">
      <div className="md:col-span-1 flex justify-center">
        <img
          src='linkedPFP.jpeg'
          alt="Profile"
          className="rounded-full w-40 h-40 object-cover border-4 border-border shadow-lg"
          loading="lazy"
        />
      </div>
      <div className="md:col-span-2">
        <h1 className="text-3xl font-medium text-foreground">
          Hey, I'm {settings.name}
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          {settings.title} &bull; {settings.location}
        </p>

        {/* --- Socials & CV Section --- */}
        <div className="flex flex-wrap items-center gap-3 mt-6">
          
          {/* Email */}
          {settings.email && (
            <a
              href={`mailto:${settings.email}`}
              className="p-2.5 border border-border/50 rounded-lg hover:bg-secondary/80 hover:border-border transition-all text-muted-foreground hover:text-foreground"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          )}

          {/* GitHub */}
          {settings.github && (
            <a
              href={settings.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-border/50 rounded-lg hover:bg-secondary/80 hover:border-border transition-all text-muted-foreground hover:text-foreground"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          )}

          {/* LinkedIn */}
          {settings.linkedin && (
            <a
              href={settings.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-border/50 rounded-lg hover:bg-secondary/80 hover:border-border transition-all text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          )}

          {/* Twitter / X */}
          {settings.twitter && (
            <a
              href={settings.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-border/50 rounded-lg hover:bg-secondary/80 hover:border-border transition-all text-muted-foreground hover:text-foreground"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          )}

          {/* CV Download Button */}
          {settings.resume && (
            <a
              href={settings.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 border border-border/50 rounded-lg hover:bg-secondary/80 hover:border-border transition-all text-muted-foreground hover:text-foreground font-medium"
            >
              <FileDown size={20} />
              <span>CV</span>
            </a>
          )}
        </div>
        {/* --------------------------- */}

       
      </div>
    </header>
  );
}