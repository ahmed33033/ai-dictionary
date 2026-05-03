import { getTermObj } from "@/lib/terms";
import { BaseDefinitionCard } from "@/components/definition_card/base/base_definition_card";
import { DefintionHeader } from "./base/defintion_header";
import { DefinitionContent } from "./base/definition_content";

export function SoftwareCard({ term }: { term: string }) {
  const retrieved_term = getTermObj(term);
  return (
    <BaseDefinitionCard>
      <DefintionHeader
        name={retrieved_term.name}
        type={retrieved_term.software.type}
        related_terms={retrieved_term.related_terms}
      />
      <DefinitionContent
        definition={retrieved_term.software.definition}
        example={retrieved_term.software.example}
        diagram={retrieved_term.software_diagram}
      />
    </BaseDefinitionCard>
  );
}
