"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Github, ExternalLink, X, ShieldAlert, Lock } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SectionDivider } from "./SectionDivider";

// --- Types ---
type ProjectDetails = {
  problem?: string;
  solution?: string;
  impact?: string;
  acknowledgments?: string;
};

type ProjectItem = typeof portfolioData.sections.projects.items[0] & {
  details?: ProjectDetails;
};

function ensureUrl(url: string): string {
  if (!url) return url;
  if (!url.match(/^https?:\/\//)) {
    return `https://${url}`;
  }
  return url;
}

function isVideoFile(url: string) {
  if (!url) return false;
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
}

export function ProjectsSection() {
  const { projects } = portfolioData.sections;
  const items = projects.items as ProjectItem[]; 
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  // --- Video Hover Handlers ---
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      // Use a promise catch to prevent errors if the user hovers out too quickly
      video.play().catch((err) => console.log("Video play interrupted", err));
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.pause();
      // Optional: video.currentTime = 0; // Uncomment if you want the video to reset to start on leave
    }
  };

  if (!projects.enabled) return null;

  return (
    <div className="mt-16 relative" id="projects">
      <SectionDivider title={projects.title} />

      {/* --- GRID VIEW --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {items.map((project) => {
          const isPatentProject = !project.previewUrl && !project.repoUrl;

          return (
            <div 
              key={project.title} 
              onClick={() => setSelectedProject(project)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // --- Card Styling & Hover Effects ---
              className="group flex flex-col cursor-pointer rounded-2xl p-5 border border-transparent transition-all duration-300 hover:border-primary/20 hover:bg-secondary/30 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Media Thumbnail */}
              <div className="block mb-4 overflow-hidden rounded-lg border border-border/50 shadow-sm relative">
                <div className="relative aspect-video w-full overflow-hidden bg-secondary/30">
                  {project.imageUrl && isVideoFile(project.imageUrl) ? (
                    <video
                      src={project.imageUrl}
                      muted // Always muted in preview
                      loop
                      playsInline
                      preload="metadata" // Load first frame
                      // Note: autoPlay is REMOVED here so it waits for hover
                      className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={project.imageUrl || "/api/placeholder/400/320"}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                    />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
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
                      className="text-xs px-2 py-1 rounded-md bg-background border border-border/50 text-muted-foreground font-mono group-hover:border-primary/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              {/* Card Footer */}
<div className="flex items-center gap-4 text-sm mt-auto pt-2">
  {isPatentProject ? (
    <div className="inline-flex items-center gap-1.5 text-amber-600/90 font-medium px-2 py-1 bg-amber-500/10 rounded border border-amber-500/20">
      <Lock size={14} />
      <span>Patent Applied</span>
    </div>
  ) : (
    <>
      {project.previewUrl && (
        <a
          href={ensureUrl(project.previewUrl)}
          target="_blank"
          rel="noopener noreferrer"
          // --- STOP PROPAGATION HERE ---
          onClick={(e) => e.stopPropagation()} 
          className="z-10 inline-flex items-center gap-1.5 text-foreground font-medium hover:text-primary transition-colors"
        >
          <ExternalLink size={14} />
          <span>Preview</span>
        </a>
      )}
      {project.repoUrl && (
        <a
          href={ensureUrl(project.repoUrl)}
          target="_blank"
          rel="noopener noreferrer"
          // --- STOP PROPAGATION HERE ---
          onClick={(e) => e.stopPropagation()}
          className="z-10 inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github size={14} />
          <span>Code</span>
        </a>
      )}
    </>
  )}
</div>
            </div>
          );
        })}
      </div>

      {/* --- POPUP MODAL --- */}
      {mounted && selectedProject && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedProject(null)}
          />
          
          <div className="relative w-full max-w-4xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/50 hover:bg-background text-foreground transition-colors border border-transparent hover:border-border backdrop-blur-md"
            >
              <X size={20} />
            </button>

            <div className="overflow-y-auto custom-scrollbar">
              <div className="w-full aspect-video bg-black relative">
                 {selectedProject.imageUrl && isVideoFile(selectedProject.imageUrl) ? (
                    <video
                      src={selectedProject.imageUrl}
                      autoPlay // Keeps autoplay in the modal
                      muted
                      loop
                      playsInline
                      controls
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <img
                      src={selectedProject.imageUrl || "/api/placeholder/800/600"}
                      alt={selectedProject.title}
                      className="h-full w-full object-cover"
                    />
                  )}
              </div>

              <div className="p-8 sm:p-10 max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h1>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1.5 rounded-md bg-secondary text-secondary-foreground font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                </div>

                <div className="space-y-8 text-base text-muted-foreground leading-relaxed">
                  <div><p>{selectedProject.description}</p></div>
                  {selectedProject.details?.problem && (
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">The Challenge</h3>
                      <p>{selectedProject.details.problem}</p>
                    </div>
                  )}
                  {selectedProject.details?.solution && (
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Our Solution</h3>
                      <p>{selectedProject.details.solution}</p>
                    </div>
                  )}
                  {selectedProject.details?.impact && (
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Why It Matters</h3>
                      <p>{selectedProject.details.impact}</p>
                    </div>
                  )}
                   {selectedProject.details?.acknowledgments && (
                    <div className="pt-6 border-t border-border mt-8">
                      <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide">Acknowledgments</h4>
                      <p className="italic text-sm">{selectedProject.details.acknowledgments}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-8 mt-8 border-t border-border">
                  {(!selectedProject.previewUrl && !selectedProject.repoUrl) ? (
                     <div className="flex items-center gap-2 text-amber-600 bg-amber-500/10 px-4 py-3 rounded-lg border border-amber-500/20 w-full justify-center">
                        <ShieldAlert size={20} />
                        <span className="font-medium">Intellectual Property - Code Not Public</span>
                     </div>
                  ) : (
                    <>
                      {selectedProject.previewUrl && (
                        <a
                          href={ensureUrl(selectedProject.previewUrl)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                        >
                          <ExternalLink size={18} />
                          Visit Live Site
                        </a>
                      )}
                      {selectedProject.repoUrl && (
                        <a
                          href={ensureUrl(selectedProject.repoUrl)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors font-medium"
                        >
                          <Github size={18} />
                          View Source
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}