interface SectionDividerProps {
  title: string;
}

export function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="flex items-center my-8">
      <div className="flex-grow border-t border-border"></div>
      <h2 className="font-bold text-xl text-foreground mx-4">{title}</h2>
      <div className="flex-grow border-t border-border"></div>
    </div>
  );
}
