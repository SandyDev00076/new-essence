import { useState } from "react";
import { SectionType } from "../types/AIResponse";
import { z } from "zod";
import getPrompt from "../utils/getPrompt";
import callAI from "../utils/callAI";
import { DataType } from "../types/DataType";

export default function useAIForCheckingBP() {
  const [sections, setSections] = useState<z.infer<typeof SectionType>[]>([]);

  async function getBPDataFromAI(data: DataType) {
    const aiResponse = await callAI(getPrompt(data));
    setSections(aiResponse?.sections || []);
  }

  return {
    getBPDataFromAI,
    sections,
  };
}
