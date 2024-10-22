import React, { useEffect, useState } from "react";
import styles from "@/styles/contattaci.module.css";
import { NewsLetter } from "@/utilities/NewsLetter";
import HomePageData from "../../../json/home.json";
import ContactData from "../../../json/contattaci.json";
import PageHead from "@/utilities/Head";

export default function Contattaci({ version, script }) {
  const { firstSection, term } = ContactData[version] || null;
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "19647191",
          formId: "96baf034-ff86-4130-9624-887071fa898a",
          target: "#contactForm",
        });
      }
    });
  }, []);

  const handleCheck1 = () => {
    setState1(!state1);
  };

  const handleCheck2 = () => {
    setState2(!state2);
  };

  return (
    <section>
      <PageHead
        content={{
          title: "Contattaci | Bruno MD",
          description:
            "Hai una domanda sui nostri prodotti per la salute e il benessere o un ordine recente? Contatta Bruno MD inviando la tua richiesta tramite l&apos;apposito form.",
        }}
      />
      <div>
        <div className={styles.twoCol}>
          <div
            className={styles.copyBlock}
            dangerouslySetInnerHTML={{ __html: firstSection }}
          ></div>
          <div className={styles.form}>
            <form>
              <div className={styles.formGroup} id="contactForm">
                {isSubmitted && (
                  <p className={styles.successMessage}>
                    Thanks for contacting us. We&apos;ll get back to you as soon
                    as possible.
                  </p>
                )}
                <label className={styles.formLabel}>
                  Nome
                  <input
                    required
                    className={styles.formInput}
                    name="first_name"
                    type="text"
                  />
                </label>
                <label className={styles.formLabel}>
                  Cognome
                  <input
                    required
                    className={styles.formInput}
                    name="last_name"
                    type="text"
                  />
                </label>
                <label className={styles.formLabel}>
                  Email
                  <input
                    required
                    className={styles.formInput}
                    name="email"
                    type="email"
                  />
                </label>
                <label className={styles.formLabel}>
                  Numero di telefono
                  <input
                    required
                    className={styles.formInput}
                    name="phone_number"
                    type="tel"
                    pattern="[0-9\-]*"
                  />
                </label>
                <label className={styles.formLabel}>
                  Messggio
                  <textarea
                    required
                    id="message"
                    className={styles.formInput}
                    name="message"
                  />
                </label>
                <button className={styles.cta} type="submit">
                  Invia
                </button>
              </div>
              <div className={styles.contPrivacy}>
                {term && (
                  <label for="con-1" className={styles.mt1}>
                    <input
                      type="checkbox"
                      id="con-1"
                      checked={state1}
                      onChange={handleCheck1}
                      required
                    />
                    <span>
                      &nbsp;Acconsento al trattamento dei miei dati e dichiaro
                      di aver preso visione della &nbsp;
                      <a href="/politica-sullariservatezza" target="_blank">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                )}
                {term && (
                  <label for="con-2" className={styles.mt1}>
                    <input
                      type="checkbox"
                      id="con-2"
                      checked={state2}
                      onChange={handleCheck2}
                      required
                    />
                    <span>
                      &nbsp;Acconsento al trattamento dei miei dati personali
                      per attivita di marketing, per ricevere la newsletter e
                      informazioni relative alle vostre iniziative promozionali
                      e commerciali
                    </span>
                  </label>
                )}
              </div>
            </form>
          </div>
          {/* <ContactUsForm /> */}
        </div>
      </div>
      {script && <NewsLetter content={HomePageData[version].newsletter} />}
    </section>
  );
}
