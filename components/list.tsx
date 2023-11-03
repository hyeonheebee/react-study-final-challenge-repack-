import Link from "next/link";

interface ListProps {
  id: string;
  text: string;
  [key: string]: any;
}

export default function List({ id, text }: ListProps) {
  return (
    <Link href={`/tweet/${id}`}>
      <a className=" flex px-8 pt-5  cursor-pointer justify-between bg-rose-100 py-2 border border-white">
        <div className=" flex space-x-2 items-end justify-end">
          <span>{text}</span>
        </div>
      </a>
    </Link>
  );
}
