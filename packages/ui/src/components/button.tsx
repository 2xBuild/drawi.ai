import { cn } from "../lib/utils";

export function Button({ children, className, ...props }: React.ComponentProps<"button">) {
  return (
    <button className={cn("p-4 text-white bg-primary w-full h-full cur rounded-md", className)} {...props}>
      {children}
    </button>
  );
}