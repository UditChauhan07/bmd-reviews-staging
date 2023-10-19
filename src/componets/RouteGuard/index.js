import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export { RouteGuard };

function RouteGuard({ children }) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        // on initial load - run auth check 
        let path = router.asPath;
        let newPath = path.split("/account/reset/");
        let newPath1 = path.split("/tools/");
        let newPath2 = path.split("/account/activate/");
        if(newPath.length == 2){
            window.location.href = "https://www.brunomd.eu/account/reset/"+newPath[1];
        }else if(newPath1.length == 2){
            window.location.href = "https://www.brunomd.com/tools/"+newPath1[1];
        }else if(newPath2.length == 2){
            window.location.href = "https://www.brunomd.com/account/activate/"+newPath2[1];
        }else{
            authCheck(router.route ||router.asPath);
        }

        // on route change start - hide page content by setting authorized to false  
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check 
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function authCheck(url) {
        // redirect to login page if accessing a private page and not logged in 
        let publicPaths = ['/', '/carrello', '/404-page', '/gestione-dei-cookie', '/politica-sullariservatezza', '/termini-e-condizioni', '/politica-di-restituzione-e-cancellazione', '/politica-di-spedizion', '/responsabilita-sociale', '/contattaci', '/domande-frequenti', '/scienza', '/collezioni/[collezioni]', '/prodotti/[prodotti]', '/la-nostra-storia', '/prodotti/citrak-3g-30-bustine', '/prodotti/citrak-forte-4g-con-edulcoranti-30-bustine', '/prodotti/citrak-mg-citrato-di-potassio-1-5g-citrato-di-magnesio-1-g-20-bustine', '/collezioni/sali-minerali', '/prodotti/cronos-30-compresse-da-850mg', '/collezioni/pre-diabete', '/prodotti/neulenic-600-confezione-da-15-compresse-rivestite-da-1-g-peso-netto-15-0-g', '/prodotti/nubit-30-compresse-da-850mg', '/collezioni/reverse-aging', '/prodotti/silverphage-14-individual-wipes', '/prodotti/drop-therapeutic-gocce-oculari-lubrificanti-10ml', '/collezioni/occhi', '/prodotti/silverphage-crema-gel-50-ml','/prodotti/tendoactive-plus-20-stick', '/collezioni/dolore', '/collezioni/tutti', '/collezioni/salute-della-pelle', '/prodotti/silverphage-crema-gel-50-ml','/account/login','/account/register','/account/forgot-password','/politica-di-spedizione','/account','/account/addresses','/account/address','/account/orders','/account/orders/edit','/test',"/_error",'/manage','/disclaimer','/site-map','/tendo']
        if (!publicPaths.length) {

            publicPaths = ['/404-page']
        }
        if (publicPaths.includes(url)) {
            setAuthorized(true);
        } else {
            router.push('/404-page')
            setAuthorized(false);
        }
    }

    return (authorized && children);
}
