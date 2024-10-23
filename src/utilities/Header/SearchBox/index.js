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
        console.log("toggle");
        
        setShow(!show)
        getProductSearch().then((response) => {
            console.log( response,"ggg");
            setData(response?.data?.products?.edges)
            setSearch(response?.data?.products?.edges)
            setLoad(true);
        }).catch((err) => {
            console.log({ err});
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
    useEffect(() => {
        if (window.location.pathname === "/prodotti/tendoactive-plus") {
          // Redirect to the desired URL
          window.location.href = "/prodotti/tendoactive-plus-20-stick";
        }
      }, []);
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
                                    <a
    href={"/prodotti/" + element?.node?.handle}
    onClick={(e) => {
        e.preventDefault(); 
      if (element?.node?.handle.includes("tendoactive-plus") ) {
        window.location.href = "/prodotti/tendoactive-plus-20-stick"; 
      }
    }}
  >

                                      <span className={styles.item}>
                                        <span className={styles.icon + " " + styles.people}>
                                          <img
                                            src={element?.node?.images.edges[0].node.src}
                                            alt="..."
                                            width={"45px"}
                                            height={"45px"}
                                          />
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