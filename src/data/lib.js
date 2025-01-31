let url = "https://be-cms.brunomd.com/dev/brunoeu/";

export async function updateCustomerAddress({ address, customerAccessToken }) {
  address.customerAccessToken = customerAccessToken;
  let response = await fetch(url + "m3DET15cNgVPwfQ", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address }),
  });

  let data = JSON.parse(await response.text());
  console.log({ data });
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    console.log({ cdata });
    return cdata;
  }
}

export async function createCustomerAddress({ address, customerAccessToken }) {
  address.customerAccessToken = customerAccessToken;
  let response = await fetch(url + "WzdLmth9NRwdfzX", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address }),
  });

  let data = JSON.parse(await response.text());
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    console.log({ cdata });
    return cdata;
  }
}

export async function getProductSearch() {
  // console.log(url + "uvdvFvQz1BXdWQC");
  let response = await fetch(url + "uvdvFvQz1BXdWQC", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: "uvdvFvQz1BXdWQC" }),
  });

  let data = JSON.parse(await response.text());
  console.log({ data },"ttyryr");
  if (data?.status == 200) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}

export async function ResetUser({ email }) {
  let response = await fetch(url + "AC81LEr02sbbhLM", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  let data = JSON.parse(await response.text());
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    console.log({ cdata });
    return cdata;
  }
}

export async function deleteCustomerAddress({
  addressId,
  customerAccessToken,
}) {
  let address = {};
  address.customerAccessToken = customerAccessToken;
  address.addressId = addressId;
  let response = await fetch(url + "qJqJfRyqeAl5aRy", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address }),
  });

  let data = JSON.parse(await response.text());
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    console.log({ cdata });
    return cdata;
  }
}

export async function orderInit({ orderId }) {
  let response = await fetch(url + "WW6YHW3b0tlQISv", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: orderId }),
  });

  let data = JSON.parse(await response.text());
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  }
}

export async function getProduct({ productId }) {
  let response = await fetch(url + "Jw2C38P08o5iLA6", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });

  let data = JSON.parse(await response.text());
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    console.log("1248",cdata);
    
    return cdata;
  }
}

export async function EditOrder({ id, lineItemId, quantity }) {
  let response = await fetch(url + "aJ5T9gYfIHtBJbP", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, lineItemId, quantity }),
  });

  let data = JSON.parse(await response.text());
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    console.log({ cdata });
    return cdata;
  }
}

export async function CompleteEditOrder({ id, note }) {
  let response = await fetch(url + "p34LNswMaNofR", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, note }),
  });

  let data = JSON.parse(await response.text());
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  }
}

export async function createUserShop({ user }) {
  let response = await fetch(url + "C3sops0n8Tsh002", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  });

  let data = JSON.parse(await response.text());
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  }
}

export async function AddtoCart({ lineItems }) {
  let response = await fetch(url + "vEBZvwpX42HOnsx", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ lineItems }),
  });

  let data = JSON.parse(await response.text());
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  }
}

export async function getCheckout({ cartId }) {
  let response = await fetch(url + "GKenlRNmNo5G457", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cartId }),
  });

  let data = JSON.parse(await response.text());
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  }
}

export async function addCartItems({ items }) {
  let cartId = localStorage.getItem("e6S4JJM9G");
  let response = await fetch(url + "XFn5b6evjhr11kL", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cart: { cartId, items } }),
  });

  let data = JSON.parse(await response.text());
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  }
}

export async function getCartList() {
  let cartId = localStorage.getItem("e6S4JJM9G");
  let response = await fetch(url + "mySQvwKGyfE2c3V", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cartId }),
  });

  let data = JSON.parse(await response.text());
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  }
}

export async function updateCartItems({ items, setState }) {
  let cartId = localStorage.getItem("e6S4JJM9G");
  let response = await fetch(url + "g3MeUq1kPNhb05E", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cart: { cartId, items } }),
  });

  let data = JSON.parse(await response.text());
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  }
}

export async function removeCartItems({ lineIds, setState }) {
  let cartId = localStorage.getItem("e6S4JJM9G");
  let response = await fetch(url + "l2lipIiIpwC7njC", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cart: { cartId, lineIds } }),
  });

  let data = JSON.parse(await response.text());
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  }
}

export async function RecoverUser({ token }) {
  let response = await fetch(url + "P0QvIa4plBG3Vis", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  let data = JSON.parse(await response.text());
  console.log({ data });
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  }
}

export async function GetUserDetails({ loginFields, handler }) {
  let response = await fetch(url + "wdl7XYnAeTHZtV6", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: loginFields }),
  });

  let data = JSON.parse(await response.text());
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  }
}
export async function getCustomerDetails({ token, setCustomer }) {
  let response = await fetch(url + "Zhl5F8ckviVh7M2", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  let data = JSON.parse(await response.text());
  console.log(data,"customers--->");
  
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  }
}

export async function CartItemNumber() {
  let cId = localStorage.getItem("e6S4JJM9G");
  let response = await fetch(url + "73x3i7aTPuHYTti", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cId }),
  });

  let data = JSON.parse(await response.text());
  if (data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  }
}

export async function getSubscription({ id }) {
  let response = await fetch(url + "2vFjH93gPTu", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      id: id,
      type: 2,
    },
  });

  let data = JSON.parse(await response.text());
  return data.data;
}

export async function getSubscriptionFrequency({ id }) {
  let response = await fetch(url + "8vAjH93gPTB", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  let data = JSON.parse(await response.text());

  return data;
}
