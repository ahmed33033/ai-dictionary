"use client";

import { cn } from "@/lib/utils";
import mermaid from "mermaid";
import { useEffect } from "react";

export function MermaidClient({
  diagramSrcCode,
  className,
  ...props
}: React.ComponentProps<"pre"> & { diagramSrcCode: string }) {
  useEffect(() => {
    mermaid.run();
  }, []);
  return (
    <pre className={cn(["mermaid", className])} {...props}>
      {diagramSrcCode}
    </pre>
  );
}
