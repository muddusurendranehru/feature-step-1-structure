import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-md dark:bg-gray-800 dark:shadow-gray-900/20 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
