import React, { useEffect, useState } from "react";
import styles from "@/styles/carrelo.module.css";
import PageHead from "@/utilities/Head";
import { NewsLetter } from "@/utilities/NewsLetter";
import Link from "next/link";
import CartSummary from "@/utilities/CartSummary";
import CartItemList from "@/utilities/CartItemList";
import { getCheckout, removeCartItems, updateCartItems,getCartList } from "@/data/lib";

const Carrelo = () => {
const [ removeState, setRemoveState] = useState();
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
    if(removeItem){
      listItem();
      setRemoveState(false)
    }
  }, [removeState]);
  const listItem = async () => {
    getCartList().then((response)=>{
      setData({
                url: response?.data?.cart?.checkoutUrl,
                price: parseFloat(response?.data?.cart?.cost?.totalAmount?.amount),
                lineItems:response?.data?.cart?.lines?.edges||[],
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
    }).catch((err)=>{
      console.log({err});
    })
  };

  const removeItem = (lineItemIdsToRemove) => {
    removeCartItems({lineIds:lineItemIdsToRemove, setState:setRemoveState}).then((response)=>{
      // listItem();
      location.reload();
    }).catch((err)=>{
      console.log(err);
    })
    console.log({removeState});
  };

  const qtyItem = (lineItemIdsToUpdate, sellingPlan,id, qty) => {
    const lineItemsToUpdate = [
      { id,merchandiseId: lineItemIdsToUpdate, quantity: parseInt(qty.value) },
    ];
    updateCartItems({items:lineItemsToUpdate, setState:setRemoveState}).then((response)=>{
      console.log({response});
      listItem();
    }).catch((err)=>{
      console.log(err);
    })
  };
  return (
    <section className={styles.container}>
      <Link href={"/collezioni/tutti"} className={styles.back}>
        ← Continua lo shopping
      </Link>
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
        <NewsLetter
          content={{
            title: "Iscriviti alla nostra newsletter",
            portalId: "19647191",
            formId: "7b270a73-336b-4895-8b55-286a3f49b1f2",
            titleFont: "26px",
            formWidth: "auto",
          }}
        />
        <CartSummary data={cartData} />
      </div>
    </section>
  );
};
export default Carrelo;
