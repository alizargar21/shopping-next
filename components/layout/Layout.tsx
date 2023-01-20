import React from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import { ThemeProvider } from "next-themes";
import Footer from "../footer/Footer";


const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {

  return (
    <ThemeProvider attribute="class" themes={['dark' , 'light']} >
      <Head>
        <title>My Shopping</title>
        <meta name="description" content="next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-layoutBgc-light dark:bg-layoutBgc-dark">
        <Header />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Layout;
