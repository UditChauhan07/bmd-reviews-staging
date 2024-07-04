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
    // on initial load - run auth check
    let path = router.asPath;
    let newPath = path.split("/account/reset/");
    let newPath1 = path.split("/tools/");
    let newPath2 = path.split("/account/activate/");
    let autologin = path.split("/94evMaXAmEmvCH5/");
    let logoutStatus = path.split("/MghBdR8wHtBU6/");
    if (logoutStatus.length == 2) {
      let statusValue = logoutStatus[1];
      console.log(statusValue);
      if (statusValue == 1) {
        Destroy(router);
      } else {
        window.location.href = "https://brunomd.eu/account";
      }
    }
    if (autologin.length == 2) {
      let removeStr = autologin[1].split("auto/");
      if (removeStr.length == 2) {
        let split = removeStr[1].split("/");
        if (split.length == 2) {
          GetUserDetails({
            loginFields: { email: atob(split[0]), password: atob(split[1]) },
          })
            .then((response) => {
              console.log({ response });
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
                          "https://www.brunomd.eu/pages/logged-out"),
                    },
                  ],
                });
              } else {
                Encrypt(
                  response?.data?.customerAccessTokenCreate?.customerAccessToken
                );
                window.location.href = "/account";
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
        "https://www.brunomd.eu/account/reset/" + newPath[1];
    } else if (newPath1.length == 2) {
      window.location.href = "https://www.brunomd.eu/tools/" + newPath1[1];
    } else if (newPath2.length == 2) {
      window.location.href =
        "https://www.brunomd.eu/account/activate/" + newPath2[1];
    } else {
      let check = router.asPath.split("#");
      let check1 = check[0].split("?");
      if (check1[0] == "/account/login") {
        window.location.href = "https://www.brunomd.eu/account/login";
      }
      if (check1[0] == "/pages/joy-loyalty-page") {
        window.location.href = "https://www.brunomd.eu/pages/joy-loyalty-page";
      }
      authCheck(check1[0]);
      // authCheck(router.route ||router.asPath);
    }

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    let publicPaths = [
      "/",
      "/carrello",
      "/404-page",
      "/gestione-dei-cookie",
      "/politica-sullariservatezza",
      "/termini-e-condizioni",
      "/politica-di-restituzione-e-cancellazione",
      "/politica-di-spedizion",
      "/responsabilita-sociale",
      "/contattaci",
      "/domande-frequenti",
      "/scienza",
      "/collezioni/[collezioni]",
      "/prodotti/[prodotti]",
      "/la-nostra-storia",
      "/prodotti/citrak-3g-30-bustine",
      "/prodotti/citrak-forte-4g-con-edulcoranti-30-bustine",
      "/prodotti/citrak-mg-citrato-di-potassio-1-5g-citrato-di-magnesio-1-g-20-bustine",
      "/collezioni/sali-minerali",
      "/prodotti/cronos-30-compresse-da-850mg",
      "/collezioni/pre-diabete",
      "/prodotti/neulenic-600-confezione-da-15-compresse-rivestite-da-1-g-peso-netto-15-0-g",
      "/prodotti/nubit-30-compresse-da-850mg",
      "/collezioni/reverse-aging",
      "/prodotti/silverphage-14-individual-wipes",
      "/prodotti/drop-therapeutic-gocce-oculari-lubrificanti-10ml",
      "/collezioni/occhi",
      "/prodotti/silverphage-crema-gel-50-ml",
      "/prodotti/tendoactive-plus-20-stick",
      "/collezioni/dolore",
      "/collezioni/tutti",
      "/collezioni/salute-della-pelle",
      "/prodotti/silverphage-crema-gel-50-ml",
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
      //"/tendo-V2",
    ];
    if (!publicPaths.length) {
      //publicPaths = ["/404-page"];
    }
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
