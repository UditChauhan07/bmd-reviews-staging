import React, { useEffect, useState } from 'react'
import styles from '@/styles/spedizione.module.css'
import PageHead from '@/utilities/Head'


export default function Spedizione() {

    return (
        <section className={styles.container}>
            <PageHead content={{title:"Cookie Policy | Bruno MD"}}/>
            <h1>COOKIE POLICY</h1>
            <div className={styles.textHolder}>
                <p>
                    La presente Cookie Policy riguarda l&apos;utilizzo di Cookie da parte del Sito web
                    <strong>brunomd.eu</strong>.
                    Per la Privacy Policy del Sito web si può
                    <a href="/politica-sullariservatezza" target="_blank" rel="noopener noreferrer" data-testid="external-link">cliccare qui</a>.
                </p>
                <p>I Cookie sono piccoli file di testo di piccole dimensioni che possono essere utilizzati dai siti web per rendere più efficiente l&apos;esperienza per l&apos;Utente e che vengono inviate al suo browser, dove vengono memorizzati per essere poi ritrasmessi allo stesso Sito web alla sua successiva visita del medesimo. I Cookie hanno funzioni diverse.</p>
                <p>I Cookie hanno il fine di migliorare la funzionalità e la navigazione di questo Sito web. In altri casi, invece, i Cookie sono utilizzati per monitorare gli utenti durante la navigazione, che registrano informazioni su ciò che l&apos;Utente compra o potrebbe voler comprare, per personalizzare la pubblicità che gli viene mostrata quando apre la mail o naviga su un social network e per personalizzare contenuti, fornire le funzioni dei social media e analizzare il traffico. </p>
                <p>Nel suo browser l&apos;Utente può impostare le preferenze di Privacy in modo da non memorizzare Cookie, cancellarli dopo ogni visita o ogni volta che chiude il browser, o anche accettare solo i Cookie di <strong>brunomd.eu</strong> e non quelli di terze parti.</p>
                <p><strong>Cookie Tecnici </strong></p>
                <p>I Cookie tecnici sono quelli il cui utilizzo non richiede il consenso dell&apos;Utente. I Cookie tecnici sono utilizzati al solo fine di rendere possibile la navigazione dell&apos;Utente sul Sito web e consentirgli di utilizzarne le funzionalità. Si tratta sempre di Cookie di prima parte, in quanto sono veicolati direttamente dal Titolare sul Sito web. I Cookie di navigazione sono normalmente Cookie di sessione e, pertanto, una volta chiuso il browser di navigazione, vengono disattivati automaticamente. Altri Cookie tecnici sono utili per consentire di memorizzare alcune preferenze dell&apos;Utente senza doverle reimpostare nel corso delle visite successive (c.d. Cookie di Funzionalità). Per questo motivo, i Cookie di funzionalità sono spesso Cookie persistenti, in quanto rimangono memorizzati nel computer dell&apos;Utente anche dopo la chiusura del browser di navigazione, fino alla data di scadenza per essi prevista o fino a quando l&apos;Utente abbia deciso di eliminarli.</p>
                <p><strong>Cookie di Terze parti </strong></p>
                <p>Questi Cookie sono utilizzati al fine di raccogliere informazioni sull&apos;utilizzo del Sito web fatto da parte degli Utenti in forma anonima quali: pagine visitate, tempo di permanenza, origini del traffico di provenienza, provenienza geografica, età, genere e interessi, ai fini statistici e di attività di marketing. Questi Cookie sono inviati da domini di terze parti esterni al Sito web.</p>
                <h3>STRUMENTI DI CONTATTO E CHAT </h3><p><strong>Hotspot (Hotspot Ireland Limited)</strong></p>
                <p>Per maggiori informazioni è sufficiente seguire questo link:  <a href="https://legal.hubspot.com/cookie-policy" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://legal.hubspot.com/cookie-policy</a></p>
                <p><strong>NEWSLETTER </strong></p>
                <p>Questo Sito web fa uso del servizio </p>
                <p><strong>HubSpot (HubSpot Ireland Limited)</strong></p>
                <p>Per maggiori informazioni è sufficiente seguire questo link: <a href="https://legal.hubspot.com/cookie-policy" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://legal.hubspot.com/cookie-policy</a></p>
                <h3>MISURE DI SICUREZZA ADOTTATE</h3><p><strong>reCAPTCHA</strong></p>
                <p>Questo Sito web usa reCAPTCHA che è un servizio soggetto alla politica sulla privacy e ai termini e condizioni di utilizzo di Google. </p>
                <p><a href="https://policies.google.com/privacy?hl=itq" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://policies.google.com/privacy?hl=itq</a> </p>
                <p><a href="https://policies.google.com/terms?hl=it" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://policies.google.com/terms?hl=it</a></p>
                <h3>STATISTICA </h3><p><strong>Google Analytics  </strong></p>
                <p>Google Analytics fa uso dei Cookie per raccogliere informazioni, in forma aggregata, sul numero degli Utenti e su come essi visitino questo Sito web. Questo Sito web utilizza il servizio Google Analytics offerto da Google Ireland Limited, con IP anonimizzato, i cui relativi Cookie sono quindi di terze parti, per il monitoraggio statistico delle attività realizzate sul Sito web. Google Analytics utilizza Cookie che non memorizzano dati personali. Per ulteriori informazioni relative a Google Analytics è possibile consultare i siti: </p>
                <p><a href="https://www.google.it/policies/privacy/partners/" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://www.google.it/policies/privacy/partners/</a></p>
                <p><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage." target="_blank" rel="noopener noreferrer" data-testid="external-link">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage.</a></p>
                <p>È possibile disabilitare l&apos;azione di Google Analytics attraverso l&apos;opt out:</p>
                <p><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://tools.google.com/dlpage/gaoptout</a></p>
                <p><strong>Monitoraggio conversioni pixel di Facebook (Meta Platforms, Inc.)</strong></p>
                <p>Questo Sito web utilizza il servizio di monitoraggio delle conversioni offerto da Meta Platforms, Inc. i cui relativi Cookie sono quindi di terze parti, per il monitoraggio statistico delle attività realizzate sul Sito web. Per maggiori informazioni è sufficiente seguire questo link: <a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://www.facebook.com/policies/cookies/ </a></p>
                <p><strong>Hotjar (Hotjar Ltd) </strong></p>
                <p>Questo Sito web utilizza il servizio di statistica offerto da Hotjar Ltd che consente al Titolare del Trattamento di monitorare le conversioni dei propri clienti e di registrare le sessioni. Al seguente link <a href="https://www.hotjar.com/privacy/do-not-track/" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://www.hotjar.com/privacy/do-not-track/</a> è reso disponibile da Hotjar il componente aggiuntivo del browser per il Do not track. Per maggiori informazioni è sufficiente seguire questo link: <a href="https://help.hotjar.com/hc/en-us/articles/115011789248-Hotjar-Cookie-Information" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://help.hotjar.com/hc/en-us/articles/115011789248-Hotjar-Cookie-Information</a></p>
                <p><strong>HubSpot</strong></p>
                <p>Per maggiori informazioni è sufficiente seguire questo link:  </p>
                <p><a href="https://legal.hubspot.com/cookie-policy" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://legal.hubspot.com/cookie-policy</a></p>
                <p><strong>Hootsuite Inc.</strong></p>
                <p>Per maggiori informazioni è sufficiente seguire questo link:  </p>
                <p><a href="https://www.hootsuite.com/it/legal/cookies" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://www.hootsuite.com/it/legal/cookies</a></p>
                <h3>METODI DI PAGAMENTO </h3><p><strong>PayPal</strong></p>
                <p>Per maggiori informazioni è sufficiente seguire questo link: <a href="https://www.paypal.com/it/webapps/mpp/ua/cookie-full" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://www.paypal.com/it/webapps/mpp/ua/cookie-full</a></p>
                <p><strong>Amazon Pay</strong></p>
                <p>Per maggiori informazioni è sufficiente seguire questo link</p>
                <p>  https://pay.amazon.it/help/201751620</p>
                <p><strong>Cookie di profilazione </strong></p>
                <p>I Cookie di profilazione sono utilizzati per creare un profilo di Utente, basato sulle preferenze ed i gusti da lui manifestati durante la navigazione su Internet, e fargli visualizzare messaggi pubblicitari coerenti con il suo profilo. In questo modo i messaggi pubblicitari che l&apos;Utente visualizzerà su questo Sito web potranno essere per lui maggiormente interessanti. Come previsto dalla normativa vigente per l&apos;installazione di tali Cookie è richiesto il preventivo consenso. </p>
                <p><strong>Facebook Pixel</strong></p>
                <p>Il Pixel di Facebook è utilizzato per effettuare attività di “remarketing” e attività di “Retargeting”; grazie a queste attività si utilizzano i Cookie che l&apos;Utente lascia sul Sito web, senza identificarlo. </p>
                <p>Per controllare e disabilitare le inserzioni è sufficiente seguire questi link: <a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://www.facebook.com/policies/cookies/</a> e <a href="https://www.facebook.com/ads/settings" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://www.facebook.com/ads/settings</a></p>
                <p><strong>Google ADS</strong></p>
                <p>È possibile disabilitare permanentemente le funzioni di targeting e di remarketing disabilitando la funzione “pubblicità personalizzata” nell&apos;account Google. Per farlo, è sufficiente seguire questo link: <a href="https://www.google.com/settings/ads/onweb/" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://www.google.com/settings/ads/onweb/</a></p>
                <p><strong>Tik Tok Ads </strong></p>
                <p>Questo Sito web fa uso dello strumento Pixel Tracking al fine di misurare le conversioni e comprendere le azioni che le persone eseguono sul Sito web. Per ulteriori informazioni relative a Instagram Ads è sufficiente seguire questo <a href="https://www.tiktok.com/legal/new-privacy-policy?lang=it-IT	" target="_blank" rel="noopener noreferrer" data-testid="external-link">link</a></p>
                <p><strong>Eliminare o disattivare i Cookie</strong></p>
                <p>Fatta eccezione per i Cookie tecnici strettamente necessari alla normale navigazione, il conferimento dei Dati è rimesso alla volontà dell&apos;Utente che decide di navigare sul sito dopo aver preso visione dell&apos;informativa breve contenuta nell&apos;apposito banner e di usufruire dei servizi di terze parti che comportano l&apos;installazione di Cookie. L&apos;Utente può quindi evitare l&apos;installazione dei Cookie mantenendo il banner o attraverso le apposite funzioni disponibili sul proprio browser o in questa policy. L&apos;Utente può gestire le preferenze relative ai Cookie direttamente all&apos;interno del suo browser ed impedire che terze parti possano installarne.</p>
                <p>È importante che l&apos;Utente sappia che disabilitando tutti i Cookie, il funzionamento di questo Sito potrebbe essere compromesso.</p>
                <p>Ciascun browser presenta procedure diverse per la gestione delle impostazioni.</p>
                <p>L&apos;Utente può ottenere istruzioni specifiche attraverso i link sottostanti.</p>
                <p>Eliminare/disattivare i cookie Android al seguente indirizzo: <a href="https://support.google.com/chrome/answer/2392971?hl=it-IT" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://support.google.com/chrome/answer/2392971?hl=it-IT</a></p>
                <p>Eliminare/disattivare i cookie di Mozilla Firefox al seguente indirizzo: <a href="http://support.mozilla.com/it/kb/Eliminare%20i%20cookie" target="_blank" rel="noopener noreferrer" data-testid="external-link">http://support.mozilla.com/it/kb/Eliminare%20i%20cookie</a></p>
                <p>Eliminare/disattivare i cookie con Explorer al seguente indirizzo: <a href="http://windows.microsoft.com/it-IT/windows-vista/Delete-your-Internet-cookies" target="_blank" rel="noopener noreferrer" data-testid="external-link">http://windows.microsoft.com/it-IT/windows-vista/Delete-your-Internet-cookies</a></p>
                <p>Eliminare/disattivare i cookie con Chrome al seguente indirizzo: <a href="http://support.google.com/chrome/bin/answer.py?hl=it&amp;answer=95647" target="_blank" rel="noopener noreferrer" data-testid="external-link">http://support.google.com/chrome/bin/answer.py?hl=it&amp;answer=95647</a></p>
                <p>Eliminare/disattivare i cookie con Safari al seguente indirizzo : <a href="http://support.apple.com/kb/PH5042" target="_blank" rel="noopener noreferrer" data-testid="external-link">http://support.apple.com/kb/PH5042</a></p>
                <p>Eliminare/disattivare i cookie con Opera al seguente indirizzo: <a href="http://www.opera.com/browser/tutorials/security/privacy/" target="_blank" rel="noopener noreferrer" data-testid="external-link">http://www.opera.com/browser/tutorials/security/privacy/</a></p>
                <p>Eliminare/disattivare i cookie iOS al seguente indirizzo: <a href="https://support.apple.com/it-it/HT201265" target="_blank" rel="noopener noreferrer" data-testid="external-link">https://support.apple.com/it-it/HT201265</a></p>
                <p>Per disabilitare i Cookie di terze parti è inoltre possibile utilizzare <a href="http://www.youronlinechoices.com/it/le-tue-scelte" target="_blank" rel="noopener noreferrer" data-testid="external-link"><strong>Your Online Choices</strong></a>, un servizio web gestito dall&apos;associazione non-profit European Interactive Digital Advertising Alliance (EDAA) che fornisce informazioni sulla pubblicità comportamentale basata sui Cookie di profilazione e consente agli utenti di opporsi facilmente (opt-out) alla loro installazione. Eliminando tutti i Cookie dal proprio browser o rimuovendoli attraverso servizi come Your Online Choices questi, se di terza parte, saranno inibiti genericamente, non solo nel perimetro di questo sito.</p>
                <p><strong>Ulteriori informazioni sul trattamento</strong></p>
                <p>Su richiesta dell&apos;Utente, in aggiunta alle informazioni contenute in questa Cookie Policy, questo Sito web potrebbe fornire delle Informative aggiuntive e contestuali riguardanti servizi specifici, o la raccolta ed il trattamento di Dati Personali.</p>
                <p>Per necessità legate al funzionamento ed alla manutenzione, questo Sito e gli eventuali servizi terzi da esso utilizzati potrebbero raccogliere Log di sistema, ossia file che registrano le interazioni e che possono contenere anche Dati Personali. Maggiori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste in qualsiasi momento al Titolare del Trattamento utilizzando le informazioni di contatto.</p>
                <p><strong>Esercizio dei diritti dell&apos;interessato</strong></p>
                <p>Ai sensi degli artt. 15-22 del Regolamento Europeo n. 679/2016, l&apos;Interessato ha diritto di ottenere la conferma dell&apos;esistenza o meno di dati personali che lo riguardano, anche se non ancora registrati, e la loro comunicazione in forma intelligibile. L&apos;interessato ha diritto di ottenere indicazione: a) dell&apos;origine dei dati personali;</p>
                <p>b) delle finalità e modalità del trattamento; c) della logica applicata in caso di trattamento effettuato con l&apos;ausilio di strumenti elettronici; d) degli estremi identificativi del Titolare e dei Responsabili del Trattamento dei Dati Personali;</p>
                <p>e) dei soggetti o delle categorie di soggetti ai quali i Dati Personali possono essere comunicati o che possono venirne a conoscenza in qualità di rappresentante designato nel territorio dello Stato, di responsabili o incaricati; f) l&apos;aggiornamento, la rettificazione ovvero, quando vi ha interesse, l&apos;integrazione dei Dati; g) la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, compresi quelli di cui non è necessaria la conservazione in relazione agli scopi per i quali i dati sono stati raccolti o successivamente trattati.</p>
                <p><strong>Titolare del Trattamento </strong></p>
                <p>I Titolari del Trattamento dei Dati raccolti da questo Sito web sono:</p>
                <p><strong>Pharma Labs Srl</strong>, Via S. Gregorio, 12, 20124 Milano (MI), e-mail: customercare@brunopharma.com</p>
                <p>Il Titolare non è responsabile per l&apos;aggiornamento di tutti i link visualizzabili nella presente Cookie Policy, pertanto ogni qualvolta un link non sia funzionante e/o aggiornato, gli Utenti riconoscono ed accettano che dovranno sempre far riferimento al documento e/o sezione dei siti internet richiamati da tale link.</p>
                <p>Cookie Policy aggiornata a marzo 2023</p>
                <hr />
            </div>
        </section>
    )
}
