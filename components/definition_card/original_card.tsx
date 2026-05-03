import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { getTermObj } from "@/lib/terms";
import { Example } from "@/components/definition_card/base/example";
import { DiagramImage } from "@/components/definition_card/base/diagram_image";
import { BaseDefinitionCard } from "@/components/definition_card/base/base_definition_card";

export function OriginalCard({ term }: { term: string }) {
  const retrieved_term = getTermObj(term);
  return (
    <BaseDefinitionCard>
      <CardHeader>
        <div className="flex">
          <CardTitle className="capitalize">
            {retrieved_term.name}{" "}
            <span className="ms-1 text-muted-foreground font-normal">- {retrieved_term.type}</span>
          </CardTitle>
        </div>
        <CardDescription className="capitalize">Related: {retrieved_term.related_terms.join(", ")}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground flex gap-5 flex-col items-center @lg:flex-row">
        <div>
          <p className="text-black">{retrieved_term.simple.definition}</p>
          <Example example={retrieved_term.simple.example} />
        </div>
        {retrieved_term.simple_diagram !== undefined && <DiagramImage diagram={retrieved_term.simple_diagram} />}
      </CardContent>
    </BaseDefinitionCard>
  );
}
