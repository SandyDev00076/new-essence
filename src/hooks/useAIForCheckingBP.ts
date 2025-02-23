import { useState } from "react";
import { z } from "zod";
import { SectionType } from "../types/AIResponse";
import { DataType } from "../types/DataType";
import callAI from "../utils/callAI";
import getPrompt from "../utils/getPrompt";

export default function useAIForCheckingBP() {
  const [sections, setSections] = useState<z.infer<typeof SectionType>[]>([]);
  const [loading, setLoading] = useState(false);

  async function getBPDataFromAI(data: DataType) {
    setLoading(true);
    const aiResponse = await callAI(getPrompt(data));
    setLoading(false);
    setSections(aiResponse?.sections || []);
  }

  return {
    getBPDataFromAI,
    sections,
    loading,
  };
}
