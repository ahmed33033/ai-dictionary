import { CardContent } from "@/components/ui/card";
import { diagram, fieldDefinition } from "@/lib/terms";
import { Example } from "@/components/definition_card/base/example";
import { DiagramImage } from "./diagram_image";

export function DefinitionContent({
  children,
  definition,
  example,
  diagram,
}: {
  children?: Readonly<React.ReactNode>;
  definition: fieldDefinition["definition"];
  example: fieldDefinition["example"];
  diagram?: diagram;
}) {
  return (
    <CardContent className="text-sm text-muted-foreground flex gap-5 flex-col items-center @lg:items-start @lg:flex-row ">
      <div>
        <p className="text-black">{definition}</p>
        <Example example={example} />
      </div>
      {diagram !== undefined && <DiagramImage diagram={diagram} />}
    </CardContent>
  );
}
