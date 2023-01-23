import useLanguage from "../../hooks/useLanguage";
import { useEffect} from "react";
import LangItem from "./LangItem";
import { useDispatch } from "react-redux";
import { settingActions } from "../../features/settingSlice";
const Language = () => {
  const { c, locale } = useLanguage();
    const dispatch = useDispatch()
  useEffect(() => {
    document.documentElement.dir = locale === "eng" ? "ltr" : "rtl"
   
    }, [locale]);
 
  return (<>
      <div>
        <h4>{c.language}</h4>
        <LangItem language="fa" closeHandler={() => dispatch(settingActions.closeSetting())} />
        <LangItem language="eng" closeHandler={() => dispatch(settingActions.closeSetting())} />

      </div>
  </>);
};

export default Language;
