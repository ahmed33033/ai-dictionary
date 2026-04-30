import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { terms } from "@/lib/terms";

export function TermDefinition({ term }: { term: string }) {
  const retreived_term = terms.filter((i) => i.name === term)[0];
  if (retreived_term == undefined) {
    return <p>undefined term whoops</p>;
  }

  return (
    <Tabs defaultValue="overview" className="w-100">
      <TabsList>
        <TabsTrigger value="general">Concrete</TabsTrigger>
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="software">Software</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <Card>
          <CardHeader>
            <CardTitle className="capitalize">{term}</CardTitle>
            <CardDescription className="capitalize">Type: {retreived_term.type}</CardDescription>

            <CardDescription className="capitalize">
              Related Terms: {retreived_term.related_terms.join(", ")}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {retreived_term.general.definition}

            <ul>
              {retreived_term.general.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </CardContent>

          <CardFooter>
            <pre className="mermaid">{retreived_term.general_diagram}</pre>
          </CardFooter>
        </Card>
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
