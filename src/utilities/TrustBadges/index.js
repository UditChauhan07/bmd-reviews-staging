import styles from './styles.module.css'
const TrustBadge = ({ contents, productColorTheme }) => {
  const { badges, title } = contents
  if (!badges.length || !title) return null

  return (
    <section className={styles.productBadgesContainer} style={{ backgroundColor: productColorTheme || '#37246b' }}>
      <div className={styles.productBadgesCenter}>
        <div className={styles.badgeGroup}>
          {badges && badges.map((e, i) => {
            return (<div key={i}>
              {e.html ? <>
                <div className={styles.svgHolder} dangerouslySetInnerHTML={{ __html: e.html }} />
              </> :
                <>
                  <img className={styles.p5} src={e.src} alt={e.alt || '...'} height={'150px'} width={'150px'} />
                </>}
            </div>
            )
          })}
        </div>
        <div className={styles.headline}>
          {title}
        </div>
      </div>
    </section>
  )
}
export default TrustBadge