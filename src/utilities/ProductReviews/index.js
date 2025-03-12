import React, { memo, useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import Loader2 from "../Loader/index2";
import { ExitIcon } from "../SvgIcons";
import RatingField from "../RatingField";

const ProductReviews = ({ product = null, product_details, variantId }) => {
  const initialFormData = {
    display_name: "",
    email: "",
    review_content: "",
    review_title: "",
    review_score: 0,
    accept: "",
    sku: product_details.sku,
    product_title: product_details.product_title,
    product_url: product_details.product_url,
    appkey: "jEbEI2jY9vvLxI8yyKzuyJz2I0PQz9Mn0SaZJTMJ",
    domain: "https://brunomd.eu",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [displayName, setDisplayName] = useState();
  const [errors, setErrors] = useState({});


  const handleRatingChange = (value) => {
    setFormData({ ...formData, review_score: value });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name == "display_name") {
      setDisplayName(e.target.value);
    }
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await fetch("https://api.yotpo.com/v1/widget/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setModal1(true);
        setModal(false);
        setFormData(initialFormData);
      } else {
        console.error("Failed to post data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [modal, setModal] = React.useState(false);
  const [modal1, setModal1] = React.useState(false);

  const handleClick = () => {
    setModal(true);
    setFormData(initialFormData);
    setErrors({});
  };

  const handleClose = () => {
    setModal1(false);
    setModal(false);
    setFormData(initialFormData);
  };

  const validateForm = (data) => {
    const errors = {};
    const maxlength = 2000;
    const maxlengthShort = 100;
    const regx = /^[a-zA-Z0-9 .?,']*$/;
    if (!data.review_title.trim()) {
      errors.review_title = "Il titolo della recensione è obbligatorio";
    } else {
      if (data.review_title.length > maxlengthShort) {
        errors.review_title = "Per favore inserisci solo 100 caratteri";
      }
      if (!regx.test(data.review_title)) {
        errors.review_title = "Sono ammesse solo lettere";
      }
    }
    if (!data.review_content.trim()) {
      errors.review_content = "Il contenuto della revisione è obbligatorio";
    } else {
      if (data.review_content.length > maxlength) {
        errors.review_content = "Per favore inserisci solo 2000 caratteri";
      }
      // if (!regx.test(data.review_content)) {
      //   errors.review_content = "sono ammesse solo lettere";
      // }
    }
    if (!data.display_name.trim()) {
      errors.display_name = "Il nome è obbligatorio";
    } else {
      if (data.display_name.length > maxlengthShort) {
        errors.display_name = "Per favore inserisci solo 100 caratteri";
      }
      if (!regx.test(data.display_name)) {
        errors.display_name = "Sono ammesse solo lettere";
      }
    }
    if (!data.accept.trim()) {
      errors.accept = "Questo campo è obbligatorio";
    }
    if (!data.email.trim()) {
      errors.email = "L'e-mail è obbligatoria";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Formato email non valido";
    }
    return errors;
  };

  const isValidEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  if (modal || modal1) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }

  const [productId, setProductId] = useState(
    product
      ? product?.variants?.edges?.length
        ? product?.variants?.edges[0].node.id.split("ProductVariant/").length ==
          2
          ? product?.variants?.edges[0].node.id.split("ProductVariant/")[1]
          : undefined
        : undefined
      : variantId
  );
  useEffect(() => {
    (function e() {
      var e = document.createElement("script");
      (e.type = "text/javascript"),
        (e.async = true),
        (e.defer = true),
        (e.src = `//staticw2.yotpo.com/jEbEI2jY9vvLxI8yyKzuyJz2I0PQz9Mn0SaZJTMJ/widget.js`);
      var t = document.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(e, t);
    })();
    // console.log({ product, variantId, productId });
  }, [productId]);





  return (
    <section id="review_ingredients" className={styles.ingredientsHolder}>
      <div
        className={`${styles.reviewContainerV2} ${styles.v2}  ${styles.BtnAlign}`}
      >
        <h3 className={styles.reviewHeader}>
          <p>Recensioni dei clienti</p>
        </h3>
        <button onClick={() => handleClick()} className={styles.reviewbtn}>
          Scrivi una recensione
        </button>
      </div>

      <div className={styles.wrapper}>
        {productId && (
          <div className="yotpo yotpo-main-widget" data-product-id={productId}>
            <Loader2 />
          </div>
        )}
      </div>

      { modal === true && (
        <div className={styles.modal}>
          <div className={styles.modalOverlayV2}></div>
          <div className={styles.modalContainer1}>
            <button
              onClick={() => setModal(false)}
              className={styles.exitButton1}
              style={{ border: `1px solid black` }}
            >
              <ExitIcon />
            </button>
            <div className={styles.modalCardContainerV2}>
              <h1 className={styles.title} style={{ color: "" }}>
                Condividi la tua opinione
              </h1>
              <form onSubmit={handleSubmit} enctype="multipart/form-data">
                <div className={styles.OverflowDiv}>
                  <div className={styles.ratingSection}>
                    <p>
                      Valuta la tua esperienza{" "}
                      <span className={styles.spanRed}>*</span>
                    </p>

                    <RatingField
                      className={styles.goldenStar}
                      value={formData.review_score}
                      onChange={handleRatingChange}
                    />
                  </div>

                  <div className={styles.inputField}>
                    <label>
                      Scrivi una recensione{" "}
                      <span className={styles.spanRed}>*</span>
                    </label>
                    <br></br>
                    <textarea
                      type="text"
                      placeholder="Comunica cosa ti piace o cosa non ti piace"
                      rows="5"
                      cols="72"
                      name="review_content"
                      value={formData.review_content}
                      onChange={handleChange}
                    />
                    {errors.review_content && (
                      <span className={styles.error}>
                        {errors.review_content}
                      </span>
                    )}
                  </div>

                  <div className={styles.inputFieldMain11}>
                    <label>
                      Aggiungi un titolo{" "}
                      <span className={styles.spanRed}>*</span>
                    </label>
                    <br></br>
                    <input
                      type="text"
                      placeholder="Riassumi la tua esperienza"
                      name="review_title"
                      value={formData.review_title}
                      onChange={handleChange}
                    />
                    {errors.review_title && (
                      <span className={styles.error}>
                        {errors.review_title}
                      </span>
                    )}
                  </div>

                  <div className={styles.inputFieldMain}>
                    <div className={styles.inputField1}>
                      <label>
                        Il tuo nome <span className={styles.spanRed}>*</span>
                      </label>
                      <br></br>
                      <input
                        type="text"
                        name="display_name"
                        value={formData.display_name}
                        onChange={handleChange}
                      />
                      {errors.display_name && (
                        <span className={styles.error}>
                          {errors.display_name}
                        </span>
                      )}
                    </div>

                    <div className={styles.inputField2}>
                      <label>
                        Il tuo indirizzo e-mail{" "}
                        <span className={styles.spanRed}>*</span>
                      </label>
                      <br></br>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <br></br>
                      {errors.email && (
                        <span className={styles.error}>{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* <div className={styles.filesUpload}>
                    <h4>Aggiungi file multimediali</h4>
                    <label onClick={handleFileClick}>
                      <svg
                        data-v-7e5c0c2e=""
                        width="15"
                        height="15"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.75 10.0837H11.25V11.2503H0.75V10.0837ZM6.58333 2.39999V8.91699H5.41667V2.39999L1.87525 5.94199L1.05042 5.11716L6 0.166992L10.9496 5.11658L10.1247 5.94141L6.58333 2.40116V2.39999Z"
                          fill="#2C2C2C"
                        ></path>
                      </svg>
                      Carica
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                    <p>
                      Carica fino a 5 immagini (dimensione massima del file: 2
                      GB)
                    </p>
                    {errors.review_file && (
                      <span className={styles.error}>{errors.review_file}</span>
                    )}
                  </div> */}

                  {/* checkbox */}
                  <div className={styles.checkboxR}>
                    <input
                      type="checkbox"
                      name="accept"
                      onChange={handleChange}
                    />
                    <p>
                      Accetto i termini e le condizioni{" "}
                      <span className={styles.spanRed}>*</span>
                    </p>
                    {errors.accept && (
                      <span className={styles.error}>{errors.accept}</span>
                    )}
                  </div>
                </div>
                <div className={styles.flexPare}>
                  <p>
                    <span className={styles.spanRed}>*</span>campi obbligatori
                  </p>
                  <button>Invia </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {modal1 === true && (
        <div className={styles.modal}>
          <div className={styles.modalOverlayV2}></div>
          <div className={styles.modalContainer1}>
            <button
              onClick={() => handleClose()}
              className={styles.exitButton1}
              style={{ border: `1px solid black` }}
            >
              <ExitIcon />
            </button>
            <div className={styles.modalCardContainerV2}>
              <div className={styles.OverflowDiv11}>
                <h5>Grazie, {displayName}</h5>
                <p>
                  Il tuo feedback aiuterà gli altri acquirenti a prendere
                  decisioni migliori.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default memo(ProductReviews);
