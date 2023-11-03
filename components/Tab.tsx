interface TabProps {
  // text: string;
  method: string;
  [key: string]: any;
}

export default function Tab({ onClickFn, method }: TabProps) {
  let emailColor;
  let phoneColor;
  // console.log(method);
  // if (method === "email") {
  //   emailColor = "bg-rose-300  text-white";
  //   phoneColor = "bg-white  text-rose-500 ";
  // } else {
  //   emailColor = "bg-white  text-rose-500 ";
  //   phoneColor = "bg-rose-300  text-white";
  // }
  const accentColor = " bg-rose-300  text-white ";
  const baseColor = "bg-white  text-rose-400 border-rose-200";

  method === "email"
    ? ((emailColor = accentColor), (phoneColor = baseColor))
    : ((emailColor = baseColor), (phoneColor = accentColor));

  return (
    <div className="flex">
      <button
        onClick={onClickFn}
        className={"".concat(
          emailColor,
          " w-full  py-2   rounded-t text-lg focus:outline-none border  ",
          emailColor
        )}
      >
        Email
      </button>

      <button
        onClick={onClickFn}
        className={"".concat(
          phoneColor,
          "  w-full  py-2   rounded-t text-lg focus:outline-none border ",
          phoneColor
        )}
      >
        Phone
      </button>
    </div>
  );
}
