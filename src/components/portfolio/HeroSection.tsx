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
          src={settings.profileImage}
          alt="Profile"
          className="rounded-full w-40 h-40 object-cover border-4 border-border"
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
        <div className="flex flex-wrap gap-4 mt-6">
          {hero.ctaButtons.map((btn) => (
            <a
              key={btn.text}
              href={btn.url}
              onClick={(e) => handleCtaClick(e, btn.url)}
              target={btn.url.startsWith("#") ? undefined : "_blank"}
              rel={btn.url.startsWith("#") ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-md hover:bg-secondary transition-colors"
            >
              {btn.text}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
