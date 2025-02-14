import React from "react";
import Link from "next/link";
import styles from "@/styles/forgot-password.module.css";
import PageHead from "@/utilities/Head";
import SEO from '../../../json/SEO.json';
import { ResetUser } from "@/data/lib";

const ForgotPasswordForm = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [submitErrors, setSubmitErrors] = React.useState([]);
  const [submitInProgress, setSubmitInProgress] = React.useState(false);
  const [validationError, setValidationError] = React.useState("");

  const validateEmail = (email) => {
    if (!email) {
      return "Inserisci un'e-mail";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Inserisci un'e-mail valida";
    }
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errorMessage = validateEmail(inputValue);

    if (errorMessage) {
      setValidationError(errorMessage);
      return;
    }

    setSubmitErrors([]);
    setSubmitInProgress(true);
    setValidationError("");

    ResetUser({ email: inputValue })
      .then((response) => {
        let error = response?.data?.customerRecover?.customerUserErrors || [];
        if (error.length > 0) {
          setSubmitErrors(error);
        } else {
          setSubmitSuccess(true);
        }
      })
      .catch((err) => {
        console.log({ err });
      })
      .finally(() => setSubmitInProgress(false));
  };

  return (
    <section>
      <PageHead content={SEO['EU']?.forgot?.SEO} />
      <div>
        {submitSuccess ? (

          <div className={styles.message}>
            <h1>Controlla la casella di posta elettronica!</h1>
            <p>
              Ti abbiamo inviato un&apos; e-mail - segui le istruzioni su come
              resettare e modificare la tua password
            </p>
            <p>
            <Link href={"https://www.brunomd.eu/account/login"||"/account/login"}>← Torna indietro</Link>
            </p>
          </div>

        ) : (
          <section>
            <h1 className={styles.forgotHeader}>
              Hai dimenticato la password?
            </h1>


            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.emailField}>
                Indirizzo Email
                <input
                  className={styles.input}
                  placeholder="email@example.com"
                  type="email"
                  value={inputValue}
                  onChange={(event) => {
                    setInputValue(event.target.value);
                    setValidationError("");
                    setSubmitErrors([])
                  }}
                />
              </label>
              
                <strong className={styles.errorText}>{validationError}</strong>
              
              
                {submitErrors && (
                <div className={styles.errorContainer}>
                  {submitErrors.map((error, index) => (
                    <strong key={index} className={styles.error}>
                      {error.message}
                    </strong>
                  ))}
                </div>
              )}
              

              <button type="submit" disabled={submitInProgress} className={styles.submitButton}>
                Invia
              </button>

              <Link className={styles.linkBack} href={"https://www.brunomd.eu/account/login"||"/account/login"}>
                Cancella
              </Link>


            </form>
          </section>
        )}
      </div>
    </section>
  );
};

export default ForgotPasswordForm;
