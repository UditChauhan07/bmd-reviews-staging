import * as React from "react";
import styles from "@/styles/register.module.css";
import PageHead from "@/utilities/Head";
import SEO from "../../../json/SEO.json";
import { createUserShop } from "@/data/lib";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [registerErrors, setRegisterErrors] = React.useState([]);
  const [showErrors, setShowErrors] = React.useState(false);

  const [registerData, setRegisterData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = React.useState({});

  const validateForm = () => {
    let errors = {};

    if (!registerData.firstName.trim()) {
      errors.firstName = "Inserisci un nome";
    }
    if (!registerData.lastName.trim()) {
      errors.lastName = "Inserisci un cognome";
    }
    if (!registerData.email.trim()) {
      errors.email = "Inserisci un'e-mail.";
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(registerData.email)) {
      errors.email = "Inserisci un'e-mail valida.";
    }
    if (!registerData.password.trim()) {
      errors.password = "Inserisci una password.";
    } else if (registerData.password.length < 6) {
      errors.password = "La password deve contenere almeno 6 caratteri.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() ? "" : prevErrors[name],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowErrors(true);

    if (!validateForm()) return;

    setRegisterErrors([]);
    setIsLoading(true);

    try {
      const response = await createUserShop({ user: registerData });

      if (response?.data?.customerCreate) {
        window.location.href = "https://www.brunomd.eu/account/login";
      } else if (response?.errors) {
        setRegisterErrors(response.errors);
      }

    } catch (err) {
      console.error("Registration failed", err);
      setRegisterErrors([{ message: "Errore di registrazione. Riprova più tardi." }]);
    } finally {
      setIsLoading(false);
    }

  };

  return (
    <section>
      <PageHead content={SEO["EU"]?.register?.SEO} />
      <h1 className={styles.registerHeader}>Accedi al tuo account</h1>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <label className={styles.registerLabel}>Nome</label>
        <input
          className={styles.registerInput}
          type="text"
          name="firstName"
          value={registerData.firstName}
          onChange={handleInputChange}
        />
        {showErrors && formErrors.firstName && <p className={styles.error}>{formErrors.firstName}</p>}

        <label className={styles.registerLabel}>Cognome</label>
        <input
          className={styles.registerInput}
          type="text"
          name="lastName"
          value={registerData.lastName}
          onChange={handleInputChange}
        />
        {showErrors && formErrors.lastName && <p className={styles.error}>{formErrors.lastName}</p>}

        <label className={styles.registerLabel}>Email</label>
        <input
          className={styles.registerInput}
          type="email"
          name="email"
          value={registerData.email}
          onChange={handleInputChange}
        />
        {showErrors && formErrors.email && <p className={styles.error}>{formErrors.email}</p>}

        <label className={styles.registerLabel}>Password</label>
        <input
          className={styles.registerInput}
          type="password"
          name="password"
          value={registerData.password}
          onChange={handleInputChange}
        />
        {showErrors && formErrors.password && <p className={styles.error}>{formErrors.password}</p>}

        <button type="submit" disabled={isLoading} className={styles.registerButton}>
          {isLoading ? "Registering..." : "Accedi"}
        </button>

        {registerErrors.length > 0 && (
          <div className={styles.errorContainer}>
            {registerErrors.map((er, i) => (
              <p key={i} className={styles.error}>{er.message}</p>
            ))}
          </div>
        )}
      </form>
    </section>
  );
};

export default RegisterForm;
