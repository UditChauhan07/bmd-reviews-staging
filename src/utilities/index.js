import React from 'react'

import styles from './styles.module.css'

import { useYotpoLoyalty } from '@frontend-sdk/yotpo'
const RewardsPOPDSX = () => {
  const { loading, error, yotpoLoyalty } = useYotpoLoyalty(
    'kX4ZsZvCM55qdsLW9P9-NQ',
    30000,
    2000,
  )
  const onClick = () => {
    yotpoLoyalty?.showRewardsModal()
  }
  return (
    <>
      <button type="button" onClick={onClick} disabled={loading || error instanceof Error} className={styles.btn}>
        {loading ? 'Loading…' : error ? 'Error' : 'Il mio programma fedelta'}
      </button>

      {error instanceof Error && (
        <code>
          <b>Error:</b> {error.message}.
        </code>
      )}
      <div
        id="swell-customer-identification"
        data-authenticated="true"
        data-email={'…'}
        data-id={'…'}
        style={{ display: 'none' }}></div>
    </>
  )
}
export default RewardsPOPDSX