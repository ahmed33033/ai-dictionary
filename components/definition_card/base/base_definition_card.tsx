import { Card } from "@/components/ui/card";
import { diagram } from "@/lib/terms";
import { DiagramImage } from "./diagram_image";

export function BaseDefinitionCard({ children, diagram }: { children: Readonly<React.ReactNode>; diagram?: diagram }) {
  return (
    <div className="@container">
      <Card className="max-w-2xl gap-2 flex flex-col pr-5 @xl:flex-row items-center">
        <div>{children}</div>
        {diagram !== undefined && <DiagramImage diagram={diagram} />}
      </Card>
    </div>
  );
}
