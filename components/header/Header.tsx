import Image from "next/image";
import Link from "next/link";
import React from "react";
import myLogo from "../../images/logo/logo.png";
import Theme from "./theme/Theme";
const Header = () => {
  return (
    <header className="flex w-full items-center justify-between  md:justify-around">
      <Link href="/">
        <div className="">
          <Image src={myLogo} className="ml-10 md:ml-0" width="70" alt="myLogo" />
        </div>
      </Link>
      <nav className="hidden md:block">
        <a className="nav-links">Category</a>
        <a className="nav-links">Sign Up</a>
        <a className="nav-links">Supports</a>
        <a className="nav-links">About</a>
      </nav>
      <Theme />
    </header>
  );
};

export default Header;
