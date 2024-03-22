import "@/styles/globals.css";
import Layout from "@/componets/Layout";
import { RouteGuard } from "@/componets/RouteGuard";
import GeoRedirect from "@/utilities/GeoRedirect";

export default function App({ Component, pageProps }) {
  let version = "EU";
  let script = true;

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
