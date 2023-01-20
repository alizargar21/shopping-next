import { useRouter } from "next/router";
import eng from "../locales/eng/eng";
import fa from "../locales/fa/fa"

const useLanguage = () => {
      const {locale} = useRouter()
      
      const c = locale === "eng" ? eng : fa
      // content => c
      return {locale , c}
}

export default useLanguage
