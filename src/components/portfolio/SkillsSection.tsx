import { portfolioData } from "@/data/portfolioData";

export function SkillsSection() {
  const { about } = portfolioData.sections;

  if (!about.enabled || !about.skills.enabled) return null;

  return (
    <div className="mt-16" id="about">
      <h2 className="font-bold text-xl text-foreground mb-6">
        {about.skills.title}
      </h2>
      <div className="flex flex-wrap gap-3">
        {about.skills.items.map((skill) => (
          <span
            key={skill}
            className="text-sm px-3 py-1 rounded-full bg-secondary text-muted-foreground font-mono"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
