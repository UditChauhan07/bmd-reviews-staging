import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GetUserDetails } from "@/data/lib";
import { Encrypt, Destroy } from "@/data/Auth";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Loader2 from "../../utilities/Loader/index2";
export { RouteGuard };

function RouteGuard({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    let path = router.asPath;
    let newPath = path.split("/account/reset/");
    let newPath1 = path.split("/tools/");
    let newPath2 = path.split("/account/activate/");
    let autologin = path.split("/94evMaXAmEmvCH5/");
    let logoutStatus = path.split("/MghBdR8wHtBU6/");
    if (logoutStatus.length == 2) {
      let statusValue = logoutStatus[1];
      if (statusValue == 1) {
        Destroy(router);
      } else {
        window.location.href = "https://bmd-reviews-staging.vercel.app/account";
      }
    }
    if (autologin.length == 2) {
      let removeStr = autologin[1].split("auto/");
      if (removeStr.length == 2) {
        let split = removeStr[1].split("/");

        if (split.length == 2 || split.length == 3) {
          GetUserDetails({
            loginFields: { email: atob(split[0]), password: atob(split[1]) },
          })
            .then((response) => {
              var errors =
                response?.data?.customerAccessTokenCreate?.customerUserErrors ||
                [];
              if (errors.length != 0) {
                confirmAlert({
                  title: "Alert",
                  message: errors[0].message,
                  buttons: [
                    {
                      label: "Ok",
                      onClick: () =>
                        (window.location.href =
                          "https://bmd-reviews-staging.vercel.app/pages/logged-out"),
                    },
                  ],
                });
              } else {
                Encrypt(
                  response?.data?.customerAccessTokenCreate?.customerAccessToken
                );
                if (split.length == 3) {
                  let cartId = split[2] ?? null;
                  window.location.href = `https://bmd-reviews-staging.vercel.app/cart/c/${cartId}`;
                } else {
                  window.location.href = window.location.origin + "/account";
                }
              }
            })
            .catch((err) => {
              console.log({ err });
            });
          setLoading(true);
          return;
        } else {
          router.push("/");
        }
      } else {
        router.push("/");
      }
    }
    if (newPath.length == 2) {
      window.location.href =
        "https://bmd-reviews-staging.vercel.app/account/reset/" + newPath[1];
    } else if (newPath1.length == 2) {
      window.location.href = "https://bmd-reviews-staging.vercel.app/tools/" + newPath1[1];
    } else if (newPath2.length == 2) {
      window.location.href =
        "https://bmd-reviews-staging.vercel.app/account/activate/" + newPath2[1];
    } else {
      let check = router.asPath.split("#");
      let check1 = check[0].split("?");
      if (check1[0] == "/account/login") {
        window.location.href = "https://bmd-reviews-staging.vercel.app/account/login";
      }
      if (check1[0] == "/pages/joy-loyalty-page") {
        window.location.href = "https://bmd-reviews-staging.vercel.app/pages/joy-loyalty-page";
      }
      authCheck(check1[0]);
    }

    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);
    router.events.on("routeChangeComplete", authCheck);

    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, []);

  function authCheck(url) {
    let publicPaths = [
      "/",
      "/carrello",
      "/404-page",
      "/gestione-dei-cookie",
      "/politica-sullariservatezza",
      "/tendo/politica-sullariservatezza",
      "/termini-e-condizioni",
      "/tendo/termini-e-condizioni",
      "/politica-di-restituzione-e-cancellazione",
      "/tendo/politica-di-restituzione-e-cancellazione",
      "/politica-di-spedizion",
      "/tendo/politica-di-spedizione",
      "/responsabilita-sociale",
      "/tendo/responsabilita-sociale",
      "/contattaci",
      "/tendo/contattaci",
      "/domande-frequenti",
      "/tendo/domande-frequenti",
      "/scienza",
      "/collezioni/[collezioni]",
      "/prodotti/[prodotti]",
      "/la-nostra-storia",
      "/tendo/la-nostra-storia",
      "/prodotti/citrak-3g-30-bustine",
      "/prodotti/citrak-forte-4g-con-edulcoranti-30-bustine",
      "/prodotti/citrak-mg-citrato-di-potassio-1-5g-citrato-di-magnesio-1-g-20-bustine",
      "/collezioni/sali-minerali",
      "/prodotti/cronos-30-compresse-da-850mg",
      "/collezioni/pre-diabete",
      // "/prodotti/neulenic-600-confezione-da-15-compresse-rivestite-da-1-g-peso-netto-15-0-g",
      // "/prodotti/nubit-30-compresse-da-850mg",
      "/collezioni/reverse-aging",
      // "/prodotti/silverphage-14-individual-wipes",
      // "/prodotti/silverphage-crema-gel-50-ml",
      "/prodotti/drop-therapeutic-gocce-oculari-lubrificanti-10ml",
      "/collezioni/occhi",
      "/prodotti/tendoactive-plus-20-stick",
      "/collezioni/dolore",
      "/collezioni/tutti",
      "/collezioni/salute-della-pelle",
      "/account/login",
      "/account/register",
      "/account/forgot-password",
      "/politica-di-spedizione",
      "/account",
      "/account/addresses",
      "/account/address",
      "/account/orders",
      "/account/orders/edit",
      "/test",
      "/_error",
      "/manage",
      "/disclaimer",
      "/site-map",
      "/tendo",
      "/science",
      "/return",
      "/tendo/return"

    ];
    if (publicPaths.includes(url)) {
      setAuthorized(true);
    } else {
      router.push("/404-page");
      setAuthorized(false);
    }
  }

  if (loading) {
    return <Loader2 />;
  }
  
  return authorized && children;
}
