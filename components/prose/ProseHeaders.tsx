import { cn } from "@/lib/utils";

export function ProseH1({ children, className, ...props }: { children: React.ReactNode } & React.ComponentProps<"h1">) {
  return (
    <h1 className={cn([className, "text-3xl mt-8 font-playfair-display"])} {...props}>
      {children}
    </h1>
  );
}

export function ProseH2({ children, className, ...props }: { children: React.ReactNode } & React.ComponentProps<"h2">) {
  return (
    <h2 className={cn([className, "text-2xl mt-8  font-playfair-display"])} {...props}>
      {children}
    </h2>
  );
}

export function ProseH3({ children, className, ...props }: { children: React.ReactNode } & React.ComponentProps<"h3">) {
  return (
    <h3 className={cn([className, "font-bold mt-4  font-playfair-display text-lg"])} {...props}>
      {children}
    </h3>
  );
}

export function ProseH4({ children, className, ...props }: { children: React.ReactNode } & React.ComponentProps<"h4">) {
  return (
    <h4 className={cn([className, "  text-lg, font-playfair-display"])} {...props}>
      {children}
    </h4>
  );
}
