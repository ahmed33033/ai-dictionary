import { getTermObj } from "@/lib/terms";
import { BaseDefinitionCard } from "@/components/definition_card/base/base_definition_card";
import { DefintionHeader } from "./base/defintion_header";
import { DefinitionContent } from "./base/definition_content";
import { DiagramImage } from "./base/diagram_image";
import clsx from "clsx";

export function SimpleCard({
  term,
  termType,
}: {
  term: string;
  termType: string;
}) {
  const retrieved_term = getTermObj(term);
  let termTypeObj = null;
  if (termType == "simple") {
    termTypeObj = retrieved_term.simple;
  } else {
    termTypeObj = retrieved_term.software;
  }
  return (
    <BaseDefinitionCard>
      <div className="flex flex-col @md:flex-row items-center">
        <div
          className={clsx({ "@md:w-6/10": termTypeObj.diagram !== undefined })}
        >
          <DefintionHeader
            name={retrieved_term.name}
            type={termTypeObj.type}
            related_terms={retrieved_term.related_terms}
          />
          <DefinitionContent
            definition={termTypeObj.definition}
            example={termTypeObj.example}
          />
        </div>
        {termTypeObj.diagram !== undefined && (
          <DiagramImage
            className="mt-5 @md:mt-0 @md:w-4/10"
            diagram={termTypeObj.diagram}
          />
        )}
      </div>
    </BaseDefinitionCard>
  );
}
