import c from "clsx";
import { ButtonHTMLAttributes } from "react";
import "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  priority?: "default" | "primary" | "accent";
}

export default function Button({
  children,
  priority = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={c(
        "rounded-md border px-4 py-2.5 transition-all font-medium",
        priority === "primary"
          ? "primary"
          : priority === "accent"
          ? "accent"
          : "default"
      )}
      {...props}
    >
      {children}
    </button>
  );
}
