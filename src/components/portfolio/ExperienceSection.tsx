import { portfolioData } from "@/data/portfolioData";
import { SectionDivider } from "./SectionDivider";

export function ExperienceSection() {
  const { experience } = portfolioData.sections;

  if (!experience.enabled) return null;

  return (
    <div className="mt-16" id="experience">
      <SectionDivider title={experience.title} />
      {experience.items.map((item) => (
        <div key={`${item.company}-${item.position}`} className="mb-8">
          <h3 className="font-medium text-lg text-foreground">
            {item.position}
          </h3>
          <p className="text-muted-foreground text-base mb-2">{item.company}</p>
          <p className="text-muted-foreground/70 text-sm font-mono">
            {item.period}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mt-2">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
