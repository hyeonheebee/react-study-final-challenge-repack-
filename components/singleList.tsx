import Like from "./like";

interface singleListProps {
  id: number;
  text: string;
  like: boolean | undefined;
  [key: string]: any;
}

export default function SingleList({ like, text, onClickFn }: singleListProps) {
  return (
    <div className=" flex justify-center font-span">
      <div className="flex space-x-4 items-center text-gray-600">
        <span className="text-5xl">{text}</span>
        <Like like={like} onClickFn={onClickFn} />
      </div>
    </div>
  );
}
