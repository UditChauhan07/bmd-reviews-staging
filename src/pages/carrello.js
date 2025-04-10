import React, { useEffect, useState } from "react";
import styles from "@/styles/carrelo.module.css";
import PageHead from "@/utilities/Head";
import { NewsLetter } from "@/utilities/NewsLetter";
import Link from "next/link";
import CartSummary from "@/utilities/CartSummary";
import CartItemList from "@/utilities/CartItemList";
import Header from '@/utilities/Header/';
import FeatureInfo from '@/utilities/FeatureInfo'
import {
  removeCartItems,
  updateCartItems,
  getCartList,
} from "@/data/lib";
import Footer from "@/utilities/Footer/";
import data1 from "../../json/layout.json";
import AnnouncementBar from "@/utilities/announcementBar";
import data from "../../json/layout.json";

const Carrelo = () => {
  const [removeState, setRemoveState] = useState();
  const [cartData, setData] = useState({
    url: undefined,
    price: undefined,
    lineItems: [],
    title: "Riepilogo ordine",
    subtotalLabel: "Subtotale",
    checkoutLabel: "Checkout",
    version: "EU",
    moneyBack: {
      title: "14 Giorni - Soddisfatti o Rimborsati",
      description:
        "Come funziona? Siamo sicuri che il nostro Cliente sarà soddisfatto dei prodotti Bruno MD, tuttavia, se per qualsiasi motivo non lo sarà, rimborseremo il primo ordine per intero meno i costi della spedizione. Onoriamo un rimborso completo se il nostro servizio clienti viene contattato entro 14 giorni lavorativi dalla data del ricevimento dell’ordine. Non è necessario restituire il prodotto (se è il primo ordine ricevuto); tuttavia, accogliamo con favore il feedback per aiutarci a migliorare la qualità del nostro servizio.",
    },
  });

  useEffect(() => {
    listItem();
    if (removeItem) {
      listItem();
      setRemoveState(false);
    }
  }, [removeState]);
  const listItem = async () => {
    getCartList()
      .then((response) => {
        if (response?.data?.cart?.lines?.edges?.length == 0)
          location.removeItem("e6S4JJM9GES");
        setData({
          url: response?.data?.cart?.checkoutUrl,
          price: parseFloat(response?.data?.cart?.cost?.totalAmount?.amount),
          lineItems: response?.data?.cart?.lines?.edges || [],
          version: "ENG",
          title: "Riepilogo ordine",
          subtotalLabel: "Subtotale",
          checkoutLabel: "Checkout",
          version: "EU",
          moneyBack: {
            title: "14 Giorni - Soddisfatti o Rimborsati",
            description:
              "Come funziona? Siamo sicuri che il nostro Cliente sarà soddisfatto dei prodotti Bruno MD, tuttavia, se per qualsiasi motivo non lo sarà, rimborseremo il primo ordine per intero meno i costi della spedizione. Onoriamo un rimborso completo se il nostro servizio clienti viene contattato entro 14 giorni lavorativi dalla data del ricevimento dell’ordine. Non è necessario restituire il prodotto (se è il primo ordine ricevuto); tuttavia, accogliamo con favore il feedback per aiutarci a migliorare la qualità del nostro servizio.",
          },
        });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const removeItem = (lineItemIdsToRemove) => {
    removeCartItems({ lineIds: lineItemIdsToRemove, setState: setRemoveState })
      .then((response) => {
        // listItem();
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log({ removeState });
  };

  const qtyItem = (lineItemIdsToUpdate, sellingPlan, id, qty) => {
    const lineItemsToUpdate = [
      { id, merchandiseId: lineItemIdsToUpdate, quantity: parseInt(qty.value) },
    ];
    updateCartItems({ items: lineItemsToUpdate, setState: setRemoveState })
      .then((response) => {
        console.log({ response });
        listItem();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const isTendoReferrer = document.referrer.includes("tendo");

  return (
    <>
      {data["EU"].announcementBar && (
        <AnnouncementBar
          announcement={data["EU"].announcementBar.title}
          theme={{
            textColor: data["EU"].announcementBar.textColor,
            backgroundColor: document.referrer.includes("tendo")
              ? "rgb(0, 51, 161)"
              : data["EU"].announcementBar.backgroundColor,
          }}
        />
      )}

{document.referrer.includes("tendo") ? null : (
  data["EU"].announcementBar && (
    <Header 
      link={data["EU"].links} 
      version={"EU"}
      iconLink={{
        cart: data["EU"].cartLink,
        login: data["EU"].login
      }} 
    />
  )
)}



      <section className={styles.container}>
        {document.referrer.includes("tendo") ? (
          " "
        ) : (
          <Link href={"/collezioni/tutti"} className={styles.back}>
            ← Continua lo shopping
          </Link>
        )}
        <h1 className={styles.cartTitle}>Riepilogo ordine</h1>
        <PageHead
          content={{
            title: "Carrello della Spesa | Bruno MD",
            description: "BrunoMD carrello della spesa",
          }}
        />
        <div className={styles.cartContainerHolder}>
          {cartData.lineItems?.length ? (
            <CartItemList
              items={cartData.lineItems}
              content={{ removeBtnText: "Rimuovere", QTYLabel: "QTY" }}
              removeItem={removeItem}
              qtyItem={qtyItem}
            />
          ) : (
            <div className={styles.cartEmptyText}>
              Non ci sono articoli nel carrello
            </div>
          )}
          {document.referrer.includes("tendo") ? (
            <NewsLetter
              content={{
                title: "Iscriviti alla nostra newsletter",
                portalId: "19647191",
                formId: "33f8cee6-3c6b-40f9-93a5-19e7bd5b0b8f",
                titleFont: "26px",
                formWidth: "auto",
              }}
              isTendoReferrer={isTendoReferrer}
            />
          ) : (
            <NewsLetter
              content={{
                title: "Iscriviti alla nostra newsletter",
                portalId: "19647191",
                formId: "7b270a73-336b-4895-8b55-286a3f49b1f2",
                titleFont: "26px",
                formWidth: "auto",
              }}
            />
          )}

  <CartSummary data={cartData} isTendoReferrer={isTendoReferrer} />
        </div>
      </section>

      <FeatureInfo infoBanners={data["EU"].featureInfo} isTendoReferrer={isTendoReferrer} />
      <Footer data={data1["EU"].footer2} />
    </>
  );
};
Carrelo.hideLayout = true;
export default Carrelo;
