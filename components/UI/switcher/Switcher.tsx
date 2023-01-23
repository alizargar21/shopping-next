import ThemeToggler from "@/components/theme/ThemeToggler";
import { useTheme } from "next-themes";
import React, {useEffect, useState } from "react";

type Props = {
  element?: React.ReactElement;
  title?: string;
  state? : string; 
};
const Switcher = ({ element, title }: Props) => {
  const [state, setState] = useState(false);
  const {systemTheme} = useTheme()
  useEffect(()=> {
   systemTheme === "light" && setState(false)
  } , [])

  return (
    <div className="flex w-full flex-row items-center justify-between">
 <span className={` text-sm duration-300  ${state ? "" : ""}`}>
        {title}
      </span>
      <div
        className={`relative flex h-4 w-[45px] items-center rounded-full
        ring-1 ring-gray-900
      transition-all duration-500 ease-in-out ${
       state ? "bg-green-500" : "bg-gray-500 "
     }`}
      >
        <span
          onClick={() => setState(!state)}
          className={`center absolute z-20 flex  h-6  w-6 rounded-full text-primaryTxt-light bg-slate-50 ring-1
         ring-gray-900 duration-300 ${
           state ? "rtl:-translate-x-6 -translate-x-1 " 
           : "rtl:translate-x-1 translate-x-6 "
         }`}
        >
          {element}
        </span>
      </div>

     
    </div>
  );
};

export default React.memo(Switcher);
