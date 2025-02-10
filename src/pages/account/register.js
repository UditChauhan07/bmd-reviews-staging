import * as React from "react";
import styles from "@/styles/register.module.css";
import PageHead from "@/utilities/Head";
import SEO from '../../../json/SEO.json'
import { createUserShop } from "@/data/lib";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [disabled, setDisabled] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [registerErrors, setRegisterErrors] = React.useState();
  const [registerData, setRegisterData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  React.useEffect(() => {
    setDisabled(registerData.email === "" || registerData.password === "");
  }, [registerData.email, registerData.password]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setRegisterErrors(null);
    setIsLoading(true);

    createUser(registerData);
  };
  const createUser = (registerData) => {
    const { firstName, lastName, email, password } = registerData;
    createUserShop({user:registerData}).then((response)=>{
      if(response?.data?.customerCreate){
        // router.push("/account/login")
        window.location.href = "https://www.brunomd.eu/account/login"
      }

      
      if(response?.errors){
        setRegisterErrors(response?.errors)
      }
    }).catch((err)=>{
      console.log({err});
    })
  };

  return (
    <section>
      <PageHead content={SEO['EU']?.register?.SEO}/>
      <h1 className={styles.registerHeader}>Accedi al tuo account</h1>
      {/* <AuthGuard allowedAuthStatus="unauthenticated" redirectUrl="/account"> */}
        <form onSubmit={handleSubmit} className={styles.registerForm}>
          <label className={styles.registerLabel}>Nome</label>
          <input
            className={styles.registerInput}
            type="text"
            value={registerData.firstName}
            onChange={(event) =>
              setRegisterData((currentData) => ({
                ...currentData,
                firstName: event.target.value,
              }))
            }
            required
          />
          <label className={styles.registerLabel}>Cognome</label>
          <input
            className={styles.registerInput}
            type="text"
            value={registerData.lastName}
            onChange={(event) =>
              setRegisterData((currentData) => ({
                ...currentData,
                lastName: event.target.value,
              }))
            }
            required
          />
          <label className={styles.registerLabel}>Email</label>
          <input
            className={styles.registerInput}
            type="email"
            value={registerData.email}
            onChange={(event) =>
              setRegisterData((currentData) => ({
                ...currentData,
                email: event.target.value,
              }))
            }
            required
          />
          <label className={styles.registerLabel}>Password</label>
          <input
            className={styles.registerInput}
            type="password"
            value={registerData.password}
            onChange={(event) =>
              setRegisterData((currentData) => ({
                ...currentData,
                password: event.target.value,
              }))
            }
            required
          />
          <button
            disabled={disabled}
            type="submit"
            className={styles.registerButton}
          >
            Accedi
          </button>
          {!registerErrors ? (
            <div></div>
          ) : (
            registerErrors.map((er, i) => {
              return <div key={i}>{er.message}</div>;
            })
          )}
        </form>
      {/* </AuthGuard> */}
    </section>
  );
};

export default RegisterForm;
