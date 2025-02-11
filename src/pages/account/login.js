import * as React from "react";
import Link from "next/link";
import styles from "@/styles/login.module.css";
import login from "../../../json/login.json";
import { Encrypt, AuthCheck } from "@/data/Auth";
import { useRouter } from "next/navigation";
import { GetUserDetails } from "@/data/lib";
import PageHead from "@/utilities/Head";
import SEO from "../../../json/SEO.json";

const LoginForm = ({ version }) => {
  const router = useRouter();
  
  React.useEffect(() => {
    if (AuthCheck()) {
      router.replace("/account");
    }
  }, []);

  const [loginErrors, setLoginErrors] = React.useState([]);
  const [showErrors, setShowErrors] = React.useState(false);
  
  const [loginFields, setLoginFields] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  const [loginInProgress, setLoginInProgress] = React.useState(false);

  const validateInputs = () => {
    let newErrors = { email: "", password: "" };
    let isValid = true;

    if (!loginFields.email.trim()) {
      newErrors.email = "L'e-mail è obbligatoria.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginFields.email)) {
      newErrors.email = "Inserisci un indirizzo email valido.";
      isValid = false;
    }

    if (!loginFields.password.trim()) {
      newErrors.password = "È richiesta la password.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowErrors(true);

    if (!validateInputs()) return; 

    setLoginErrors([]);
    setLoginInProgress(true);

    try {
      const response = await GetUserDetails({ loginFields });
      const errors = response?.data?.customerAccessTokenCreate?.customerUserErrors || [];
      const token = response?.data?.customerAccessTokenCreate?.customerAccessToken;

      if (errors.length > 0) {
        setLoginErrors(errors);
      } else if (token) {
        Encrypt(token);
        router.push("/account");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginErrors([{ message: "An unexpected error occurred. Please try again." }]);
    } finally {
      setLoginInProgress(false);
    }
  };

  const handleInputChange = (field, value) => {
    setLoginFields((prev) => ({ ...prev, [field]: value }));

    // Remove error immediately when user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  return (
    <>
      {login[version] && (
        <section className={styles.loginFormSection}>
          <PageHead content={SEO["EU"]?.login?.SEO} />
          <h1 className={styles.loginHeader}>Login</h1>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <label htmlFor="email" className={styles.loginLabel}>
              {login[version].EmailLabel}
            </label>
            <input
              id="email"
              className={styles.loginInput}
              type="email"
              value={loginFields.email}
              onChange={(event) => handleInputChange("email", event.target.value)}
            />
            {showErrors && errors.email && <p className={styles.error}>{errors.email}</p>}

            <label htmlFor="password" className={styles.loginLabel}>
              {login[version].PasswordLabel}
            </label>
            <input
              id="password"
              className={styles.loginInput}
              type="password"
              value={loginFields.password}
              onChange={(event) => handleInputChange("password", event.target.value)}
            />
            {showErrors && errors.password && <p className={styles.error}>{errors.password}</p>}

            {loginErrors.length > 0 && loginErrors.map((err, i) => (
              <p key={i} className={styles.error}>{err.message}</p>
            ))}

            <Link className={styles.secondaryCTA} href={login[version].Forget.href}>
              {login[version].Forget.label}
            </Link>
            
            <div>
              <button
                className={styles.loginButton}
                type="submit"
                disabled={loginInProgress}
              >
                {loginInProgress ? "Logging in..." : login[version].btnLabel}
              </button>
            </div>

            <Link className={styles.secondaryCTA} href={login[version].create.href}>
              {login[version].create.label}
            </Link>

            <hr style={{ marginTop: "1rem" }} />
            
            <div className={styles.secondaryCTA} style={{ textDecoration: "none", paddingTop: ".5rem" }}>
              {login[version].cta}
            </div>

            <Link className={styles.loginButton2} href={login[version].Subscription.href}>
              {login[version].Subscription.label}
            </Link>
          </form>
        </section>
      )}
    </>
  );
};

export default LoginForm;
