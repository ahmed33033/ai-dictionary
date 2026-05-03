import { getTermObj } from "@/lib/terms";
import { BaseDefinitionCard } from "@/components/definition_card/base/base_definition_card";
import { DefintionHeader } from "./base/defintion_header";
import { DefinitionContent } from "./base/definition_content";
import { CardFooter } from "../ui/card";

export function OriginalCard({ term }: { term: string }) {
  const retrieved_term = getTermObj(term);
  return (
    <BaseDefinitionCard>
      <DefintionHeader
        name={retrieved_term.name}
        type={retrieved_term.original.type}
        related_terms={retrieved_term.related_terms}
      />
      <DefinitionContent
        definition={retrieved_term.original.definition}
        example={retrieved_term.original.example}
        diagram={retrieved_term.original_diagram}
      />
      <CardFooter>Source: {retrieved_term.original.source}</CardFooter>
    </BaseDefinitionCard>
  );
}
