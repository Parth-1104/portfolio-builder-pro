import { portfolioData } from "@/data/portfolioData";
import { SectionDivider } from "./SectionDivider";

export function EducationSection() {
  const { education } = portfolioData.sections;

  if (!education.enabled) return null;

  return (
    <div className="mt-16" id="education">
      <SectionDivider title={education.title} />
      {education.items.map((item) => (
        <div key={`${item.institution}-${item.degree}`} className="mb-6">
          <div className="flex justify-between items-baseline mb-1 flex-wrap gap-2">
            <h3 className="font-medium text-lg text-foreground">
              {item.degree}
            </h3>
            <div className="text-sm text-muted-foreground/70 font-mono">
              {item.period}
            </div>
          </div>
          <p className="text-muted-foreground text-base">{item.institution}</p>
        </div>
      ))}
    </div>
  );
}
