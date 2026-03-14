interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'success';
  className?: string;
}

export const Badge = ({ 
  children, 
  variant = 'default', 
  className = "" 
}: BadgeProps) => {
  const base = "px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider";
  
  const variants = {
    default: "bg-surface border border-border text-text-muted",
    outline: "border border-border text-text-main",
    success: "bg-green-500/10 border border-green-500/20 text-green-500",
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
