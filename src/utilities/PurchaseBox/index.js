import React, { useState, useEffect } from "react";

import Handler from "./handler";
const PurchaseBox = ({ data, variantId, ActiveBox = null }) => {
  useEffect(() => {}, [data]);
  if (!data) return null;
  return <Handler data={data} variantId={variantId} ActiveBox={ActiveBox} />;
};

export default PurchaseBox;
