import { cn } from "@/lib/utils";

export function ProseOL({ children, className, ...props }: { children: React.ReactNode } & React.ComponentProps<"ol">) {
  return (
    <ol className={cn(["list-decimal list-inside my-4 marker:font-bold ml-4 [&_li]:mt-2", className])} {...props}>
      {children}
    </ol>
  );
}

export function ProseUL({ children, className, ...props }: { children: React.ReactNode } & React.ComponentProps<"ul">) {
  return (
    <ul className={cn(["list-disc list-inside marker:font-bold ml-4 my-2 [&_li]:my-2", className])} {...props}>
      {children}
    </ul>
  );
}
