interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionTitle = ({ 
  title, 
  subtitle, 
  className = "",
  align = "left"
}: SectionTitleProps) => {
  return (
    <div className={`space-y-3 mb-12 ${align === "center" ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-text-muted ${align === "center" ? "mx-auto" : ""} max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
