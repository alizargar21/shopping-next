import Head from "next/head";
import Header from "@/components/header/Header";
import Button from "@/components/UI/Button";
import Theme from "@/components/theme/Theme";
import Language from "@/components/language/Language";

type Props = {
  name: string;
};
export default function Home({ name }: Props) {
  return (
    <>
    <div className="center flex-col">
      <h1 className="mt-52 center bg-divBgc-light text-primaryTxt-light dark:bg-divBgc-dark dark:text-primaryTxt-dark">
        Hello {name}
      </h1>

      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      name: data.name,
    },
  };
}
