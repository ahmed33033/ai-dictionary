import { Card } from "@/components/ui/card";

export function BaseDefinitionCard({ children }: { children: Readonly<React.ReactNode> }) {
  return <Card className="@container max-w-2xl gap-3">{children}</Card>;
}
