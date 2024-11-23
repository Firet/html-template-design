import { InputHTMLAttributes } from "react";

export default function Input({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="flex rounded-xl" {...props} />;
}
