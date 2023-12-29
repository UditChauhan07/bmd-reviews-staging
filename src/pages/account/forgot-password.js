import React from "react";
import Link from "next/link";
import styles from "@/styles/forgot-password.module.css";
import PageHead from "@/utilities/Head";
import SEO from '../../../json/SEO.json'
import { ResetUser } from "@/data/lib";

const ForgotPasswordForm = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [submitErrors, setSubmitErrors] = React.useState();
  const [submitInProgress, setSubmitInProgress] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitErrors(null);
    ResetUser({email:inputValue}).then((response)=>{
      let error = response?.data?.customerRecover?.customerUserErrors||[];
      if(error.length > 0){
        setSubmitErrors(error)
      }else{
        setSubmitSuccess(true)
      }
    }).catch((err)=>{
      console.log({err});
    })
  };
  

  const disableLoginButton = !inputValue;

  return (
    <section>
      <PageHead content={SEO['EU']?.forgot?.SEO}/>
      <div>
        {submitSuccess ? (
          <React.Fragment>
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
          </React.Fragment>
        ) : (
          <section>
            <h1 className={styles.forgotHeader}>
              Hai dimenticato la password?
            </h1>

            {/* <AuthGuard
              allowedAuthStatus="unauthenticated"
              redirectUrl="/account"
            > */}
              <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.emailField}>
                  Indirizzo Email
                  <input
                    className={styles.input}
                    placeholder="email@example.com"
                    type="email"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    required
                  />
                </label>
                <button
                  type="submit"
                  disabled={disableLoginButton}
                  className={styles.submitButton}
                >
                  Invia
                </button>
                <Link className={styles.linkBack} href={"https://www.brunomd.eu/account/login"||"/account/login"}>
                  Cancella
                </Link>
                {submitErrors && (
                  <div>
                    {submitErrors.map((error, index) => (
                      <strong key="error-message">{error.message}</strong>
                    ))}
                  </div>
                )}
              </form>
          </section>
        )}
      </div>
    </section>
  );
};

export default ForgotPasswordForm;
