import Header from '@/utilities/Header/';
import Footer from '@/utilities/Footer/';
import AnnouncementBar from '@/utilities/announcementBar';
import FeatureInfo from '@/utilities/FeatureInfo'
import BottomBar from '@/utilities/BottomBar';
import data from '../../../json/layout.json'
import GeoRedirect from '@/utilities/GeoRedirect';
import dynamic from 'next/dynamic'

 
const DynamicChat= dynamic(() => import('@/utilities/ChatBubble'), {
  loading: () => <p>Loading...</p>,
})

export default function Layout({ children,version }) {
    return (
        <>
        {data[version] &&
        <>
            {data[version].announcementBar &&<AnnouncementBar announcement={data[version].announcementBar.title} theme={{ textColor: data[version].announcementBar.textColor, backgroundColor: data[version].announcementBar.backgroundColor }} />}
            {data[version].links &&<Header link={data[version].links} version={version} iconLink={{cart:data[version].cartLink, login:data[version].login}}/>}
            <main>{children}</main>
            <DynamicChat />
            {data[version].redirection &&<GeoRedirect redirect={data[version].redirection}/>}
            <FeatureInfo infoBanners={data[version].featureInfo} />
            <Footer data={data[version].footer} />
            <BottomBar contents={data[version].bottomBar} />
        </>
        }
        </>
    )
}
