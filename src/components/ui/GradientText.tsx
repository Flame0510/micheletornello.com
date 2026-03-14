interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export const GradientText = ({ 
  children, 
  className = "", 
  from = "from-accent", 
  to = "to-blue-400" 
}: GradientTextProps) => {
  return (
    <span className={`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};
