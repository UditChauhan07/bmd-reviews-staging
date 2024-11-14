import Header from '@/utilities/Header/';
import Footer from '@/utilities/Footer/';
import AnnouncementBar from '@/utilities/announcementBar';
import FeatureInfo from '@/utilities/FeatureInfo'
import BottomBar from '@/utilities/BottomBar';
import data from '../../../json/layout.json'
import dynamic from 'next/dynamic';
import Head from 'next/head';

const DynamicChat= dynamic(() => import('@/utilities/ChatBubble'), {
  loading: () => <p>Loading...</p>,
})

export default function Layout({ children,version,script }) {
    return (
        <>
        {/* <div class="yotpo-widget-instance" data-yotpo-instance-id="583415"></div> */}
        {data[version] &&
        <>
            {data[version].announcementBar &&<AnnouncementBar announcement={data[version].announcementBar.title} theme={{ textColor: data[version].announcementBar.textColor, backgroundColor: data[version].announcementBar.backgroundColor }} />}
            {data[version].links && <Header link={data[version].links} version={version} iconLink={{cart:data[version].cartLink, login:data[version].login}}/>}
            <main>{children}</main>
            {script &&<DynamicChat />}
            <FeatureInfo infoBanners={data[version].featureInfo} />
            <Footer data={data[version].footer} />
            <BottomBar contents={data[version].bottomBar} />
        </>
        }
        </>
    )
}
