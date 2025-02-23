import { DataType } from "../types/DataType";

export default function getPrompt(args: DataType) {
  return `A ${args.age} year old ${args.sex} with blood pressure readings of ${args.sys} over ${args.dia} mmHg. Can you please describe the meaning of these readings by generating 4 sections (each section having 40 words max) - 'Classification', 'Health Implications', 'Do we need to worry ?', 'Next Steps'. Text Only.`;
}
