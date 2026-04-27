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
  general: fieldDefinition;
  original: originalDefinition;
  software: fieldDefinition;
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
  related_terms: ["agents"],
  general: {
    definition: `
    The process of giving an AI model data from the outside world to generate a response.
    `,
    examples: [],
  },
  original: {
    definition: "",
    source: "",
  },
  software: {
    definition:
      "The process of giving an LLM functions or tools it can call to retreive data, so it can use that data to generate a response.",
    examples: [],
  },
};

export const terms: Array<term> = [agent];
