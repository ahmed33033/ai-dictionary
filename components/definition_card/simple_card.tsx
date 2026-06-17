import { getTermObj } from "@/lib/terms";
import { BaseDefinitionCard } from "@/components/definition_card/base/base_definition_card";
import { DefintionHeader } from "./base/defintion_header";
import { DefinitionContent } from "./base/definition_content";
import { DiagramImage } from "./base/diagram_image";

export function SimpleCard({ term }: { term: string }) {
  const retrieved_term = getTermObj(term);
  const diagram = retrieved_term.simple_diagram;
  return (
    <BaseDefinitionCard >
    <div>
      <DefintionHeader
        name={retrieved_term.name}
        type={retrieved_term.simple.type}
        related_terms={retrieved_term.related_terms}
        />
      <DefinitionContent
        definition={retrieved_term.simple.definition}
        example={retrieved_term.simple.example}
        diagram={retrieved_term.simple_diagram}
        />
        </div>
        {diagram !== undefined && <DiagramImage className="self-center" diagram={diagram} />}

    </BaseDefinitionCard>
  );
}
