import React, { useState, useEffect } from "react";

import Handler from "./handler";
const PurchaseBox = ({data, variantId})=>{
    useEffect(()=>{
    },[data])
    if(!data) return null
    return(
        <Handler data={data} variantId={variantId}/>
    )
}

export default PurchaseBox;