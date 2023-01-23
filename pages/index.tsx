
import { ProductsList } from "@/libs/types/productList";
import Image from "next/image";




export default function Home({ products } : ProductsList) {

  return (
    <>
      <div className="center flex-col">
        <h1 className="center mt-52 bg-divBgc-light text-primaryTxt-light dark:bg-divBgc-dark dark:text-primaryTxt-dark"></h1>

        {products.map((item : any)  => (
          <div key={item.id}>
            <p>{item.name}</p>
            <Image alt="products" priority width={100} height={100} src={item.image} />
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  return {
    props: {
      products: data.products,
    },
  };
}
