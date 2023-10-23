import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { ExitIcon, SearchIcon } from '@/utilities/SvgIcons';
import { getProductSearch } from '@/data/lib';
import Loader2 from '@/utilities/Loader/index2';
const SearchBox = () => {
    const [show, setShow] = React.useState(false);
    const [searchData, setSearch] = React.useState([]);
    const [data, setData] = React.useState([]);
    const [input, setInput] = React.useState();
    const [loaded, setLoad] = React.useState(false);

    const toggle = () => {
        setShow(!show)
        getProductSearch().then((response) => {
            console.log({ response });
            setData(response?.data?.products?.edges)
            setSearch(response?.data?.products?.edges)
            setLoad(true);
        }).catch((err) => {
            console.log({ err });
        })
    }
    const searchHandler = (value) => {
        setInput(value)
        let array = [];
        data.map((element) => {
            if (element?.node?.title.toLowerCase().search(value?.toLowerCase()) >= 0) {
                array.push(element)
            }
        })
        setSearch(array)
    }
    return (
        <>
            {show ?
                <div className={styles.searchBoxContainer}>
                    <div className={styles.searchBoxHolder}>
                        <input placeholder="Search" name="query" autoComplete='off' className={styles.searchBox} onChange={(e) => searchHandler(e.target.value)} value={input} />
                        <button className={styles.exitBtn} onClick={toggle}>
                            <ExitIcon />
                        </button>
                    </div>
                    <div className={styles.resultHolder}>
                        <ul className={styles.dropList}>
                            {loaded ? searchData.length > 0 ? searchData.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <a href={'/products/' + element?.node?.handle}>
                                            <span className={styles.item}>
                                                <span className={styles.icon + ' ' + styles.people}>
                                                    <img src={element?.node?.images.edges[0].node.src} alt='...' width={'45px'} height={'45px'} />
                                                </span>
                                                <div className={styles.text}>
                                                    <p>{element?.node?.title}</p>
                                                    {/* <span dangerouslySetInnerHTML={{ __html:element?.node?.descriptionHtml}} /> */}
                                                </div>
                                            </span>
                                        </a>
                                    </li>
                                )
                            }) : <li>No result Found..</li> : <Loader2 />}
                        </ul>
                    </div>
                </div> :
                <div onClick={toggle}><SearchIcon /></div>}
        </>
    )
}
export default SearchBox;