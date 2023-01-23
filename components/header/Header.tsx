import Image from "next/image";
import Link from "next/link";
import React from "react";
import myLogo from "/public/images/logo/logo.png";
import { BsPersonCircle, BsCartCheck } from "react-icons/bs";
import useLanguage from "../../hooks/useLanguage";
import Settings from "../setting/Setting";
const Header = () => {
  const { c, locale } = useLanguage();

  return (
    <header
      className="sticky top-0 z-50 flex 
     h-20 w-full items-center
     justify-between bg-layoutBgc-light shadow-xl backdrop-blur-sm dark:bg-black/60 dark:shadow-2xl md:justify-around
     "
    >
      <Link href="/">
        <div className="">
          <Image
            src={myLogo}
            className="ml-10 md:ml-0"
            width="70"
            alt="myLogo"
          />
        </div>
      </Link>
      <nav className="hidden md:block">
        <Link href="products" className="">
          {c.products}
        </Link>
        <Link href="" className="">
          {c.signIn}
        </Link>
        <Link href="" className="">
          {c.supports}
        </Link>
        <Link href="" className="">
          {c.aboutUs}
        </Link>
      </nav>
      <div className="mr-10 flex w-40 items-center justify-around text-primaryTxt-light dark:text-primaryTxt-dark lg:-mr-10 lg:w-52">
        <BsCartCheck size={25} />
        <BsPersonCircle size={30} />
        <Settings />
      </div>
    </header>
  );
};

export default Header;
