import Document, { Html, Head, Main, NextScript } from "next/document";
// import { useRouter } from "next/navigation";

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
    const { customParams, currentPath } = this.props;
    // console.log("jjgg");
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


          {/* SEO Product  Structure Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
          {
"@context": "https://schema.org",
"@type": "Product",
"name": "TendoActive Plus",
"image": "https://cdn.shopify.com/s/files/1/0674/0518/5339/files/01b-BMD-Tendoactive_Plus-9O3A3013-
v2.png?v=1727453708",
"description": "Integratore alimentare con azione completa per tendini e legamenti",
"brand": {
"@type": "Brand",
"name": "Bruno MD"
},
"offers": {
"@type": "Offer",
"url": "https://brunomd.eu/tendo",
"priceCurrency": "EUR",
"price": "25",
"availability": "https://schema.org/InStock",
"itemCondition": "https://schema.org/NewCondition"
},
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "5",
"ratingCount": "4",
"reviewCount": "4"
},
"review": [{
"@type": "Review",
"name": "Risultati dopo solo una settimana",
"reviewBody": "Ho iniziato a prendere Tendoactive Plus circa un mese fa su consiglio del mio
fisioterapista per un problema ai tendini che mi affliggeva da tempo. Devo dire che sono rimasto
piacevolmente sorpreso dai risultati. Già dopo la prima settimana ho iniziato a notare un miglioramento
nella mobilità e una riduzione del dolore durante le attività quotidiane. Continuero' a
prenderlo....Grazie",
"reviewRating": {
"@type": "Rating",
"ratingValue": "5"
},

"datePublished": "2024-09-13",
"author": {"@type": "Person", "name": "Giacomo"}
},{
"@type": "Review",
"name": "Funziona",
"reviewBody": "Questo prodotto funziona davvero! Lo riordero' sicuramente.",
"reviewRating": {
"@type": "Rating",
"ratingValue": "5"
},
"datePublished": "2024-05-20",
"author": {"@type": "Person", "name": "Lorella"}
},{
"@type": "Review",
"name": "Ottimo integratore",
"reviewBody": "La formula sembra ben bilanciata: il collagene, insieme alla vitamina C e al
manganese, svolge un ruolo chiave nel supportare la salute dei tendini e dei legamenti. Ho anche
apprezzato il fatto che gli ingredienti siano naturali e mirati a promuovere la rigenerazione del
tessuto connettivo. Ottimo integratore",
"reviewRating": {
"@type": "Rating",
"ratingValue": "5"
},
"datePublished": "2024-09-13",
"author": {"@type": "Person", "name": "Adriana"}
},{
"@type": "Review",
"name": "Sto molto meglio",
"reviewBody": "Sono una sportiva e metto a dura prova i miei tendini. Da solo due mesi prendo
Tendoactive e devo dire che sto molto meglio.",
"reviewRating": {
"@type": "Rating",
"ratingValue": "5"
},
"datePublished": "2024-05-22",
"author": {"@type": "Person", "name": "Simona"}
 }]
            }
            `
            }}
          ></script>

          {/* SEO FAQ Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
         {
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [{
"@type": "Question",
"name": "Per quanto tempo è consigliato il trattamento minimo per la tendinopatia?",
"acceptedAnswer": {
"@type": "Answer",
"text": "I tendini e i legamenti sono strutture poco vascolarizzate. Pertanto, tutti i nutrienti per riparare il tendine arrivano molto
lentamente. Per questo motivo, raccomandiamo di aderire al trattamento per almeno 3 -6 mesi. Consigliamo di seguire il trattamento per evitare
recidive, la tendinopatia può durare anche più di 1 anno."
}
},{
"@type": "Question",
"name": "Qual è il dosaggio?",
"acceptedAnswer": {
"@type": "Answer",
"text": "1 bustina/giorno principalmente in 1 dose singola."
}
},{
"@type": "Question",
"name": "È meglio assumerlo prima o dopo i pasti?",
"acceptedAnswer": {
"@type": "Answer",
"text": "È indistinto. Per una corretta compliance terapeutica, si consiglia di assumere la bustina ogni mattina o ogni sera."
}
},{
"@type": "Question",
"name": "",
"acceptedAnswer": {
"@type": "Answer",
"text": ""
}
}]
} `
}}
          ></script>
        
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
