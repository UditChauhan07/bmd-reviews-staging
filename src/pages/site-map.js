import React from 'react'
import styles from '@/styles/siteMap.module.css'
import Link from 'next/link'
import PageHead from '@/utilities/Head'
const SiteMap = ({ title }) => {
  return (
    <section className={styles.mainsitemap}>
      <PageHead content={{title:"Site Map | Bruno MD"}}/>
      <div>
      <h1 className={styles.head}>PAGINE</h1>
        <ul className={styles.lists}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/collezioni/tutti">Shop</Link>
            <ul className={styles.slide}>
              <li><Link href="/collezioni/salute-della-pelle">Pelle</Link>
                <ul className={styles.slide1}>
                  <li><Link href="/prodotti/silverphage-crema-gel-50-ml">SILVERPHAGE CREMA GEL 50 ML</Link></li>
                </ul>
              </li>
              <li><Link href="/collezioni/occhi">Occhi</Link>
                <ul className={styles.slide1}>
                  <li><Link href="/prodotti/drop-therapeutic-gocce-oculari-lubrificanti-10ml">DROP THERAPEUTIC 10ml</Link></li>
                  <li><Link href="/prodotti/silverphage-14-individual-wipes">SILVERPHAGE 14 GARZE MONOUSO</Link></li>
                </ul>
              </li>
              <li><Link href="/collezioni/reverse-aging">Reverse Aging</Link>
                <ul className={styles.slide1}>
                  <li><Link href="/prodotti/cronos-30-compresse-da-850mg">CRONOS 30 compresse da 500 mg</Link></li>
                </ul>
              </li>
              <li><Link href="/collezioni/dolore">Dolore</Link>
                <ul className={styles.slide1}>
                  <li><Link href="/prodotti/nubit-30-compresse-da-850mg">Nubit 30 compresse da 850mg</Link></li>
                  <li><Link href="/prodotti/neulenic-600-confezione-da-15-compresse-rivestite-da-1-g-peso-netto-15-0-g">NEULENIC 15 compresse da 1g.</Link></li>
                </ul>
              </li>
              <li><Link href="/collezioni/pre-diabete">Pre-diabete</Link>
                <ul className={styles.slide1}>
                  <li><Link href="/prodotti/cronos-30-compresse-da-850mg">CRONOS 30 compresse da 500 mg</Link></li>
                </ul>
              </li>
              <li><Link href="/collezioni/sali-minerali">SALI MINERALI / ELETTROLITI</Link>
                <ul className={styles.slide1}>
                  <li><Link href="/prodotti/citrak-mg-citrato-di-potassio-1-5g-citrato-di-magnesio-1-g-20-bustine">Citrak Mg 1,5g. + Citrato di magnesio 1.g 20 bustine</Link></li>
                  <li><Link href="/prodotti/citrak-forte-4g-con-edulcoranti-30-bustine">Citrak Forte 4g. con edulcoranti 30 bustine</Link></li>
                  <li><Link href="/prodotti/citrak-3g-30-bustine">Citrak 3g. 30 bustine</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><Link href="/la-nostra-storia">La storia</Link></li>
          <li><Link href="/scienza">La scienza</Link></li>
          <li><Link href="/domande-frequenti">Faq</Link></li>
          <li><Link href="https://blog.brunomd.eu/">Blog</Link></li>
          <li><Link href="/contattaci">Contattaci</Link></li>

          <li><Link href="/responsabilita-sociale">Responsabilità sociale</Link></li>
          <li><Link href="/politica-di-spedizione">Spedizioni</Link></li>
          <li><Link href="/return">Portale per il reso</Link></li>
          <li><Link href="/politica-di-restituzione-e-cancellazione">Reso</Link></li>
          <li><Link href="/termini-e-condizioni">Termini e condizioni di vendita</Link></li>
          <li><Link href="/politica-sullariservatezza">Termini e condizioni di privacy</Link></li>
          <li><Link href="/gestione-dei-cookie">COOKIE POLICY</Link></li>
        </ul>

      </div>
    </section>
  )
}

export default SiteMap