import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <title>
      BrunoMD | Prodotti per la Salute e il Benessere
        </title>
        <meta
          name="description"
          content="Prodotti per la salute e il benessere radicati nel cuore dell'Italia, realizzati con ingredienti completamente naturali. Integratori di grado farmaceutico per alimentare il tuo futuro."
        />
        <meta
          property="og:image"
          content="https://cdn.shopify.com/s/files/1/0674/0518/5339/files/purpose.webp?v=1695029992"
        />
        <meta property="og:image:type" content="image/png" />
        <link rel="shortcut icon" href="/favicon-black.png" />
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-59JZZKRR');`}}></script>
<link rel="stylesheet" href="https://cdn.shopify.com/s/files/1/0674/0518/5339/files/ivypresto.css?v=1695031279" as="style" onload="this.onload=null;this.rel='stylesheet'" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-59JZZKRR"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
      </body>
    </Html>
  )
}