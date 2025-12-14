import { Github, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SectionDivider } from "./SectionDivider";

function ensureUrl(url: string): string {
  if (!url) return url;
  if (!url.match(/^https?:\/\//)) {
    return `https://${url}`;
  }
  return url;
}

export function ProjectsSection() {
  const { projects } = portfolioData.sections;

  if (!projects.enabled) return null;

  return (
    <div className="mt-16" id="projects">
      <SectionDivider title={projects.title} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {projects.items.map((project) => (
          <div key={project.title} className="group flex flex-col">
            
            {/* --- NEW: Image Section --- */}
            {project.imageUrl && (
              <a
                href={ensureUrl(project.previewUrl || project.repoUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4 overflow-hidden rounded-lg border border-border/50 shadow-sm"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-secondary/30">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                  />
                </div>
              </a>
            )}
            {/* --------------------------- */}

            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground font-mono border border-transparent hover:border-border transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons / Links */}
            <div className="flex items-center gap-4 text-sm mt-auto pt-2">
              {project.previewUrl && (
                <a
                  href={ensureUrl(project.previewUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground font-medium hover:text-primary transition-colors"
                >
                  <ExternalLink size={14} />
                  <span>Live Preview</span>
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={ensureUrl(project.repoUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={14} />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}