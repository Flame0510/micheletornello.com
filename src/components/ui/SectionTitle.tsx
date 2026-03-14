interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle = ({ 
  title, 
  subtitle, 
  className = "" 
}: SectionTitleProps) => {
  return (
    <div className={`space-y-4 mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-accent rounded-full" />
    </div>
  );
};
