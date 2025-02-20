import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod.mjs";
import { ResponseType } from "../types/AIResponse";

export default async function callAI(prompt: string) {
  try {
    const openai = new OpenAI({
      dangerouslyAllowBrowser: true,
      project: import.meta.env.VITE_OPENAI_PROJECT_ID,
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    });

    const response = await openai.beta.chat.completions.parse({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: zodResponseFormat(ResponseType, "bp_sections"),
    });

    return response.choices[0].message.parsed;
  } catch (e) {
    console.error("Something went wrong");
  }
}
