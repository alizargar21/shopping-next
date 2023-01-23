import React from "react";
import { IconType } from "react-icons";
import { useTheme } from 'next-themes';
import Switcher from "@/components/UI/switcher/Switcher";

import useLanguage from "../../hooks/useLanguage"
interface Props {
  theme: string;
  currentTheme?: string;
  Icon: IconType;
}
const ThemeToggler: React.FC<Props> = ({ theme, Icon, currentTheme }) => {
  const { setTheme } = useTheme();
  const {c}  = useLanguage()
  return (
        <Switcher title={c.darkMode} 
        element={<div
            className={` flex items-center justify-start  ${
              currentTheme && currentTheme === theme ? "font-bolder" : ""
            }`}
            onClick={() => setTheme(theme)}
          >
            <button className="border-none" aria-label="theme-toggle" role="button">
              <Icon className="text-2xl drop-shadow-lg"
              />
            </button>
          </div>}/>
    
  );
};

export default ThemeToggler;
