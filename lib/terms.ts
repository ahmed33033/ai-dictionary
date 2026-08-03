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
  diagram?: diagram
}

export interface diagram {
  src: string;
  alt: string;
}

export interface term {
  name: string;
  related_terms: Array<string>;
  simple: fieldDefinition;
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
  related_terms: ["agents", "agentic"],
  simple: {
    type: "Software Pattern",
    definition:
      "An AI-model that uses additional, external data to generate a response.",
    example:
      "An agent can tackle certain tasks with you or for you, from acting as a virtual project manager to handling more complex assignments like reconciling financial statements to close the books (Susanna Ray, Microsoft, 2024).",
    diagram: {
      src: "/mermaid_diagrams/agent_simple",
      alt: "Simple drawing of agent requesting and receiving data, before responding to user.",
    },
  },
  software: {
    type: "Pattern",
    definition:
      "An LLM controlled with prompts, tools, flow-logic and other metadata.",
    example:
      "More specifically, agents in financial services can monitor transaction flows, assess risk factors, and handle tasks like approving routine loans or flagging suspicious activity in real time (Sydney Scott, Workday, 2025).",
  },
};

const agi: term = {
  name: "AGI",
  related_terms: ["Artificial General Intelligence"],
  simple: {
    type: "Status",
    definition: "Refers to AI systems that think and reason like human beings.",
    example: "Currently, true AGI does not exist, but research and development efforts are ongoing (Google Cloud, 2026)."
  },
  software: {
    type: "Intelligence Type",
    definition: "AI systems that mirror how humans reason, with abilities like the transfer of knowledge across domains and the ability to use common sense logic.",
    example: "AGI systems conceivably could handle novel situations, not just perform well on a single, narrow task (Stanford HAI, n.d.)."
  }
}

const fine_tune: term = {
  name: "fine-tune",
  related_terms: ["fine-tuning", "fine-tuned"],
  simple: {
    type: "Specialization Strategy",
    definition: "Using specialized data to help make an AI-model perform better at particular tasks.",
    example: "Fine-tuning connects the intelligence in general-purpose LLMs to enterprise data, enabling organizations to adapt generative AI (GenAI) models to their unique business needs with higher degrees of specificity and relevance (Databricks Staff, n.d.)."
  },
  software: {
    type: "Tuning Technique",
    definition: "Further training an LLM to better perform specialized tasks.",
    example: "By leveraging prior model training through transfer learning, fine-tuning can reduce the amount of expensive computing power and labeled data needed to obtain large models tailored to niche use cases and business needs (Dave Bergmann, IBM, n.d.)."
  }
}

const multi_agent: term = {
  name: "multi-agent",
  related_terms: ["multi-agent system"],
  simple: {
    type: "Software Pattern",
    definition: "Connecting multiple agents together to accomplish a goal.",
    example: "Multi-agent systems make the workflow more modular and give each stage a clear role (Ayoola Olafenwa, towards data science, 2026)."
  },
  software: {
    type: "Architecture",
    definition: "A flow composed of multiple agents, where each agent completes a specialized task, to collectively complete a goal.",
    example: "Multi-agent patterns are particularly valuable when a single agent has too many tools and makes poor decisions about which to use, when tasks require specialized knowledge with extensive context (long prompts and domain-specific tools), or when you need to enforce sequential constraints that unlock capabilities only after certain conditions are met (Langchain, n.d.)."
  }
}

const hallucinate: term = {
  name: "hallucinate",
  related_terms: ["hallucination"],
  simple: {
    type: "Behaviour",
    definition: "When an AI model generates false facts, especially ones that less obvious.",
    example: "Consider the prompt: \"What is Adam Tauman Kalai's birthday? If you know, just respond with DD-MM.\" On three separate attempts, a state-of-the-art open-source language model output three incorrect dates: “03-07”, “15-06”, and “01-01”, even though a response was requested only if known (Kalai et al., OpenAI, 2025)."
  },
  software: {
    type: "Behaviour",
    definition: "When an LLM generates inaccurate statements, or makes up data where it doesn't exist.",
    example: "Hallucinations undermine the reliability and trustworthiness of LLMs, especially in domains requiring factual accuracy (Alansari and Luqman, arxiv, 2025)."
  }

}


export const terms: Array<term> = [agent, agi, fine_tune, multi_agent, hallucinate];
export function getTermObj(selected_term: string) {
  return terms.filter((term) => term.name === selected_term)[0];
}
