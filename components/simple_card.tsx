import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { getTermObj } from "@/lib/terms";
import { Examples } from "@/components/examples";

export function SimpleCard({ term }: { term: string }) {
  const retrieved_term = getTermObj(term);
  return (
    <Card className="">
      <CardHeader>
        <div className="flex">
          <CardTitle className="capitalize">
            {retrieved_term.name}{" "}
            <span className="ms-1 text-muted-foreground font-normal">- {retrieved_term.type}</span>
          </CardTitle>
        </div>
        <CardDescription className="capitalize">Related: {retrieved_term.related_terms.join(", ")}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground flex gap-5 flex-col items-center">
        <div>
          <p className="text-black">{retrieved_term.simple.definition}</p>
          <Examples example_list={retrieved_term.simple.examples} />
        </div>
        <Image
          src={`/mermaid_diagrams/${retrieved_term.name}_simple.svg`}
          alt="Simple drawing of agent requesting and receiving data, before responding to user."
          width={300}
          height={200}
          className="w-60"
        />
      </CardContent>
    </Card>
  );
}
