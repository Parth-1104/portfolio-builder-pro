import { Github, Linkedin, Twitter, LucideIcon } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const iconMap: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
};

function ensureUrl(url: string): string {
  if (!url) return url;
  if (!url.match(/^https?:\/\//)) {
    return `https://${url}`;
  }
  return url;
}

export function SocialLinks() {
  const { social } = portfolioData.sections;

  if (!social.enabled) return null;

  return (
    <div className="flex items-center gap-4">
      {social.items.map((item, index) => {
        const Icon = iconMap[item.platform];
        return (
          <span key={item.platform} className="flex items-center gap-4">
            <a
              href={ensureUrl(item.url)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {Icon && <Icon size={16} />}
              <span className="capitalize">{item.platform}</span>
            </a>
            {index < social.items.length - 1 && (
              <span className="text-muted-foreground">/</span>
            )}
          </span>
        );
      })}
    </div>
  );
}
