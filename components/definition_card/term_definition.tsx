import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getTermObj } from "@/lib/terms";
import { SimpleCard } from "@/components/definition_card/simple_card";
import { OriginalCard } from "./original_card";
import { SoftwareCard } from "./software_card";

export function TermDefinition({ term }: { term: string }) {
  const retrieved_term = getTermObj(term);
  if (retrieved_term == undefined) {
    return <p>undefined term whoops</p>;
  }

  return (
    <Tabs defaultValue="overview" className="mt-8">
      <TabsList>
        <TabsTrigger value="simple">Simple</TabsTrigger>
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="software">Software</TabsTrigger>
      </TabsList>
      <TabsContent value="simple">
        <SimpleCard term={term} />
      </TabsContent>
      <TabsContent value="original">
        <OriginalCard term={term} />
      </TabsContent>
      <TabsContent value="software">
        <SoftwareCard term={term} />
      </TabsContent>
    </Tabs>
  );
}
