import Head from "next/head";

function PageHead({ content }) {
  return (
    <Head>
      <meta charset="utf-8" />
      <link rel="icon" href="/icon-bf.png" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />

      <meta
        property="og:image"
        content={
          content.image
            ? content.image
            : "https://cdn.shopify.com/s/files/1/0674/0518/5339/files/purpose.webp"
        }
      ></meta>
      <title>{content?.title}</title>
      <meta name="description" content={content?.description} />
      
      
    </Head>
  );
}

export default PageHead;
