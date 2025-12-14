import { portfolioData } from "@/data/portfolioData";
import { SectionDivider } from "./SectionDivider";
import { SocialLinks } from "./SocialLinks";

export function ContactSection() {
  const { contact } = portfolioData.sections;

  if (!contact.enabled) return null;

  const contactItems = [
    {
      value: contact.email,
      link: `mailto:${contact.email}`,
    },
    {
      value: contact.phone,
      link: `tel:${contact.phone}`,
    },
    {
      value: contact.location,
      link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        contact.location
      )}`,
    },
  ].filter((item) => item.value);

  return (
    <div className="mt-8" id="contact">
      <SectionDivider title={contact.title} />
      <div className="flex flex-col items-center gap-4 text-sm">
        <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-2">
          {contactItems.map((item) => (
            <a
              key={item.value}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors underline w-fit"
            >
              {item.value}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-4">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
