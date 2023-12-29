import * as React from "react";
import Link from "next/link";
import styles from "@/styles/login.module.css";
import login from "../../../json/login.json";
import { Encrypt,AuthCheck} from "@/data/Auth";
import { useRouter } from 'next/navigation'
import { GetUserDetails } from "@/data/lib";
import PageHead from "@/utilities/Head";
import SEO from '../../../json/SEO.json'

const LoginForm = ({ version }) => {
  let router=useRouter()
  if(AuthCheck()){
    // window.location.href = '/account'
    router.push('/account')
  }
 
  const [loginErrors, setLoginErrors] = React.useState();
  const [loginFields, setLoginFields] = React.useState({
    email: "",
    password: "",
  });
  const [loginInProgress, setLoginInProgress] = React.useState(false);

  const handleSubmit = async (event) => {
    console.log({loginFields});
    event.preventDefault();
    GetUserDetails({loginFields}).then((response)=>{
      if(response?.data.customerAccessTokenCreate.customerUserErrors.length >0){
        setLoginErrors(response?.data.customerAccessTokenCreate.customerUserErrors)
      }
      if(response?.data?.customerAccessTokenCreate.customerAccessToken){
        Encrypt(response.data.customerAccessTokenCreate.customerAccessToken);
        router.push('/account')
      }
    }).catch((err)=>{
      console.log({err});
    })
    setLoginErrors(null);
    // setLoginInProgress(true);
  };
 

  const disableLoginButton =
    loginFields.email === "" || loginFields.password === "" || loginInProgress;
  return (
    <>
      {login[version] && (
        <section className={styles.loginFormSection}>
          <PageHead content={SEO['EU']?.login?.SEO}/>
          <h1 className={styles.loginHeader}>Login</h1>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <label for="email" className={styles.loginLabel}>
              {login[version].EmailLabel}
            </label>
            <input
              id="email"
              className={styles.loginInput}
              type="email"
              value={loginFields.email}
              onChange={(event) =>
                setLoginFields((prevLoginFields) => ({
                  ...prevLoginFields,
                  email: event.target.value,
                }))
              }
              required
            />

            <label for="password" className={styles.loginLabel}>
            {login[version].PasswordLabel}
            </label>
            <input
              id="password"
              className={styles.loginInput}
              type="password"
              value={loginFields.password}
              onChange={(event) =>
                setLoginFields((prevLoginFields) => ({
                  ...prevLoginFields,
                  password: event.target.value,
                }))
              }
              required
            />
            {loginErrors && (
              <div>
                <p>{loginErrors[0].message}</p>
              </div>
            )}
            <Link
              className={styles.secondaryCTA}
              href={login[version].Forget.href}
            >
              {login[version].Forget.label}
            </Link>
            <div>
              <button
                className={styles.loginButton}
                type="submit"
                disabled={disableLoginButton}
              >
                {login[version].btnLabel}
              </button>
            </div>
            <Link className={styles.secondaryCTA} href={login[version].create.href}>
            {login[version].create.label}
            </Link>
            <hr style={{ marginTop: "1rem" }} />
            <div
              className={styles.secondaryCTA}
              style={{ textDecoration: "none", paddingTop: ".5rem" }}
            >
              {login[version].cta}
            </div>
            <Link
              className={styles.loginButton2}
              href={login[version].Subscription.href}
            >
              {login[version].Subscription.label}
            </Link>
          </form>
        </section>
      )}
    </>
  );
};

export default LoginForm;
