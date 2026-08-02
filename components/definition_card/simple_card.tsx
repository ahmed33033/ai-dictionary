import { getTermObj } from "@/lib/terms";
import { BaseDefinitionCard } from "@/components/definition_card/base/base_definition_card";
import { DefintionHeader } from "./base/defintion_header";
import { DefinitionContent } from "./base/definition_content";
import { DiagramImage } from "./base/diagram_image";
import clsx from "clsx";

export function SimpleCard({ term }: { term: string }) {
  const retrieved_term = getTermObj(term);
  const diagram = retrieved_term.simple_diagram;
  return (
    <BaseDefinitionCard>
      <div className="flex flex-col @md:flex-row items-center">
        <div className={clsx({ "@md:w-6/10": diagram !== undefined })}>
          <DefintionHeader
            name={retrieved_term.name}
            type={retrieved_term.simple.type}
            related_terms={retrieved_term.related_terms}
          />
          <DefinitionContent
            definition={retrieved_term.simple.definition}
            example={retrieved_term.simple.example}
          />
        </div>
        {diagram !== undefined && (
          <DiagramImage
            className="mt-5 @md:mt-0 @md:w-4/10"
            diagram={diagram}
          />
        )}
      </div>
    </BaseDefinitionCard>
  );
}
