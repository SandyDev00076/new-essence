import { z } from "zod";
import { SectionType } from "../types/AIResponse";
import DataSection from "./DataSection";
import { useEffect } from "react";
import scrollIntoSection from "../utils/scrollIntoSection";

interface Props {
  sections: z.infer<typeof SectionType>[];
}

const BP_SECTIONS_ID = "bp-sections";

export default function AllSections({ sections }: Props) {
  useEffect(() => {
    scrollIntoSection(BP_SECTIONS_ID);
  }, []);

  return (
    <section className="w-[90%] lg:w-[40%]" id={BP_SECTIONS_ID}>
      <h2 className="text-gray-700 text-2xl mb-4">Here you go</h2>
      {sections.map((section) => (
        <DataSection
          key={section.title}
          title={section.title}
          content={section.content}
        />
      ))}
    </section>
  );
}
