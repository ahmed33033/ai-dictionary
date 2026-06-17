import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function BaseDefinitionCard({ children, className, ...props}: { children: Readonly<React.ReactNode>; } & React.ComponentProps<"div">) {
  return (
      <Card className={cn("@container max-w-2xl gap-0 flex flex-col pr-5 ", className)} {...props}>
        {children}
      </Card>
  );
}
