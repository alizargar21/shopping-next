import { useTheme } from "next-themes";
import React from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { BiMoon } from "react-icons/bi";
import ThemeToggler from "./ThemeToggler";
const Theme = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const themeChanger = () => {
    if (currentTheme === "dark") {
      return <ThemeToggler Icon={MdOutlineLightMode} theme="light" />;
    } else {
      return <ThemeToggler Icon={BiMoon} theme="dark" />;
    }
  };

  return (
 
      <div className="">
        <div className="">{themeChanger()}</div>

    </div>
  );
};

export default Theme;
