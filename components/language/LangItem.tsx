import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState , useEffect } from "react";
import  useLanguage  from "../../hooks/useLanguage";
import { useDispatch } from "react-redux";
import { settingActions } from "../../features/settingSlice";
interface Props {
  language: string;
  closeHandler : ()=> void
}
const LangItem: React.FC<Props> = ({ language  , closeHandler}) => {
  const { c, locale } = useLanguage();
  const router = useRouter();
  const [lang, setLang] = useState(locale);
  const dispatch = useDispatch();
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setLang(e.currentTarget.id);
    closeHandler
  }

  return (
    <Link 
    href={`${router.asPath}`} locale={language}
     className="whitespace-nowrap flex justify-between items-center py-1 md:py-2"
     
     >

        <div className="flex items-center" >
          <input
            type="radio"
            id={language}
            name="language"
            value={lang}
            className="block accent-red-600"
            checked={locale === language ? true : false}
            onChange={onChangeHandler}
          />
          <label
            htmlFor={language}
            className={`font-farsi mx-3 grow ${
              locale === language && "font-bold"
            }`}
          >
            {c[`${language}`]}
          </label>
        </div>

    </Link>
  );
};

export default LangItem;
