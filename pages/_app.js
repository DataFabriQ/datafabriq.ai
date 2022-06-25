import 'aos/dist/aos.css';
import '../styles/globals.scss'
import Head from "next/head";

import useWindowSize from "../hooks/useWindowDimensions";
import {useEffect} from "react";

import AOS from "aos";

function App({ Component, pageProps }) {
  const { height, width } = useWindowSize();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "smooth",
      once: true,
      mirror: true
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover" />

        <title>DatafabriQ - Enables the value of data</title>
        <meta name="title" content="DatafabriQ - Enables the value of data" />
        <meta name="description" content="DatafabriQ - Enables the value of data" />
        <meta name="keywords" content="DatafabriQ - Enables the value of data" />

        <meta property="og:site_name" content="DatafabriQ" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://datafabriq.ai/" />
        <meta property="og:title" content="DatafabriQ - Enables the value of data" />
        <meta property="og:description" content="DatafabriQ - Enables the value of data" />
        <meta property="og:image" content="/logo.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://datafabriq.ai/" />
        <meta property="twitter:title" content="DatafabriQ - Enables the value of data" />
        <meta property="twitter:description" content="DatafabriQ - Enables the value of data" />
        <meta property="twitter:image" content="/logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
