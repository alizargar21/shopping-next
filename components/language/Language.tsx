import useLanguage from "../../hooks/useLanguage";
import { useEffect} from "react";
import LangItem from "./LangItem";
import { useDispatch } from "react-redux";
import { settingActions } from "../../features/settingSlice";
const Language = () => {
  const {  locale } = useLanguage();
    const dispatch = useDispatch()
  useEffect(() => {
    document.documentElement.dir = locale === "eng" ? "ltr" : "rtl"
    console.log(locale);
    }, [locale]);
 
  return (<>
      <div>
        <LangItem language="eng" closeHandler={() => dispatch(settingActions.closeSetting())} />
        <LangItem language="fa" closeHandler={() => dispatch(settingActions.closeSetting())} />

 

      </div>
  </>);
};

export default Language;
