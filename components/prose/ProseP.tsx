import { cn } from "@/lib/utils";

export function ProseP({ children, className, ...props }: { children: React.ReactNode } & React.ComponentProps<"p">) {
  return (
    <p className={cn(["mt-2", className])} {...props}>
      {children}
    </p>
  );
}
