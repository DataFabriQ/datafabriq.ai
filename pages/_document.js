import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
        rel="preload"
        href="/fonts/DFLogoFont.woff2" // fix: convert .ttf to .woff2
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
