import React from "react";
import Head from "next/head";
import { MusicPlayer } from "../components/MusicPlayer";

const KUSO_DOMAINS = [
  "gexiv.net",
  "kiriya.blue",
  "gomika.su",
  "teleka.su",
  "soude.su",
  "kakkoka.su",
  "dynamicb.one",
  "shinchokuda.me",
  "kyoumoichini.ch",
  "kibishi.me",
  "mickeymou.se",
  "teineina.life",
  "orem.uno",
  "iidesuyo.com",
  "sounanokamoshiremasen.ga",
  "yasetai.dev",
  "nerenai.ga",
  "ohayougozaima.su",
  "kuneku.net",
  "yoroshiku.onegai.shim.earth",
  "nasa.so",
  "otsu.care",
  "murida.ga",
  "turup.page",
  "kusodoma.in",
  "absolute-ze.ro",
  "nema.su",
  "気合い.net",
  "iihana.si",
  "ofuton.in",
  "iyado.su",
  "metaba.su",
  "メタバース.live",
  "owari.shop",
  "mouyuru.site",
  "imanona.si",
];

function HomePage() {
  return (
    <>
      <Head>
        <title>kuso.domains</title>
        <meta property="og:title" content="kuso.domains" />
        <meta property="og:description" content="クソドメイン部" />
        <meta property="og:url" content="https://kuso.domains" />
        <meta property="og:image" content="https://kuso.domains/logo.png" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className="font-din">
        <div className="h-screen w-screen max-w-full">
          <div className="w-full h-full bg-gray-900 flex justify-center items-center fixed">
            <h1 className="text-gray-50 text-6xl md:text-8xl lg:text-9xl">
              <a href="https://kuso.domains">kuso.domains</a>
            </h1>
          </div>
        </div>
        <div className="relative min-h-screen bg-gray-50 py-24 px-24">
          <h2 className="text-gray-900 text-lg text-center">collection</h2>
          <div className="mt-0.5 mb-16">
            <div className="h-0.5 mx-auto w-36 bg-gray-900 rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-900 text-center text-2xl">
            {KUSO_DOMAINS.map((domain) => (
              <div
                key={domain}
                className="h-48 flex justify-center items-center"
              >
                <a href={`https://${domain}`}>{domain}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MusicPlayer />
    </>
  );
}

export default HomePage;
