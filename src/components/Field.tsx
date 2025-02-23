import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}
export default function Field({ children, labelProps, ...props }: Props) {
  return (
    <label className="flex flex-col gap-2" {...labelProps}>
      <span className=" text-white font-semibold ml-3">{children}</span>
      <input
        {...props}
        className={`bg-white w-full p-4 rounded-xl text-2xl ${props.className}`}
      />
    </label>
  );
}
