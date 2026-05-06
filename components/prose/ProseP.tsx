import { cn } from "@/lib/utils";

export function ProseP({ children, className, ...props }: { children: React.ReactNode } & React.ComponentProps<"p">) {
  return (
    <p className={cn([className, "mt-2"])} {...props}>
      {children}
    </p>
  );
}
