import OpenAI from "openai";
import { defineString } from "firebase-functions/params";
import { zodResponseFormat } from "openai/helpers/zod";
import { ResponseType } from "../types/ResponseType.js";

const openAIAPIKey = defineString("OPEN_AI_API_KEY");
const openAIProject = defineString("OPEN_AI_PROJECT_ID");

export default async function callAI(prompt: string) {
  const openai = new OpenAI({
    project: openAIProject.value(),
    apiKey: openAIAPIKey.value(),
  });

  const res = await openai.beta.chat.completions.parse({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    response_format: zodResponseFormat(ResponseType, "bp_sections"),
  });

  return res.choices[0].message.parsed;
}
