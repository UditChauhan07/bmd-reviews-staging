import * as React from "react";
import { useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/account.module.css";
import { Decrypt, Destroy, AuthCheck, ShareDrive } from "@/data/Auth";
import {
  AddtoCart,
  RecoverUser,
  orderInit,
  addCartItems,
  getSubscriptionFrequency,
  getSubscription,
} from "@/data/lib";
import { useRouter } from "next/navigation";
import PageHead from "@/utilities/Head";
import SEO from "../../../json/SEO.json";
import RewardsPOP from "@/utilities/RewardsModal";
import Loader2 from "@/utilities/Loader/index2";
import { ItalianStatus } from "@/data/status";

const Index = () => {
  let router = useRouter();
  if (!AuthCheck()) {
    // router.push("/account/login");
    Destroy();
    // window.location.href = '/account/login'
  }
  const [load, setLoad] = React.useState(false);
  const [customer, setCustomer] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    orders: [],
    isLoggedIn: false,
  });
  const [authenticated, setAuthenticated] = React.useState(true);
  const [isLoaded, setIsLoaded] = React.useState(false);
  function dateSort(a, b) {
    let dateA = new Date(a?.node?.processedAt).getTime();
    let dateB = new Date(b?.node?.processedAt).getTime();
    return dateA < dateB ? 1 : -1;
  }
  useEffect(() => {
    let data = Decrypt();
    // console.log("tokennnnnnn");
    // console.log({ data });
    if (data == null) {
      Destroy(router);
    }
    RecoverUser({ token: data })
      .then((response) => {
        if (response?.data?.customer) {
          let data = response?.data?.customer;
          data.isLoggedIn = true;
          data.orders.edges.sort(dateSort);
          setCustomer(data);
          setIsLoaded(true);
        } else {
          setAuthenticated(false);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
    setLoad(true);
    // yotpoWidgetsContainer.initWidgets()
    // console.log({});
  }, []);

  const { email, firstName, lastName, isLoggedIn, orders } = customer;
  const OrderDetail = (id) => {
    let order = {};
    orders.edges.map((element) => {
      if (element.node.id == id) order = element.node;
    });
    order.order = true;
    ShareDrive(order);
    router.push("/account/orders");
  };

  const editOrder = (id) => {
    let p = orderInit({ orderId: id })
      .then((response) => {
        let order = {};
        orders.edges.map((element) => {
          if (element.node.id == id) order = element.node;
        });
        order.edit = true;
        order.order = true;
        order.init = response;
        ShareDrive(order);
        router.push("/account/orders");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const reOrder = (id) => {
    let lineItems = [];
    orders.edges.map((element) => {
      if (element.node.id == id) {
        element.node.lineItems.edges.map((items) => {
          if (items.node) {
            // console.log("testing");
            // console.log({ items });
            lineItems.push({
              merchandiseId: items.node.variant?.id,
              quantity: items.node.quantity,
            });
          }
        });
      }
    });
    AddtoCart({ lineItems })
      .then((response) => {
        if (response?.data?.cartCreate?.cart) {
          let id = response?.data?.cartCreate?.cart?.id;
          localStorage.setItem("e6S4JJM9G", id);
          router.push("/carrello");
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const cartAdd = (lineItems) => {
    let cId = localStorage.getItem("e6S4JJM9G");
    if (lineItems.length > 0) {
      // console.log("kkkk");
      // console.log(lineItems);
      if (cId) {
        // console.log(lineItems);
        addCartItems({ items: lineItems })
          .then((response) => {
            if (response?.data?.cartLinesAdd?.userErrors?.length) {
              if (response?.data?.cartLinesAdd?.userErrors[0].message) {
                if (
                  response?.data?.cartLinesAdd?.userErrors[0].message ==
                  "Il carrello specificato non esiste."
                ) {
                  AddtoCart({
                    lineItems: lineItems,
                  })
                    .then((response) => {
                      let id = response?.data?.cartCreate?.cart?.id;
                      localStorage.setItem("e6S4JJM9G", id);
                      //router.push("/carrello");
                      window.location.href = "/carrello";
                    })
                    .catch((err) => {
                      console.log({ err });
                    });
                }
              }
            } else {
              //router.push("/carrello");
              window.location.href = "/carrello";
            }
          })
          .catch((err) => {
            console.log({ err });
          });
      } else {
        AddtoCart({ lineItems })
          .then((response) => {
            if (response?.data?.cartCreate?.cart) {
              let id = response?.data?.cartCreate?.cart?.id;
              localStorage.setItem("e6S4JJM9G", id);
              //router.push("/carrello");
              window.location.href = "/carrello";
            }
          })
          .catch((err) => {
            console.log({ err });
          });
      }
    }
  };

  const reOrder1 = (id) => {
    let cId = localStorage.getItem("e6S4JJM9G");
    let lineItems = [];
    let id1 = "";
    let id2 = "";
    let selling_plan_id = "";
    let subscribeStatus = false;
    if (id) {
      id1 = id.split("/Order/");
      if (id1[1]) {
        id2 = parseInt(id1[1]);
      }
    }
    // console.log(orders);
    orders.edges.map((element) => {
      let frequency = "";
      if (element.node.id == id) {
        element.node.lineItems.edges.map((items) => {
          if (items.node) {
            // console.log({ items });
            let title = items.node.title;
            let ExternalOrderId = id2;
            if (ExternalOrderId) {
              getSubscriptionFrequency({ id: ExternalOrderId })
                .then((response) => {
                  if (response.status == 200) {
                    // console.log({ response });
                    if (response?.data?.subscription) {
                      subscribeStatus = true;
                      frequency =
                        response.data.subscription.charge_interval_frequency;
                      let external_id =
                        response.data.subscription.shopify_product_id;
                      getSubscription({ id: external_id })
                        .then((response) => {
                          // console.log(response);
                          if (response?.plans?.length) {
                            let freqs = [];
                            response.plans.map((element) => {
                              if (
                                element.subscription_preferences
                                  .charge_interval_frequency
                              )
                                // console.log(element);
                              if (
                                element.subscription_preferences
                                  .charge_interval_frequency == frequency
                              ) {
                                selling_plan_id = `gid://shopify/SellingPlan/${element.external_plan_id}`;
                                lineItems.push({
                                  merchandiseId: items.node.variant?.id,
                                  quantity: items.node.quantity,
                                  sellingPlanId: selling_plan_id,
                                });

                                cartAdd(lineItems);
                              }
                            });
                          }
                        })
                        .catch((err) => {
                          console.error({ err });
                        });
                    }
                  } else {
                    lineItems.push({
                      merchandiseId: items.node.variant?.id,
                      quantity: items.node.quantity,
                    });
                    cartAdd(lineItems);
                  }

                  // console.log(response);
                })
                .catch((err) => {
                  console.error({ err });
                });
            }
          }
        });
      }
    });
    // return;
  };
  if (!isLoaded) return <Loader2 />;
  return (
    <section className={styles.accountSection}>
      {!load ? (
        <div className="center-body" style={{ height: "200px" }}>
          <div className="loader-circle-2"></div>
        </div>
      ) : (
        <>
          <PageHead content={SEO["EU"]?.account?.SEO} />
          <h1 className={styles.accountHeader}>Il Mio Account</h1>
          {isLoggedIn && (
            <button
              onClick={() => Destroy(router)}
              className={`${styles.logout} ${styles.btnHover}`}
            >
              Esci
            </button>
          )}

          <div>
            <div className={styles.accountContainer}>
              {true && (
                <div className={styles.orderContainer}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Numero dell&apos;Ordine</th>
                        <th scope="col">Data</th>
                        <th scope="col">Stato del pagamento</th>
                        <th scope="col">Stato della spedizione</th>
                        <th scope="col">Totale</th>
                        <th scope="col">Modifica, Cancella or Riordina</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders?.edges?.length > 0 ? (
                        orders?.edges?.map(
                          ({
                            node: {
                              orderNumber,
                              processedAt,
                              financialStatus,
                              originalTotalPrice,
                              fulfillmentStatus,
                              id,
                            },
                          }) => {
                            //console.log(customerUrl.slice(35))
                            //let decoded2 = getDecodedShopifyId(customerUrl.slice(35))

                            return (
                              <tr key={id}>
                                <th className={styles.item}>
                                  <div
                                    className={styles.orderNumber}
                                    onClick={() => OrderDetail(id)}
                                  >
                                    #{orderNumber}
                                    {/* href={customerUrl.slice(19)} */}
                                  </div>
                                </th>
                                <td className={styles.item}>
                                  {new Date(processedAt).toLocaleDateString()}
                                </td>
                                <td
                                  className={styles.item}
                                  style={{ textTransform: "capitalize" }}
                                >
                                  {ItalianStatus(financialStatus)}
                                </td>
                                <td
                                  className={styles.item}
                                  style={{ textTransform: "capitalize" }}
                                >
                                  {ItalianStatus(fulfillmentStatus)}
                                </td>
                                <td className={styles.item}>
                                  €
                                  {parseFloat(
                                    originalTotalPrice?.amount
                                  ).toFixed(2)}
                                </td>
                                <td>
                                  {/* <Link
                                className={styles.firstLink}
                                target="_blank"
                                href={`https://shopify-order-edit.herokuapp.com/order-editor/brunomd.myshopify.com/${decodedOrderId}`}
                              >
                                Cancella o Modifica
                              </Link>
                              <Link
                                target="_blank"
                                href={`https://shopify-order-edit.herokuapp.com/order-editor/reorder/brunomd.myshopify.com/${decodedOrderId}`}
                              >
                                Riordina
                              </Link> */}
                                  {/* onClick={()=>OrderEdit(id)} */}
                                  <button
                                    className={styles.firstLink}
                                    onClick={() => editOrder(id)}
                                  >
                                    {" "}
                                    Cancella o Modifica
                                  </button>
                                  <br />
                                  <button
                                    className={styles.firstLink}
                                    onClick={() => reOrder1(id)}
                                  >
                                    Riordina
                                  </button>
                                </td>
                              </tr>
                            );
                          }
                        )
                      ) : (
                        <tr></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              <div className={styles.accountInfoContainer}>
                <p>Dettagli dell&apos;account</p>
                <div>
                  <p>{[firstName, lastName].join(" ")}</p>
                </div>
                <div style={{ "margin-bottom": "20px" }}>
                  <p>{email}</p>
                </div>
                {true && (
                  <div>
                    {false && (
                      <div>
                        <address>
                          <p>{defaultAddress.address1}</p>
                          {defaultAddress.address2 && (
                            <p>{defaultAddress.address2}</p>
                          )}
                          <p>
                            {defaultAddress.city}, {defaultAddress.province},{" "}
                            {defaultAddress.zip}
                          </p>
                          <p>{defaultAddress.country}</p>
                          {defaultAddress.phone && (
                            <Link href={"tel:" + defaultAddress.phone}>
                              {defaultAddress.phone}
                            </Link>
                          )}
                        </address>
                        <div>
                          {/* <Link href={'/account/address?id=' + defaultAddress.id}>Edit address</Link>
                            {defaultAddress && defaultAddress.id === id ? (
                              <strong>Default</strong>
                            ) : (
                              <button onClick={() => updateDefaultAddress(id)}>
                                Make default
                              </button>
                            )} */}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <Link href="/account/addresses">
                  <button
                    className={`${styles.addressesButton} ${styles.btnHover}`}
                  >
                    Visiona indirizzi
                  </button>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.brunomd.eu/tools/recurring/login"
                >
                  {" "}
                  <button
                    className={`${styles.addressesButton2} ${styles.btnHover}`}
                  >
                    {" "}
                    Gestisci l&apos;aquisto periodico{" "}
                  </button>
                </Link>
                {/* <RewardsPOP className={`${styles.addressesButton2} ${styles.btnHover}`}/> */}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
export default Index;
