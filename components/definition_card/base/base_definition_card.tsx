import { Card } from "@/components/ui/card";
import { diagram } from "@/lib/terms";
import { DiagramImage } from "./diagram_image";

export function BaseDefinitionCard({ children, diagram }: { children: Readonly<React.ReactNode>; diagram?: diagram }) {
  return (
    <Card className="@container max-w-2xl gap-2 flex flex-row pr-5">
      <div>{children}</div>
      {diagram !== undefined && <DiagramImage diagram={diagram} />}
    </Card>
  );
}
