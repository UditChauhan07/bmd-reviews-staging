import React from 'react'
import { useRouter } from 'next/router'
import styles from './styles.module.css'
const REDIRECT_DELAY = 750

const AuthGuard = ({ allowedAuthStatus, redirectUrl, children }) => {
  const status= allowedAuthStatus== 'authenticated' ? true :false
  let isLoggedIn = allowedAuthStatus
  const router = useRouter()
  const [firstLoad, setFirstLoad] = React.useState(false)

  const authStatus = React.useMemo(() => {
    if (status === 'initial' || status === 'loading') {
      return status
    }

    return isLoggedIn ? 'authenticated' : 'unauthenticated'
  }, [status, isLoggedIn])

  const prevStatus = React.useRef(authStatus)

  const shouldRedirect = !['initial', 'loading', allowedAuthStatus].includes(authStatus)

  React.useEffect(() => {
    if (shouldRedirect) {
      const timerId = setTimeout(() => router.push(redirectUrl), REDIRECT_DELAY)

      return () => {
        clearTimeout(timerId)
      }
    }
  }, [shouldRedirect, redirectUrl])

  React.useEffect(() => {
    if (prevStatus.current === 'initial' && authStatus === 'loading') {
      setFirstLoad(true)
      return () => {
        setFirstLoad(false)
      }
    }

    prevStatus.current = authStatus
  }, [status])
  if (firstLoad)
    return (
      <p aria-live="polite" className={styles.loading}>
        Loading...
      </p>
    )

  if (shouldRedirect) {
    return (
      <p>
        <span>{authStatus}!</span>
        Redirecting to <i>{redirectUrl}</i>...
      </p>
    )
  }

  return <React.Fragment>{children}</React.Fragment>
}

export default AuthGuard