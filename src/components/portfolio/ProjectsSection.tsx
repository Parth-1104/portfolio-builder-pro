import { Github } from "lucide-react";
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {projects.items.map((project) => (
          <div key={project.title} className="mb-8">
            <h3 className="font-medium text-lg text-foreground">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm">
              {project.previewUrl && (
                <a
                  href={ensureUrl(project.previewUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors underline"
                >
                  Preview
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
                  <span>View Repo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
