import { useState } from "react";
import { SexType } from "../types/SexType";
import { DataType } from "../types/DataType";
import Field from "./Field";

interface Props {
  onSuccess: (args: DataType) => void;
}

export default function GetDetails({ onSuccess }: Props) {
  const [age, setAge] = useState<number>();
  const [sex, setSex] = useState<SexType>();
  const [sys, setSys] = useState<number>();
  const [dia, setDia] = useState<number>();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!sex || !age || !sys || !dia) return;
    onSuccess({
      age,
      sex,
      sys,
      dia,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-[90%] lg:w-[40%]"
    >
      <Field
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        min={10}
        max={120}
      >
        Age
      </Field>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => setSex("male")}
          className={`p-4 flex-1 cursor-pointer uppercase font-semibold rounded-xl ${
            sex === "male" ? "bg-green-800 text-white" : "bg-green-200"
          }`}
        >
          I am a Male
        </button>
        <button
          type="button"
          onClick={() => setSex("female")}
          className={`p-4 flex-1 cursor-pointer uppercase font-semibold rounded-xl ${
            sex === "female" ? "bg-green-800 text-white" : "bg-green-200"
          }`}
        >
          I am a Female
        </button>
      </div>
      <div className="flex gap-4 mb-4">
        <Field
          type="number"
          value={sys}
          onChange={(e) => setSys(Number(e.target.value))}
          min={0}
          max={500}
          labelProps={{ className: "flex-1" }}
        >
          Systolic in mmHg
        </Field>
        <Field
          type="number"
          value={dia}
          onChange={(e) => setDia(Number(e.target.value))}
          min={0}
          max={500}
          labelProps={{ className: "flex-1" }}
        >
          Diastolic in mmHg
        </Field>
      </div>
      <button
        className=" block cursor-pointer p-4 bg-[#2A2E45] disabled:bg-gray-400 text-white rounded-xl"
        disabled={!age || !sex || !sys || !dia}
      >
        Lets see what it means
      </button>
    </form>
  );
}
