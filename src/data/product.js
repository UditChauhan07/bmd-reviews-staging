import React, { useEffect, useState } from "react";

// export const CreateCart = (client,variantId)=>{
//     if(variantId){
//         // Create an empty checkout
//         client.checkout.create().then((checkout) => {
//           // Do something with the checkout
//           let checkOutId = checkout.id;
//           return checkOutId;
//         });
//       }
//   }

//   export const AddToCart = (variantId, quantity)=>{
//     const lineItemsToAdd = [
//       {
//         variantId,
//         quantity
//       }
//     ];
//     client.checkout.addLineItems(checkOutId, lineItemsToAdd).then((checkout) => {
//       // Do something with the updated checkout
//       console.log({ checkout });
//       window.location.href = checkout.webUrl
//       // console.log({lll:checkout.lineItems}); // Array with one additional line item
//     });
//   }