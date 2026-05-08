import { TermDefinition } from "@/components/definition_card/term_definition";
import { terms, termsPlaceholder } from "@/lib/terms";

export function generateStaticParams() {
  return termsPlaceholder.map((term) => ({
    name: term,
  }));
}

export default async function TabsDemo({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;

  return (
    <>
      <TermDefinition term={name} />
    </>
  );
}
