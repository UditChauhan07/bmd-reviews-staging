import React from 'react';
import styles from './styles.module.css';
import { ExitIcon, SearchIcon } from '@/utilities/SvgIcons';
import { getProductSearch } from '@/data/lib';
import Loader2 from '@/utilities/Loader/index2';

const SearchBox = () => {
    const [show, setShow] = React.useState(false);
    const [searchData, setSearch] = React.useState([]);
    const [data, setData] = React.useState([]);
    const [input, setInput] = React.useState('');
    const [loaded, setLoad] = React.useState(false);
    const [param1, setParam] = React.useState('');

    const toggle = () => {
        console.log("toggle");

        setShow(!show);
        getProductSearch()
            .then((response) => {
                console.log(response, "ggg");
                setData(response?.data?.products?.edges);
                setSearch(response?.data?.products?.edges);
                setLoad(true);
            })
            .catch((err) => {
                console.log({ err });
            });
    };

    const searchHandler = (value) => {
        setParam(value);
        setInput(value);
        let array = [];

        data.forEach((element) => {
            const title = element?.node?.title.toLowerCase();
            const descriptionHtml = element?.node?.descriptionHtml
                ? element.node.descriptionHtml.replace(/<\/?[^>]+(>|$)/g, "").toLowerCase()
                : "";

            if (title.includes(value.toLowerCase()) || descriptionHtml.includes(value.toLowerCase())) {
                array.push(element);
            }
        });

        setSearch(array);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default form submission
            console.log(event.value);
            const encodedParam = encodeURIComponent(param1);
            window.location.href = `/collezioni/tutti?param=${encodedParam}`;
        }
    };

    return (
        <>
            {show ? (
                <div className={styles.searchBoxContainer}>
                    <div className={styles.searchBoxHolder}>
                        <input
                            placeholder="Search"
                            name="query"
                            autoComplete='off'
                            className={styles.searchBox}
                            onChange={(e) => searchHandler(e.target.value)}
                            onKeyPress={handleKeyPress} 
                            value={input}
                        />
                        <button className={styles.exitBtn} onClick={toggle}>
                            <ExitIcon />
                        </button>
                    </div>
                    <div className={styles.resultHolder}>
                        <ul className={styles.dropList}>
                            {loaded ? (
                                searchData.length > 0 ? (
                                    searchData.map((element, index) => (
                                        <li key={index}>
                                            <a href={`/prodotti/${element?.node?.handle}`}>
                                                <span className={styles.item}>
                                                    <span className={`${styles.icon} ${styles.people}`}>
                                                        <img
                                                            src={element?.node?.images.edges[0].node.src}
                                                            alt="..."
                                                            width={"45px"}
                                                            height={"45px"}
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
                                    <li className={styles.notfound}> No Result Found</li>
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
