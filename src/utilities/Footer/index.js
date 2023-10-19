import styles from './styles.module.css'
import NavLink from './Helper/navLink'
import Image from 'next/image'
import { useMatchMedia } from '../Sections/Hooks/useMatchMedia'
export default function Home({ data }) {
    const [isMobile] = useMatchMedia('(max-width: 380px)', true)
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {!data?.hideFooterHead &&
                <div className={styles.wrapper}>
                    <div>
                            <a href={'/'} aria-label="">
                                {!isMobile ? <Image
                                    alt="Bruno logo"
                                    src={"/Bruno-White.webp"}
                                    width={180}
                                    height={30}
                                /> : <Image
                                    alt="Bruno logo"
                                    src={"/Bruno-White.webp"}
                                    width={120}
                                    height={20}
                                />}
                            </a>
                    </div>
                    <div className={styles.socialLinkHolder}>
                        <a href="https://www.instagram.com/brunomdofficial/?hl=en" target="_blank" rel="noreferrer" data-testid="external-link" aria-label="instagram Profile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M12.33 0c1.81.005 2.234.021 3.205.066 1.171.053 1.97.24 2.67.511a5.392 5.392 0 011.949 1.269 5.393 5.393 0 011.269 1.948c.272.7.458 1.5.511 2.67.05 1.093.064 1.493.066 3.954v1.164c-.002 2.46-.016 2.86-.066 3.953-.053 1.171-.24 1.97-.511 2.67a5.393 5.393 0 01-1.269 1.949 5.393 5.393 0 01-1.948 1.269c-.7.272-1.5.458-2.67.511-1.093.05-1.493.064-3.954.066h-1.164c-2.461-.002-2.861-.016-3.954-.066-1.17-.053-1.97-.24-2.67-.511a5.393 5.393 0 01-1.948-1.269 5.392 5.392 0 01-1.269-1.948c-.272-.7-.458-1.5-.511-2.67C.02 14.563.006 14.14 0 12.33V9.67c.004-1.81.02-2.235.065-3.206.053-1.17.24-1.97.511-2.67a5.392 5.392 0 011.269-1.948A5.392 5.392 0 013.794.577c.7-.272 1.5-.458 2.67-.511C7.435.02 7.86.006 9.67 0zm-.498 1.982h-1.664c-2.186.002-2.573.016-3.613.064-1.073.049-1.655.228-2.043.378-.513.2-.88.438-1.265.823a3.408 3.408 0 00-.823 1.265c-.15.388-.33.97-.378 2.043-.048 1.04-.062 1.427-.064 3.613v1.664a99.41 99.41 0 00.023 2.563l.006.204c.009.268.02.526.035.846.049 1.073.228 1.655.378 2.043.2.513.438.88.823 1.264.385.385.752.624 1.265.823.388.151.97.33 2.043.38.96.043 1.363.058 3.139.062h.474l.26.001h1.878c1.775-.005 2.18-.02 3.139-.064 1.073-.049 1.655-.228 2.043-.379.513-.2.88-.438 1.264-.823.385-.384.624-.75.823-1.264.151-.388.33-.97.38-2.043l.023-.545.008-.2c.02-.567.028-1.137.031-2.394v-.474l.001-.26V9.694c-.005-1.775-.02-2.18-.064-3.14-.049-1.072-.228-1.654-.379-2.042-.2-.513-.438-.88-.823-1.265a3.408 3.408 0 00-1.264-.823c-.388-.15-.97-.33-2.043-.378-.32-.015-.578-.026-.846-.035l-.204-.006a99.41 99.41 0 00-2.563-.023zM11 5.352a5.649 5.649 0 110 11.297A5.649 5.649 0 0111 5.35zm0 1.981a3.667 3.667 0 100 7.334 3.667 3.667 0 000-7.334zm5.872-3.525a1.32 1.32 0 110 2.64 1.32 1.32 0 010-2.64z" fill="#FFF" fillRule="evenodd"></path></svg></a>
                        <a href="https://www.facebook.com/BrunoMDofficial" target="_blank" rel="noreferrer" data-testid="external-link" aria-label="facebook Profile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M11.75 22H1.215A1.215 1.215 0 010 20.786V1.214C0 .544.544 0 1.214 0h19.572C21.456 0 22 .544 22 1.214v19.572c0 .67-.544 1.214-1.214 1.214H15.18v-8.52h2.86l.428-3.32H15.18V8.04c0-.96.267-1.616 1.645-1.616h1.758v-2.97a23.601 23.601 0 00-2.562-.131c-2.535 0-4.27 1.547-4.27 4.389v2.448H8.884v3.32h2.867V22z" fill="#FFF" fillRule="evenodd"></path></svg></a>
                    </div>

                </div>}
                <div className={styles.grid}>
                    <NavLink menuGroup={data.links} />
                    <div className={styles.legalCol}>
                        <div className={styles.dFlex}>
                            <div>
                                <Image className={styles.m10px} src={'/src/shopify-foo.webp'} width={85} height={36} alt='...' />
                            </div>
                            <div>
                                <Image className={styles.m10px} src='/src/paymentcard-foo.webp' alt='...' height={20} width={199}/>
                            </div>
                        </div>
                        <div className={styles.textContainer} dangerouslySetInnerHTML={{ __html: data?.text }} />
                    </div>
                </div>
            </div>
        </footer>
    )
}