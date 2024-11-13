import Document, { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/navigation";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const customParams = ctx.customParams || {};
    const { req } = ctx;
    const includesTendo = req?.url?.includes("tendo");
    const includesTendoPlus = req?.url?.includes("tendoactive-plus-20-stick");
    return { ...initialProps, customParams, includesTendo, includesTendoPlus };
  }

  render() {
    let script = true;
    const { customParams , currentPath} = this.props;
    console.log("jjgg");
    console.log(currentPath);
    return (
      <Html lang="en">
        <Head>
        {(this.props.includesTendo || this.props.includesTendoPlus) && (
            <link rel="canonical" href="https://brunomd.eu/tendo" />
          )}
     
          <title>
            {customParams.title
              ? customParams.title
              : "BrunoMD | Prodotti per la Salute e il Benessere"}
          </title>
          <meta
            name="title"
            content={
              customParams.title
                ? customParams.title
                : "BrunoMD | Prodotti per la Salute e il Benessere"
            }
          />
          {/* <meta
            name="description"
            content={
              customParams.description
                ? customParams.description
                : "Prodotti per la salute e il benessere radicati nel cuore dell'Italia, realizzati con ingredienti completamente naturali. Integratori di grado farmaceutico per alimentare il tuo futuro."
            }
          /> */}
          <meta
            property="og:image"
            content={
              customParams.imageUrl
                ? customParams.imageUrl
                : "https://cdn.shopify.com/s/files/1/0674/0518/5339/files/purpose.webp"
            }
          />

          <meta
            name="google-site-verification"
            content="O8ZEoQKQm6e1O2geckBcN7rSl6VzuRGakDd0E-mCO8s"
          />

          <meta property="og:image:type" content="image/webp" />
          <link rel="shortcut icon" href="/favicon-black.png" />
          <link
            rel="stylesheet"
            href="https://cdn.shopify.com/s/files/1/0674/0518/5339/files/ivypresto.css?v=1695031279"
            as="style"
            onload="this.onload=null;this.rel='stylesheet'"
          />
          {script && (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-59JZZKRR');`,
              }}
            ></script>
          )}

          {script && (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5105872,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
              }}
            ></script>
          )}

          {/* {script && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function e() { var e = document.createElement("script"); e.type = "text/javascript", e.async = true, e.src = 'https://cdn-widgetsrepository.yotpo.com/v1/loader/XUsO8fePARFSG9R48rttzA'; var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e, t) })();`,
            }}
          ></scripty>
        )} */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {script && (
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-59JZZKRR"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              }}
            ></noscript>
          )}
          {script && (
            <>
              <script
                dangerouslySetInnerHTML={{
                  __html: `(function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:3436115,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
                }}
              />
            </>
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
