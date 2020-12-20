import React from "react";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>kuso.domains</title>
      </Head>
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
        <h1 className="text-gray-50 font-din text-9xl">kuso.domains</h1>
      </div>
    </>
  );
}

export default HomePage;
