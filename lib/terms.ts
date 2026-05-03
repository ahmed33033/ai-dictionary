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
  type: string;
  definition: string;
  example: string;
}

interface originalDefinition {
  type: string;
  definition: string;
  example: string;
  source: string;
}

export interface diagram {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface term {
  name: string;
  related_terms: Array<string>;
  simple: fieldDefinition;
  original: originalDefinition;
  software: fieldDefinition;
  simple_diagram?: diagram;
  software_diagram?: diagram;
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
  related_terms: ["agents", "agentic"],
  simple: {
    type: "Software Pattern",
    definition: "An AI-model that uses additional, external data to generate a response.",
    example:
      "8G Mobile uses an agent in the form of a customer serivce chatbot. When a user asks about their bill, the chatbot retrieves their records to tell them how much they owe.",
  },
  original: {
    type: "system",
    definition: '"... a system that autonomously performs tasks by designing workflows with available tools."',
    example:
      '"...imagine a user planning their vacation. The user tasks an AI agent with predicting which week in the next year would likely have the best weather for their surfing trip in Greece."',
    source: "IBM, 2024",
  },
  software: {
    type: "architecture",
    definition:
      "The process of giving an LLM functions or tools it can call to retreive data, so it can use that data to generate a response.",
    example:
      "You can create an agent by attaching a 'GetWeather' tool to LLM calls. When a user asks about the weather, the LLM will call your 'GetWeather' tool to provide the user with the requested weather conditions.",
  },
  simple_diagram: {
    src: "/mermaid_diagrams/agent_simple.svg",
    alt: "Simple drawing of agent requesting and receiving data, before responding to user.",
    width: 300,
    height: 300,
  },
};

export const terms: Array<term> = [agent];
export function getTermObj(selected_term: string) {
  return terms.filter((term) => term.name === selected_term)[0];
}
