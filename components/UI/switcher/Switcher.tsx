import ThemeToggler from "@/components/theme/ThemeToggler";
import React, { useState } from "react";
type Props = {
  element?: React.ReactElement;
  title?: string;
};
const Switcher = ({ element, title }: Props) => {
  const [state, setState] = useState(false);

  return (
    <div
      className={`relative flex h-4 w-[50px] items-center rounded-full  ring-1 ring-gray-900
     ring-white  transition-all duration-500 ease-in-out ${
       state ? "bg-primary" : "bg-gray-500 "
     }`}
    >
      <span
        className={`absolute text-sm duration-300 ${
          state ? " translate-x-10" : "translate-x-1"
        }`}
      >
        {title}
      </span>
      <span
        onClick={() => setState(!state)}
        className={`center absolute flex h-6  w-6  rounded-full bg-slate-50 ring-1 ring-gray-900 duration-300 ${
          state ? "-translate-x-1 text-primaryTxt-light" : "translate-x-6 "
        }`}
      >
        {element}
      </span>
    </div>
  );
};

export default Switcher;
