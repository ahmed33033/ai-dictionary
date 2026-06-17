import { Card } from "@/components/ui/card";

export function BaseDefinitionCard({ children }: { children: Readonly<React.ReactNode>; }) {
  return (
    <div className="@container">
      <Card className="max-w-2xl gap-2 flex flex-col pr-5 items-center">
        {children}
      </Card>
    </div>
  );
}
