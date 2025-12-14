import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const { footer } = portfolioData;

  if (!footer.enabled) return null;

  return (
    <footer className="py-8 text-center text-sm text-muted-foreground flex flex-col items-center gap-4">
      <p>{footer.copyright}</p>
    </footer>
  );
}
