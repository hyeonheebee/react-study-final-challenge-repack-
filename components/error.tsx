interface ErrorProps {
  text: string;
  [key: string]: any;
}

export default function Error({ text }: ErrorProps) {
  return (
    <div className="flex">
      <span className=" text-red-500">{text}</span>
    </div>
  );
}
