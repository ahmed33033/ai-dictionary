import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { term, fieldDefinition } from "@/lib/terms";

export function DefintionHeader({
  name,
  type,
  related_terms,
}: {
  name: term["name"];
  type: fieldDefinition["type"];
  related_terms: term["related_terms"];
}) {
  return (
    <CardHeader className="mbe-6 gap-0">
      <div className="flex">
        <CardTitle className="capitalize">
          {name} <span className="ms-1 text-muted-foreground font-normal">- {type}</span>
        </CardTitle>
      </div>
      <CardDescription className="capitalize">Related: {related_terms.join(", ")}</CardDescription>
    </CardHeader>
  );
}
