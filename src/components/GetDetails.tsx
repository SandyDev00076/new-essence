import { FormEvent, useState } from "react";
import { DataType } from "../types/DataType";
import { SexType } from "../types/SexType";

interface Props {
  onSuccess: (args: DataType) => void;
}

export default function GetDetails({ onSuccess }: Props) {
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState<SexType>();
  const [sys, setSys] = useState(0);
  const [dia, setDia] = useState(0);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!sex) return;
    onSuccess({
      age,
      sex,
      sys,
      dia,
    });
  }

  return (
    <form onSubmit={handleSubmit} className=" mb-2">
      <label>
        Enter Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </label>
      <div>
        <button
          type="button"
          className={`p-4 ${sex === "male" ? "bg-green-500" : "bg-gray-300"}`}
          onClick={() => setSex("male")}
        >
          Male
        </button>
        <button
          type="button"
          className={`p-4 ${sex === "female" ? "bg-green-500" : "bg-gray-300"}`}
          onClick={() => setSex("female")}
        >
          Female
        </button>
      </div>
      <label>
        Enter Systolic in mmHg:{" "}
        <input
          value={sys}
          type="number"
          onChange={(e) => setSys(Number(e.target.value))}
        />
      </label>
      <label>
        Enter Diastolic in mmHg:{" "}
        <input
          value={dia}
          type="number"
          onChange={(e) => setDia(Number(e.target.value))}
        />
      </label>
      <button
        className=" block p-4 bg-gray-800 disabled:bg-gray-400 text-white"
        disabled={!age || !sex || !sys || !dia}
      >
        Lets see what it means
      </button>
    </form>
  );
}
