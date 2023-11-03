import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  kind?: "username" | "phone" | "email" | "text";
  register: UseFormRegisterReturn;
  [key: string]: any;
}

export default function Input({
  label,
  name,
  kind = "text",
  type,
  placeholder,
  required,
  register,
}: InputProps) {
  return (
    <div className="w-screen">
      <label
        className="mb-1 ml-2 block text-sm font-medium text-red-800 font-dongle"
        htmlFor={name}
      >
        {label}
        {kind === "username" ? (
          <span className="text-xs ml-4 text-rose-600 font-dongle">
            💕 이름을 공백으로 두시면 재밌는 랜덤 이름을 만들어 드려요 😆
          </span>
        ) : null}
      </label>

      {kind === "text" ? (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register}
          className="appearance-none w-full px-3 py-2  border border-rose-300 rounded-md shadow-sm placeholder-rose-300 focus:outline-none focus:ring-rose-300 focus:border-rose-300"
        />
      ) : null}
      {kind === "username" ? (
        <>
          {" "}
          <div className="rounded-md relative flex  items-center shadow-sm flex flex-col  ">
            <input
              id={name}
              type={type}
              placeholder={placeholder}
              required={required}
              {...register}
              className="appearance-none w-full px-3 py-2 mb-4  border border-rose-300 rounded-md shadow-sm placeholder-rose-300 focus:outline-none focus:ring-rose-300 focus:border-rose-300"
            />
          </div>{" "}
        </>
      ) : null}
      {kind === "phone" ? (
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center mb-4 px-3 rounded-l-md border border-r-0 border-rose-300 bg-rose-300 text-white select-none text-sm">
            +82
          </span>
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            required={required}
            {...register}
            className="appearance-none w-full px-3 py-2 mb-4  border border-rose-300 rounded-md shadow-sm placeholder-rose-300  focus:outline-none focus:ring-rose-300 focus:border-rose-300"
          />
        </div>
      ) : null}
      {kind === "email" ? (
        <div className="flex rounded-md shadow-sm">
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            required={required}
            {...register}
            className="appearance-none w-full px-3 py-2  mb-4  border border-rose-300 rounded-md shadow-sm placeholder-rose-300  focus:outline-none focus:ring-rose-300 focus:border-rose-300"
          />
        </div>
      ) : null}
    </div>
  );
}
