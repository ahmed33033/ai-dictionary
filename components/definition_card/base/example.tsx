import { cn } from "@/lib/utils";

export function Example({ className, example, ...props }: React.ComponentProps<"ul"> & { example: string }) {
  return <p className={cn(className, "mt-2")}>{example}</p>;
}
