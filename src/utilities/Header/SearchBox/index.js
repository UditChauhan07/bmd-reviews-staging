import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter for navigation
import styles from './styles.module.css';
import { ExitIcon, SearchIcon } from '@/utilities/SvgIcons';
import { getProductSearch } from '@/data/lib';
import Loader2 from '@/utilities/Loader/index2';

const SearchBox = () => {
    const router = useRouter(); // for navigation
    const [show, setShow] = React.useState(false);
    const [searchData, setSearch] = React.useState([]);
    const [data, setData] = React.useState([]);
    const [input, setInput] = React.useState('');
    const [loaded, setLoad] = React.useState(false);

    const toggle = () => {
        setShow(!show);
        if (!show) {
            getProductSearch()
                .then((response) => {
                    setData(response?.data?.products?.edges);
                    setSearch(response?.data?.products?.edges);
                    setLoad(true);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

    const searchHandler = (value) => {
        setInput(value);
        const filteredData = data.filter((element) => {
            const title = element?.node?.title.toLowerCase();
            const descriptionHtml = element?.node?.descriptionHtml
                ? element.node.descriptionHtml.replace(/<\/?[^>]+(>|$)/g, "").toLowerCase()
                : "";
            return title.includes(value.toLowerCase()) || descriptionHtml.includes(value.toLowerCase());
        });
        setSearch(filteredData);
    };

    const handleSubmitSearch = () => {
        const encodedInput = encodeURIComponent(input);
        router.push(`/collezioni/tutti?param=${encodedInput}`);
    };

    return (
        <>
            {show ? (
                <div className={styles.searchBoxContainer}>
                    <div className={styles.searchBoxHolder}>
                        <input
                            placeholder="Search"
                            name="query"
                            autoComplete="off"
                            className={styles.searchBox}
                            onChange={(e) => searchHandler(e.target.value)}
                            value={input}
                        />
                        <button className={styles.exitBtn} onClick={toggle}>
                            <ExitIcon />
                        </button>
                        {/* <button className={styles.searchBtn} onClick={handleSubmitSearch}>
                            Search
                        </button> */}
                    </div>
                    <div className={styles.resultHolder}>
                        <ul className={styles.dropList}>
                            {loaded ? (
                                searchData.length > 0 ? (
                                    searchData.map((element, index) => (
                                        <li key={index}>
                                            <a
                                                href={`/prodotti/${element?.node?.handle}`}
                                                onClick={(e) => {
                                                    if (element?.node?.handle.includes("tendoactive-plus")) {
                                                        e.preventDefault();
                                                        window.location.href = "/prodotti/tendoactive-plus-20-stick";
                                                    }
                                                }}
                                            >
                                                <span className={styles.item}>
                                                    <span className={`${styles.icon} ${styles.people}`}>
                                                        <img
                                                            src={element?.node?.images.edges[0]?.node?.src}
                                                            alt={element?.node?.title || "Product Image"}
                                                            width="45"
                                                            height="45"
                                                        />
                                                    </span>
                                                    <div className={styles.text}>
                                                        <p>{element?.node?.title}</p>
                                                    </div>
                                                </span>
                                            </a>
                                        </li>
                                    ))
                                ) : (
                                    <li className={styles.notfound}>Nessun prodotto trovato</li>
                                )
                            ) : (
                                <Loader2 />
                            )}
                        </ul>
                    </div>
                </div>
            ) : (
                <div onClick={toggle}><SearchIcon /></div>
            )}
        </>
    );
};

export default SearchBox;
