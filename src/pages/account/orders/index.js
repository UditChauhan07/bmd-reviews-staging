import { ShareDrive } from "@/data/Auth";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import PageHead from "@/utilities/Head";
import SEO from "../../../../json/SEO.json";
import { CompleteEditOrder, EditOrder } from "@/data/lib";

const OrderDetails = () => {
  const [order, setOrder] = useState();
  const [discount, setDiscount] = useState();
  const [subTotal, setSubTotal] = useState();
  const [note, setNote] = useState();
  useEffect(() => {
    if (ShareDrive()) {
      let data = ShareDrive();
      if (!data) window.location.href = "/account";
      // console.log({order});
      if (data.order) {
        let itemPrice = 0;
        data.lineItems.edges.map((items) => {
          itemPrice += parseFloat(items.node?.originalTotalPrice?.amount);
        });
        let orderPrice = parseFloat(data.totalPrice.amount);
        let totalShippingPrice = parseFloat(data.totalShippingPrice.amount);
        if (totalShippingPrice) {
          orderPrice = orderPrice - totalShippingPrice;
        }
        let discountAmount = itemPrice - orderPrice;
        setSubTotal(orderPrice);
        if (discountAmount == 0) setDiscount(0);
        else {
          let discount = (discountAmount * 100) / itemPrice;
          setDiscount(Math.round(discount));
        }
        setOrder(data);
      } else {
        window.location.href = "/account";
      }
    }
  }, []);

  const updateCartQty = ({ variantId, qty }) => {
    return;
    console.log({ variantId, qty });
    let filterOrderLineItem = {};
    let calculatedOrderData = order.init?.data?.orderEditBegin?.calculatedOrder;
    let calculatedOrderId = calculatedOrderData?.id;
    if (calculatedOrderId) {
      calculatedOrderData?.lineItems?.edges.map((element) => {
        if (element.node.variant.id == variantId) {
          filterOrderLineItem = element.node;
        }
      });
      console.log({
        id: calculatedOrderId,
        lineItemId: filterOrderLineItem.id,
        quantity: qty,
      });
      EditOrder({
        id: calculatedOrderId,
        lineItemId: filterOrderLineItem.id,
        quantity: qty,
      });
    }
  };
  const updateOrder = () => {
    return;
    let calculatedOrderData = order.init?.data?.orderEditBegin?.calculatedOrder;
    let calculatedOrderId = calculatedOrderData?.id;
    CompleteEditOrder({ id: calculatedOrderId, note })
      .then((response) => {
        console.log({ response });
      })
      .catch((err) => {
        console.log({ err });
      });
  };
  return (
    <section className={styles.section}>
      <PageHead content={SEO["EU"]?.register?.SEO} />
      <div>
        <Link className={styles.backLink} href="/account">
          &#8592; Torna a tutti gli ordini
        </Link>
        <h1 className={styles.header}>
          {order?.edit ? "Order" : "Order Details"}
        </h1>
        {order && (
          <div className={styles.orderContainer}>
            <div className={styles.dflex}>
              <div className={styles.addressInfo}>
                <div className={styles.dflex}>
                  <p className={styles.infoBox}>Numero d&apos;ordine</p>{" "}
                  <p className={styles.infoBoxWhite}>{order.name}</p>
                </div>
                <div className={styles.dflex}>
                  <p className={styles.infoBox}>Ordinato il</p>{" "}
                  <p
                    className={styles.infoBoxWhite}
                    style={
                      order.successfulFulfillments?.length > 0
                        ? {}
                        : { borderBottom: "1px solid #ccc" }
                    }
                  >
                    {new Date(order.processedAt).toLocaleDateString()}
                  </p>
                </div>
                {order.successfulFulfillments?.length > 0 && (
                  <div className={styles.dflex}>
                    <p className={styles.infoBox}>Società di monitoraggio</p>{" "}
                    <p className={styles.infoBoxWhite}>
                      {order.successfulFulfillments[0].trackingCompany}
                    </p>
                  </div>
                )}
                {order.successfulFulfillments?.length > 0 && (
                  <div className={styles.dflex}>
                    <p
                      className={styles.infoBox}
                      style={{ borderBottom: "1px solid #ccc" }}
                    >
                      Traccia il prodotto
                    </p>{" "}
                    {order.successfulFulfillments[0].trackingInfo[0].url ? (
                      <a
                        className={styles.infoBoxWhiteLink}
                        href={
                          order.successfulFulfillments[0].trackingInfo[0].url
                        }
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        Clicca qui
                      </a>
                    ) : (
                      <p
                        className={styles.infoBoxWhiteLink}
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      ></p>
                    )}
                  </div>
                )}
              </div>
              <div>
                <p
                  style={{ fontWeight: "600", width: "100%" }}
                  className={styles.infoBox}
                >
                  Spedire a:
                </p>
                {order.shippingAddress ? (
                  <>
                    <p
                      className={`${styles.infoBox} ${styles.shippingTextHolder}`}
                    >
                      {order.shippingAddress?.address1}
                    </p>
                    {order.shippingAddress?.address2 && (
                      <p
                        className={`${styles.infoBox} ${styles.shippingTextHolder}`}
                      >
                        {order.shippingAddress?.address2}
                      </p>
                    )}
                    <p
                      className={`${styles.infoBox} ${styles.shippingTextHolder}`}
                    >
                      {order.shippingAddress?.city &&
                        order.shippingAddress?.city}
                      {/* {order.shippingAddress?.province && order.shippingAddress?.province+','},{" "} */}
                      {order.shippingAddress?.zip &&
                        ", " + order.shippingAddress?.zip}
                    </p>
                    <p
                      className={`${styles.infoBox} ${styles.shippingTextHolder}`}
                    >
                      {order.shippingAddress?.country}
                    </p>
                    {order.shippingAddress?.phone && (
                      <a
                        href={"tel:" + order.shippingAddress?.phone}
                        target="_blank"
                        className={`${styles.infoBox} ${styles.infoBoxWhiteLink} ${styles.shippingTextHolder}`}
                      >
                        {order.shippingAddress?.phone}
                      </a>
                    )}
                  </>
                ) : (
                  <p className={styles.noShipping}>
                    Nessun indirizzo di spedizione
                  </p>
                )}
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Immagine del prodotto</th>
                  <th scope="col">Titolo del prodotto</th>
                  <th scope="col">Quantità di prodotto</th>
                  <th scope="col">Importo del prodotto</th>
                </tr>
              </thead>
              <tbody>
                {order.lineItems.edges.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td className={styles.item}>
                        <img
                          src={item.node.variant?.image?.src}
                          className={styles.lineImage}
                        />
                      </td>
                      <td className={styles.item}>{item.node?.title}</td>
                      <td className={styles.item}>
                        {order?.edit ? (
                          <input
                            type="number"
                            value={item.node?.quantity}
                            className={styles.qtyInputHolder}
                            onChange={(event) =>
                              updateCartQty({
                                variantId: item.node?.variant?.id,
                                qty: event.target.value,
                              })
                            }
                          />
                        ) : (
                          `QTY: ${item.node?.quantity}`
                        )}
                      </td>
                      <td className={styles.item}>
                      €
                        {parseFloat(item.node?.originalTotalPrice?.amount).toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {order?.edit ? (
              <>
                <textarea
                  rows={4}
                  placeholder="add notes..."
                  onKeyDown={(event) => setNote(event.target.value)}
                ></textarea>
                <div
                  className={`${styles.addressesButton} ${styles.btnHover}`}
                  onClick={() => updateOrder()}
                >
                  Update
                </div>
              </>
            ) : (
              <div className={styles.leftAlign}>
                {true && (
                  <div className={styles.dflex1}>
                    <p className={styles.infoBox1} style={{ width: "200px" }}>
                      Percentuale di sconto:
                    </p>{" "}
                    <p className={styles.infoBoxWhite1}>{discount}%</p>
                  </div>
                )}
                {/* {order?.discountApplications.edges[0].node.value.amount && <div className={styles.dflex1}><p className={styles.infoBox2} style={{width: '200px'}}>Discount Amount:</p>  <p className={styles.infoBoxWhite2}>${order.discountApplications.edges[0].node.value.amount}</p></div>} */}
                <div className={styles.dflex1}>
                  <p className={styles.infoBox1} style={{ width: "200px" }}>
                    Totale parziale:
                  </p>{" "}
                  <p className={styles.infoBoxWhite1}>
                  €
                    {subTotal.toFixed(2)}
                  </p>
                </div>
                {order?.totalShippingPrice.amount && (
                  <div className={styles.dflex1}>
                    <p className={styles.infoBox2} style={{ width: "200px" }}>
                      Spese di spedizione:
                    </p>{" "}
                    <p className={styles.infoBoxWhite2}>
                    €
                      {parseFloat(order.totalShippingPrice.amount).toFixed(2)}
                    </p>
                  </div>
                )}
                <div className={styles.dflex1}>
                  <p className={styles.infoBoxT} style={{ width: "200px" }}>
                    Totale:
                  </p>{" "}
                  <p className={styles.infoBoxWhiteT}>
                  €
                    {parseFloat(order.totalPrice.amount).toFixed(2)}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
export default OrderDetails;
