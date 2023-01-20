import Head from "next/head";
import Header from "@/components/header/Header";
import Button from "@/components/UI/Button";


type Props = {
  name : string
}
export default function Home({name } : Props) {
  return (
    <>
      <h1 className="bg-divBgc-light dark:bg-divBgc-dark text-primaryTxt-light dark:text-primaryTxt-dark">Hello {name}</h1>
    </>
  );
}


export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products")
 const data =  await res.json()
 console.log(data)
  return {
    props : {
      name : data.name
    }
  }
}