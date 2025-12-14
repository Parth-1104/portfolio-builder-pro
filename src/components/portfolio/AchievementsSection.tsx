import { portfolioData } from "@/data/portfolioData";
import { SectionDivider } from "./SectionDivider";

export function AchievementsSection() {
  const { achievements } = portfolioData.sections;

  if (!achievements.enabled) return null;

  return (
    <div className="mt-16" id="achievements">
      <SectionDivider title={achievements.title} />
      {achievements.items.map((item) => (
        <div key={item.title} className="mb-6">
          <h3 className="font-medium text-lg text-foreground">{item.title}</h3>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
