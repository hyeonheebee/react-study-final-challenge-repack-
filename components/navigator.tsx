import Link from "next/link";
interface NavProps {
  url?: string;
  urlText?: string;
  [key: string]: any;
}
export default function Navigator({ url, urlText, onClickfn }: NavProps) {
  return (
    <div className="w-full my-2  mb-16 px-4 bg-teal-500 text-sm text-white  py-1 border border-transparent shadow-sm font-medium flex justify-between hover:bg-teal-800 rounded-b md:border-teal-200">
      <nav className="cursor-pointer">
        {url ? <Link href={url}>{urlText}</Link> : null}
        {onClickfn ? <button onClick={onClickfn}>Logout</button> : null}
      </nav>
    </div>
  );
}
