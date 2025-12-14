import { useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

function generateInitials(name: string): string {
  const words = name.trim().split(" ");
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }
  return words.slice(0, 2).map((word) => word.charAt(0).toUpperCase()).join("");
}

export function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { navigation, settings } = portfolioData;

  if (!navigation.enabled) return null;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <header className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-4 bg-background/70 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 border border-border">
          <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full font-bold text-sm tracking-wider">
            {generateInitials(settings.name)}
          </div>
          {navigation.items.map((item) => (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => handleNavClick(e, item.url)}
              className="px-3 py-2 text-sm rounded-full hover:bg-secondary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-background shadow-lg transform transition-transform z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-20">
          <nav className="flex flex-col gap-4">
            {navigation.items.map((item) => (
              <a
                key={item.name}
                href={item.url}
                onClick={(e) => handleNavClick(e, item.url)}
                className="text-lg hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-[60] p-2 rounded-md bg-background/70 backdrop-blur-sm border border-border"
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}
