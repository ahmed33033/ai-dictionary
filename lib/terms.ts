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

export interface fieldDefinition {
  type: string;
  definition: string;
  example: string;
}

interface originalDefinition extends fieldDefinition {
  source: string;
}

export interface diagram {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface term {
  name: string;
  related_terms: Array<string>;
  simple: fieldDefinition;
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
      "An agent can tackle certain tasks with you or for you, from acting as a virtual project manager to handling more complex assignments like reconciling financial statements to close the books (Susanna Ray, Microsoft, 2024).",
  },
  software: {
    type: "Pattern",
    definition:
      "An LLM controlled with prompts, tools, flow-logic and other metadata.",
    example:
      "More specifically, agents in financial services can monitor transaction flows, assess risk factors, and handle tasks like approving routine loans or flagging suspicious activity in real time (Sydney Scott, Workday, 2025).",
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
