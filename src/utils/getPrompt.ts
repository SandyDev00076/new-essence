import { SexType } from "../types/SexType";

export default function getPrompt(args: {
  age: number;
  sys: number;
  dia: number;
  sex: SexType;
}) {
  return `A ${args.age} year old ${args.sex} with blood pressure readings of ${args.sys} over ${args.dia} mmHg. Can you please describe the meaning of these readings by generating a 2-3 word verdict and 4 sections (each section having 40 words max) - "Classification", "Health Implications", "Do we need to worry ?", "Next Steps". Text Only.`;
}
