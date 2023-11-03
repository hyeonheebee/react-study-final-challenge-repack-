interface ButtonProps {
  text: string;
  [key: string]: any;
}

export default function Button({ text, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="font-span w-full mt-32 bg-white hover:bg-white hover:text-rose-500  hover:bg-gradient-to-r from-red-500 via-white to-white hover:to-red-500 text-rose-500 py-4 border border-transparent rounded-md  text-3xl ring-2 ring-offset-2 ring-rose-500 focus:outline-none "
    >
      {text}
    </button>
  );
}
