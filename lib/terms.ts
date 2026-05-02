export const termsPlaceholder: Array<string> = [
  "agent",
  "skill",
  "fine-tuning",
  "RAG",
  "harness",
  "MCP",
  "agent.md",
  "vibe-coding",
  "hallucination",
];

interface fieldDefinition {
  definition: string;
  examples: Array<string>;
}

interface originalDefinition {
  definition: string;
  source: string;
}

interface term {
  name: string;
  type: string;
  related_terms: Array<string>;
  simple: fieldDefinition;
  original: originalDefinition;
  software: fieldDefinition;
  simple_diagram: string;
}

/*
Important parts of a dictionary:
- word type
- Related words
- definition
- small example
*/

const agent: term = {
  name: "agent",
  type: "architecture",
  related_terms: ["agents", "agentic"],
  simple: {
    definition: "An AI-model that uses additional, external data to generate a response.",
    examples: [
      "8G Mobile uses an agent in the form of a customer serivce chatbot. When a user asks about their bill, the chatbot retrieves their records to tell them how much they owe.",
      "Chef Gordon Townsy is selling an agent in the form of a smart menu creator. It asks for the user's favorite dishes to design a 3-course meal that matches their palletes!",
    ],
  },
  original: {
    definition: "... a system that autonomously performs tasks by designing workflows with available tools.",
    source: "IBM, 2024",
  },
  software: {
    definition:
      "The process of giving an LLM functions or tools it can call to retreive data, so it can use that data to generate a response.",
    examples: [
      "You can create an agent by attaching a 'GetWeather' tool to LLM calls. When a user asks about the weather, the LLM will call your 'GetWeather' tool to provide the user with the requested weather conditions.",
      "ChatGPT is an agent because when it's asked a techincal question, it might search the web to generate an accurate response.",
    ],
  },
  simple_diagram: `
  flowchart
      model@{shape: rounded, label: "AI Model"}
      data@{shape: rounded, label: "Data"}
          model --> |request|data
          data --> |receive|model
      model --> Goal@{shape: rounded, label: "Response"}
`,
};

export const terms: Array<term> = [agent];
export function getTermObj(selected_term: string) {
  return terms.filter((term) => term.name === selected_term)[0];
}
