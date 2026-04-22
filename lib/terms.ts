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

interface example {
  situation: string;
  solution: string;
  summary: string;
}

interface fieldDefinition {
  definition: string;
  example: example;
}

interface term {
  name: string;
  type: string;
  software: fieldDefinition;
  general: fieldDefinition;
}

const agent: term = {
  name: "agent",
  type: "architecture",
  software: {
    definition:
      "The process of giving an LLM functions or tools it can call to retreive data, so it can use that data to generate a response.",
    example: {
      situation: `
        You are designing an app that allows users to ask questions about the weather, like "What's the weather in San Francisco?

        You have a internal function: \`get_weather\`, which accepts 1 argument: \`city\`, and it returns the numerical weather conditions for that city.
        
        Based on the user prompt, you want to call \`get_weather\` with the city that the user is asking about. Then, you want to return a conversational summary about the weather in that city, like: "Oh it's sunny and bright in San Francisco! Make sure you stock up in some ice cream cause its HOT."`,

      solution: `
        Get the user prompt. Make an LLM call, and add the function definition of \`get_weather\` as a tool call. The LLM response will then return a function call that looks something like:

        \`\`\`json
        tool_call: {
            get_weather: {
                city: "San Francisco"
            }
        }
        \`\`\`

        You will then use this tool call to call \`get_weather\`, before passing its return values (the numerical weather conditions) back to the LLM. The LLM will then create a conversational summary for the user about the weather.
        `,

      summary: `
        An agent is the process of letting an LLM call an external function like \`get_weather\` and use its return value to generate a response.
        `,
    },
  },
  general: {
    definition: `
    The process of giving an AI model data from the outside world to generate a response.
    `,
    example: {
      situation: `
        You want to create an app where users converse with The Weather Channel!

        Users have a chat interface, and they can ask about the weather in a particular city.

        The app will need data from The Weather Channel to respond to the user's prompts.
        `,
      solution: `
        Pass a user's prompt to the AI model, along with weather conditions from The Weather Channel.

        Then, have the AI model respond to the user and tell them about the weather.
        `,
      summary: `
        The agent is the process of giving an AI model data from The Weather Channel, so the AI model can respond to the user's specific prompt.
        `,
    },
  },
};

export const terms: Array<term> = [agent];
