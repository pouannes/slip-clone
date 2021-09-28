import React from "react";
import Head from "next/head";

const Layout = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>SlipClone</title>
        <meta name="description" content="A clone of Slip.so" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
