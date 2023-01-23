import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useLanguage from "../../hooks/useLanguage";

interface Props {
  language: string;
  closeHandler: () => void;
}
const LangItem: React.FC<Props> = ({ language, closeHandler }) => {
  const { c, locale } = useLanguage();
  const router = useRouter();
  const [lang, setLang] = useState(locale);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setLang(e.currentTarget.id);
  }

  return (
    <Link
      href={`${router.asPath}`}
      locale={language}
      className="flex items-center justify-between whitespace-nowrap py-1 md:py-2"
    >
      <div
        className="flex items-center"
        // onClick={()=>closeHandler()}
      >
        <input
          type="radio"
          id={language}
          name="language"
          value={lang}
          className="block !cursor-pointer accent-red-600"
          checked={locale === language ? true : false}
          onChange={onChangeHandler}
        />
        <label
          htmlFor={language}
          className={`mx-3 grow !cursor-pointer  font-farsi  ${
            locale === language ? "font-bold" : "font-extralight"
          }`}
        >
          {c[`${language}`]}
        </label>
      </div>
    </Link>
  );
};

export default LangItem;
