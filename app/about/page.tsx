import { ProseH1, ProseH2, ProseH3, ProseH4 } from "@/components/prose/ProseHeaders";
import { ProseOL, ProseUL } from "@/components/prose/ProseLists";
import { ProseP } from "@/components/prose/ProseP";

export default function About() {
  return (
    <div>
      {/* Relative for optical alignment */}
      <div className="relative right-4">
        <ProseH1 className="text-center">Why the Dictionary?</ProseH1>
        <ProseP className="text-center">
          GenAI is a liminal space. It's changing rapidly. As a result, new terms are being added continiously.
        </ProseP>
      </div>
      <div className="flex gap-16 *:basis-1/2">
        <div>
          <ProseH2>The Problem</ProseH2>
          <ProseP>
            Understanding new AI "buzzwords" is not always an easy task. Definitions can be too abstract and fail to
            describe how these terms are actually being used.
          </ProseP>
          <ProseH3>Example</ProseH3>
          <ProseP className="italic">What is an AI agent?</ProseP>
          <ProseP>
            When we use the term 'agent', we typically refer to apps like customer-service chatbots or coding agent.
          </ProseP>
          <ProseP>
            IBM defines it as: "a system that autonomously performs tasks by designing workflows with available tools."
          </ProseP>
          <ProseP>
            When we use the term 'agent', we typically refer to apps like customer-service chatbots or coding agent. The
            issues with this definition are:
          </ProseP>
          <ProseUL>
            <li>The word "system" is too generic. Agents usually refer to an app. </li>
            <li>
              Agents are not always autonomous; human-in-the-loop and user-feedback are popular ways of ensuring agents
              are safely executing tasks.
            </li>
            <li>
              Agents don't always design workflows. Some apps use orchestration graphs to make LLM models perform
              single, specific tasks. Even when agents design workflows, it might be a sub-flow within a larger,
              developer-designed workflow.
            </li>
            <li>
              The pharse "with available tools" is too technical relative to the rest of the definition. Someone who
              doesn't know what an 'agent' is will probably not understand that 'tools' refers to programming functions
              that provide additional context or computations.
            </li>
          </ProseUL>
          Overall, the definition doesn't provide you with a concrete picture of what an agent is.
        </div>
        <div>
          <ProseH2>A Solution</ProseH2>
          <ProseP>
            A dictionary that simply and concretely defines AI terms. To do so, the dictionary will do the following:
          </ProseP>
          <ProseOL>
            <li>
              Provide a 'term type' for each term. Similar to word types in traditional dictionaries, 'term type' will
              describe what the term refers to. Examples include: architecture, document format, protocol, and
              behaviour.
            </li>
            <li>
              Provide 'related terms' for each term. This is also similar to conjugations/derivations in traditional
              dictionaries, and it helps route users to the root term. For example, some of the related terms to 'agent'
              are agents and agentic.
            </li>
            <li>
              A simple, concrete definition that defines terms as they're commonly used. To do so, the dictionary will
              provide users with different definitions depending on their background.
            </li>
          </ProseOL>
          <ProseH3>Laying out the Definitions</ProseH3>
          <ProseP>So, what are the different definitions that will be offered, and why?</ProseP>
          <ProseUL>
            <li>First, there will be a general defintion that should be understood by the average professional.</li>
            <li>
              Furthermore, there should also be an 'original' definition, as in a definition that is similar to how the
              term is popularly defined. In the aforementioned example, that would be the IBM definition.
            </li>
            <li>
              There should also be a software definition that should be understood by the average software developer.
            </li>
            <li>
              A diagram! A picture is worth a thousand words, and this dictionary is planning on using diagrams to
              convey the various elements associated with a term.
            </li>
          </ProseUL>
        </div>
      </div>
    </div>
  );
}
