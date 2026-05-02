import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getTermObj, terms } from "@/lib/terms";
import { SimpleCard } from "@/components/simple_card";

export function TermDefinition({ term }: { term: string }) {
  const retrieved_term = getTermObj(term);
  if (retrieved_term == undefined) {
    return <p>undefined term whoops</p>;
  }

  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="simple">Concrete</TabsTrigger>
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="software">Software</TabsTrigger>
      </TabsList>
      <TabsContent value="simple">
        <SimpleCard term={term} />
      </TabsContent>
      <TabsContent value="original">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              Track performance and user engagement metrics. Monitor trends and identify growth opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Page views are up 25% compared to last month.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="software">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>
              Generate and download your detailed reports. Export data in multiple formats for analysis.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            You have 5 reports ready and available to export.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
