import "@/styles/globals.css";
import Layout from "@/componets/Layout";
import { RouteGuard } from "@/componets/RouteGuard";
import GeoRedirect from "@/utilities/GeoRedirect";
import App from "next/app";
import productMeta from "../../json/meta.json";
import { useRouter } from "next/router";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let path = "";
    const { asPath } = ctx;
    let pathname = asPath;
    if (pathname) {
      path = pathname.split("/");
      const lastSlug = path[path.length - 1];
      let metaData = productMeta[lastSlug] ? productMeta[lastSlug] : {};
      let og_image =
        "https://cdn.shopify.com/s/files/1/0674/0518/5339/files/purpose.webp";
      let title = "BrunoMD | Prodotti per la Salute e il Benessere";
      let description =
        "Prodotti per la salute e il benessere radicati nel cuore dell'Italia, realizzati con ingredienti completamente naturali. Integratori di grado farmaceutico per alimentare il tuo futuro.";
      if (metaData) {
        og_image = metaData?.meta?.image;
        title = metaData?.meta?.title;
        description = metaData?.meta?.description;
      }
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      ctx.customParams = {
        imageUrl: og_image ? og_image : "",
        title: title ? title : "",
        description: description ? description : "",
      };
    }
    return { pageProps };
  }

  render() {
    let version = "EU";
    let script = true;
    const { Component, pageProps } = this.props;

    if (Component?.hideLayout) {
      return (
        <RouteGuard version={version} script={script}>
          <GeoRedirect redirect />
          <Component {...pageProps} version={version} script={script} />
        </RouteGuard>
      );
    } else {
      return (
        <RouteGuard version={version}>
          <Layout version={version} script={script}>
            <GeoRedirect redirect />
            <Component {...pageProps} version={version} script={script} />
          </Layout>
        </RouteGuard>
      );
    }
  }
}

export default MyApp;
