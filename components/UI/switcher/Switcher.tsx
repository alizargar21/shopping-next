import ThemeToggler from "@/components/header/theme/ThemeToggler";
import React, { useState } from "react";
type Props = {
  element?: React.ReactElement;
  title?: string;
};
const Switcher = ({ element, title }: Props) => {
  const [state, setState] = useState(false);

  return (
    <div className={`relative flex h-4 w-[40px] items-center rounded-full  ring-1 ring-gray-900
     ring-white  transition-all duration-500 ease-in-out ${state ?"bg-primary" : 'bg-gray-500 '}`}  >
      {/* <span
        className={`absolute text-sm duration-300 ${
          state ? " translate-x-10" : "translate-x-1"
        }`}
      >
        {title}
      </span> */}
      <span
        onClick={() => setState(!state)}
        className={`absolute ring-1 center ring-gray-900  bg-slate-50  flex h-6 w-6 rounded-full duration-300 ${
          state ? "-translate-x-1 text-primaryTxt-light" : "translate-x-6 "
        }`}
      >
        {element}
      </span>
    </div>
  );
};

export default Switcher;
