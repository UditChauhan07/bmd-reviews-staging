import * as React from "react";
import { useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/addresses.module.css";
import { Decrypt, Destroy, AuthCheck, ShareDrive } from "@/data/Auth";
import { useRouter } from "next/router";
import { deleteCustomerAddress, getCustomerDetails } from "@/data/lib";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import PageHead from "@/utilities/Head";
import SEO from '../../../json/SEO.json'

const Addresses = () => {
  if (!AuthCheck()) {
    // window.location.href = "/account/login";
    Destroy()
  }
  const router = useRouter();
  const [customer, setCustomer] = React.useState({
    firstName: "",
    lastName: "",
    addresses: [],
    defaultAddress: {},
  });
  useEffect(() => {
    ShareDrive(false, true);
    let data = Decrypt();
    if (data == null) {
      Clear();
    }
    getCustomerDetails({token:data,setCustomer}).then((response)=>{
      if (response?.data?.customer) {
        let data = response?.data?.customer;
        data.isLoggedIn = true
        setCustomer(data);
      } else {
      }
    }).catch((err)=>{
      console.log({err});
    })
  }, []);
  
  // transfer obj to one page to another page with change page?
  const { id, firstName, lastName, addresses, defaultAddress } = customer;

  const Navigator = (data) => {
    if (ShareDrive(false, true)) {
      if (ShareDrive(data)) {
        window.location.href = "/account/address";
      }
    }
  };
  const submit = (addressId) => {
    confirmAlert({
      title: "Conferma per eliminare",
      message: "Sei sicuro di farlo?",
      buttons: [
        {
          label: "SÌ",
          onClick: () => handleDelete(addressId)
        },
        {
          label: "NO"
          // onClick: () => alert("Click No")
        }
      ]
    });
  };

  const handleDelete = async (addressId) => {
    deleteCustomerAddress({ addressId, customerAccessToken: Decrypt() }).then((response)=>{
      var errors = response.data.customerAddressDelete.customerUserErrors || [];
      if (errors.length != 0) {
        console.error({ errors });
        setFormErrors(errors)
      } else {
        location.reload();
      }
    }).catch((err)=>{
      console.log({err});
    })
    // window.location.href = "/account/addresses";
  };

  return (
    <section className={styles.addressSection}>
      <PageHead content={SEO['EU']?.addresses?.SEO}/>
      <div className={styles.dFlex}>
        <Link href="/account" className={styles.backLink}>
          <button className={styles.logOut}>← Ritorna ai dettagli dell&apos;account</button>
        </Link>
        <h1 className={styles.header}>I tuoi indirizzi</h1>
      </div>
      <div>
        {addresses?.edges && (
          <div className={styles.addressesContainer}>
            {addresses?.edges.length > 0
              ? addresses?.edges.map(
                  (
                    {
                      node: {
                        id,
                        address1,
                        address2,
                        city,
                        company,
                        country,
                        firstName,
                        lastName,
                        phone,
                        province,
                        zip,
                      },
                    },
                    i
                  ) => (
                    <div className={styles.addressContainer} key={i}>
                      <address className={styles.addressInfo}>
                        <p>{address1}</p>
                        {address2 && <p>{address2}</p>}
                        <p>
                          {city}, {province}, {zip}
                        </p>
                        <p>{country}</p>
                        <p className={styles.aPhone}>
                          {phone && (
                            <a href={"tel:" + phone}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-phone-call"
                              >
                                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                              </svg>
                              {phone}
                            </a>
                          )}
                        </p>
                      </address>
                      <div>
                        <a
                          href={"/account/address"}
                          onClick={() =>
                            Navigator({
                              id,
                              address1,
                              address2,
                              city,
                              company,
                              country,
                              firstName,
                              lastName,
                              phone,
                              province,
                              zip,
                            })
                          }
                          className={`${styles.addressButton} ${styles.btnHover}`}
                        >
                          Modiica indirizzo
                        </a>
                        {false && defaultAddress && defaultAddress.id === id ? (
                          <strong className={styles.dft}>Default</strong>
                        ) : (
                          <>
                            <button
                              onClick={() => submit(id)}
                              className={`${styles.addressButton} ${styles.btnHover}`}
                            >
                              Cancella
                            </button>
                            {/* <button>make a Default</button> */}
                          </>
                        )}
                      </div>
                    </div>
                  )
                )
              : " n/a"}
          </div>
        )}
      </div>
    </section>
  );
};
export default Addresses;
