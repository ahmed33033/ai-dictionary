import { TermDefinition } from "@/components/definition_card/term_definition";

export default async function TabsDemo({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <>
      <TermDefinition term={slug} />
    </>
  );
}
