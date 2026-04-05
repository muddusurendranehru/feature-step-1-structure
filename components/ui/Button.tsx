import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary hover:bg-primary-dark text-white shadow-sm focus:ring-2 focus:ring-primary focus:ring-offset-2",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary focus:ring-offset-2",
  ghost:
    "text-primary hover:bg-primary/10 focus:ring-2 focus:ring-primary focus:ring-offset-2",
};

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";
  const padding = "px-4 py-2.5 sm:px-5 sm:py-3";
  return (
    <button
      type={type}
      className={`${base} ${padding} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
