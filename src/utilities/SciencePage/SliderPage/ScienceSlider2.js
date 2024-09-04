import React, { useState, useEffect } from 'react'
import styles from './ScienceSlider2.module.css'
import Modal from '../ModalSciencePage/Modal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import ProductsData from "../../../../json/products.json";
import PurchaseBox from "@/utilities/PurchaseBox";
import { getProduct, getSubscription } from "@/data/lib";

const ScienceSlider2 = () => {
    const [load, setLoad] = useState(true);
    const [product, setProduct] = useState();
    const [shopifyP, setSProduct] = useState();
    const [rechargeProduct, setRProduct] = useState();
    const [selectedKeyword, setSelectedKeyword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage2, setModalImage2] = useState('/images/modalImgBrunoMd (1).webp');
    const [modalTitle2, setModalTitle2] = useState('Royal Collagen Peptides');
    const [modalsubTitle2, setModalsubTitle2] = useState('The Science of Beauty');
    
    //..... MouseEnter Function Start ....//
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(4);


    // const handleMouseEnter = (keyword, elementId, containerId) => {
    //     setSelectedKeyword(keyword);
    //     const element = document.getElementById(elementId);
    //     const container = document.getElementById(containerId);
    //     if (element && container) {
    //         container.scrollTop = element.offsetTop - container.offsetTop;
    //     }
    // };

    const handleMouseEnter = (keyword, elementId, containerId) => {
        setSelectedKeyword(keyword);
        const element = document.getElementById(elementId);
        const container = document.getElementById(containerId);
    
        if (element && container) {
            container.scrollTop = element.offsetTop - container.offsetTop;
    
            const elementRect = element.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
    
            const isElementFullyVisible =
                elementRect.top >= containerRect.top &&
                elementRect.bottom <= containerRect.bottom;
    
            if (!isElementFullyVisible) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    };
    

  
    var {
        title,
        details,
        newsletter,
        fourStepProcess,
        theme,
        EXTERNALID,
        STOREFRONTID,
        SLUG,
        benefits,
        priceBox,
        seo,
        testimonial,
        homeGallery,
        review,
      } = product || {};
    
      const getProductData = (slug) => {
        console.log("sss",slug);
            let product = ProductsData[slug];
            console.log("sss1",product);
            if (product?.EXTERNALID) {
              const productId = `gid://shopify/Product/${product.EXTERNALID}`;
              if (product?.EXTERNALID && shopifyP?.id != productId) {
                getProduct({ productId })
                  .then((response) => {
                    let product = response?.data?.product;
                    setSProduct(product);
                    console.log("kkkkk");
                    setLoad(false);
                  })
                  .catch((err) => {
                    console.log({ err });
                  });
              }
              var EXTERNALID = product?.EXTERNALID;
              if (EXTERNALID && rechargeProduct?.product_id != EXTERNALID) {
                getSubscription({ id: EXTERNALID })
                  .then((response) => {
                    if (response?.plans?.length) {
                      let freqs = [];
                      response.plans.map((element) => {
                        if (
                          element.subscription_preferences.charge_interval_frequency
                        )
                          freqs.push({
                            id: `gid://shopify/SellingPlan/${element.external_plan_id}`,
                            value:
                              element.subscription_preferences
                                .charge_interval_frequency + " giorni",
                          });
                      });
                      freqs.sort((a, b) => {
                        if (a.value < b.value) {
                          return -1;
                        }
                        if (a.value > b.value) {
                          return 1;
                        }
                      });
                      setRProduct({
                        product_id: EXTERNALID,
                        subscription_preferences: freqs,
                      });
                    }
                    if (response?.selling_plan_groups?.length > 0) {
                      let freqs = [];
                      response.selling_plan_groups[0].selling_plans.map((plans) => {
                        if (plans.order_interval_frequency) {
                          freqs.push({
                            id: `gid://shopify/SellingPlan/${plans.selling_plan_id}`,
                            value: plans.order_interval_frequency + " giorni",
                          });
                        }
                      });
                      freqs.sort((a, b) => {
                        if (a.value < b.value) {
                          return -1;
                        }
                        if (a.value > b.value) {
                          return 1;
                        }
                      });
                      setRProduct({
                        product_id: EXTERNALID,
                        subscription_preferences: freqs,
                      });
                    }
                  })
                  .catch((err) => {
                    console.error({ err });
                  });
              }
              setProduct(product);
            } else {
              //window.location.href = "/";
            }
      };



    //..... MouseEnter Function End ....//

    // ..... Accordian and Modal Function Start .....//
   
    const handleCloseModal = () => setIsModalOpen(false);
    const handleShow = (imageSrc2, title2, subTitle2, product) => {
        setModalImage2(imageSrc2);
        setModalTitle2(title2);
        setModalsubTitle2(subTitle2)
        getProductData(product)
        setIsModalOpen(true)
    }
    // ..... Accordian and Modal Function Start .....//

    //..... Slider2 Function Start .....///

    const goToPrev2 = () => {
        slider2.slickPrev();
    };
    const goToNext2 = () => {
        slider2.slickNext();
    };
    let slider2;
    useEffect(() => {
        setTotalSlides(slider2 ? slider2.props.children.length : 0);
    }, []);



    const afterChangeHandler = (current) => {
        setCurrentSlide(current);
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };
    //..... Slider2 Function End .....///

    return (
        <div>
            <div className={styles.nextCarousel}>
                <div className={styles.bothButton2Main}>
                <div className={styles.bothButton2}>
    <div
        className={styles.LeftBtn}
        style={{
            opacity: currentSlide === 0 ? 0.1 : 1,
            cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
            backgroundColor: currentSlide === totalSlides - 1 || currentSlide === 2 || currentSlide === 3 ? 'black' : 'transparent', 
        }}
        onClick={currentSlide === 0 ? null : goToPrev2}
    >
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                className={styles.svgIcon}
            >
                <path
                    d="M15.166 26L45.4994 26"
                    stroke={currentSlide === totalSlides - 1 || currentSlide === 2 || currentSlide === 3 ? "#FFFFFF" : "#FFFFFF"} 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M4.69127 26.2144L13.9557 31.773C14.4889 32.093 15.1673 31.7089 15.1673 31.087L15.1673 20.913C15.1673 20.2911 14.4889 19.907 13.9557 20.227L4.69127 25.7856C4.52944 25.8827 4.52944 26.1173 4.69127 26.2144Z"
                    fill={currentSlide === totalSlides - 1 || currentSlide === 2 || currentSlide === 3 ? "#FFFFFF" : "#FFFFFF"} 
                />
            </svg>
        </div>
    </div>
    <div
        className={styles.RightBtn}
        style={{
            opacity: currentSlide === totalSlides - 1 ? 0.1 : 1,
            cursor: currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer',
            backgroundColor: currentSlide === 0 || currentSlide === 2 || currentSlide === 3 ? 'black' : 'transparent',
        }}
        onClick={currentSlide === totalSlides - 1 ? null : goToNext2}
    >
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
            >
                <path
                    d="M36.834 26H6.50065"
                    stroke={currentSlide === 1 || currentSlide === 2 || currentSlide === 3 ? "#FFFFFF" : "#FFFFFF"} 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M47.3087 25.7856L38.0443 20.227C37.5111 19.907 36.8327 20.2911 36.8327 20.913V31.087C36.8327 31.7089 37.5111 32.093 38.0443 31.773L47.3087 26.2144C47.4706 26.1173 47.4706 25.8827 47.3087 25.7856Z"
                    fill={currentSlide === 0 || currentSlide === 2 || currentSlide === 3 ? "#FFFFFF" : "#FFFFFF"} 
                />
            </svg>
        </div>
    </div>
</div>

                </div>

                <div className={`container ${styles.SliderDiv3}`}>
                    <div className={`container ${styles.brunoDecription4}`}>
                        <h1>Studi Clinici</h1>
                        <p>Ingredienti naturali, risultati clinicamente testati
                        </p>
                    </div>
                    {/* Modal Start */}

                    {isModalOpen && (
                        <Modal show={isModalOpen}
                            onClose={handleCloseModal} >
                            <div className={styles.mainModalDiv}>
                                <div className={styles.modalImg}>
                                    <div className={styles.modalContentData}>
                                        <div className={styles.brunoImgModal}>
                                            <img src={modalImage2} alt='' />
                                        </div>
                                        <div className={styles.modaltitle}>
                                            <h6>{modalTitle2}</h6>
                                            <p>{modalsubTitle2}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.modalContent}>
                {" "}
                {shopifyP ? (
                  <PurchaseBox
                    data={{
                      EXTERNALID,
                      STOREFRONTID,
                      SLUG,
                      price: shopifyP?.variants?.edges?.length
                        ? parseFloat(
                            shopifyP?.variants.edges[0].node?.price?.amount
                          )
                        : 0,
                      theme,
                      priceBox,
                      freq: rechargeProduct?.subscription_preferences,
                    }}
                    variantId={shopifyP?.variants.edges[0].node?.id}
                  />
                ) : (
                  ""
                )}
              </div>
                            </div>
                        </Modal>
                    )}
                    {/*..... Modal End .....*/}
                    <div className={styles.main_div}>
                        <Slider ref={c => (slider2 = c)}{...settings} afterChange={afterChangeHandler}>


                            <div className={`container ${styles.slider3data}`}>
                                <div className={styles.sliderContent}>
                                    {/* <h6>For Healthy Skin, Hair & Bones</h6> */}
                                    <div className={styles.forscrollbar} id="scrollableContainer" style={{ overflowY: 'scroll', }}>
                                        <p className={styles.Pcontent}><b >Bruno MD Royal Collagen Peptides</b> are clinically proven to help produce new collagen at any age by stimulating your body’s own endogenous collagen production.Unlike standard collagen peptides, Bruno MD® uses patented technology to precisely cut collagen peptides that specifically target cartilage growth, firmer skin, and stronger bones.</p>
                                        <hr className={styles.blackHr} />
                                        <p className={styles.Pcontent} id="page-2" >
                                            <b className={selectedKeyword === 'Natural' ? styles.highlightedHeading : ''}>Natural Vitamin C </b>
                                            Clinical studies prove that skin health is significantly improved when Royal Collagen Peptides are combined with natural vitamin C. Vitamin C is crucial for the formation (biosynthesis) of collagen.</p>
                                        <hr className={styles.blackHr} />
                                        <p className={styles.Pcontent} id="page-1">
                                            <b className={selectedKeyword === 'Royal Collagen' ? styles.highlightedHeading : ''}>Royal Collagen Peptides </b>
                                            increase collagen levels throughout the body by stimulating new collagen production at any age to restore cartilage, increase bone density, and strengthen bones</p>
                                        <hr className={styles.blackHr} />
                                        <p className={styles.Pcontent} id="page-3">
                                            <b className={selectedKeyword === 'Red Orange' ? styles.highlightedHeading : ''}>Red Orange Complex </b>
                                            maximizes collagen formation and strengthens immunity with 400% of the daily recommended value of Vitamin C. Dense flavonoids, anthocyanins, and phenolic compounds help prevent collagen degradation.</p>
                                        <hr className={styles.blackHr} />
                                        <p className={styles.Pcontent} id="page-4">
                                            <b className={selectedKeyword === 'Bovine' ? styles.highlightedHeading : ''}>Bovine Source collagen </b>
                                            from free-range EU-certified sources is organic, non-GMO, halal, and kosher-certified, raised exclusively on a plant-based diet also provides the full bouquet of 18 essential and non-essential amino acids.</p>
                                    </div>
                                </div>
                                <div className={styles.slider2Details}>
                                    <div className={styles.sliderContentIMG}>
                                        <img src='/images/BrunoPharmaSlider.webp' alt='' />
                                    </div>
                                    <div className={styles.sliderContent3}>
                                        <div>
                                            <h3>Royal Collagen Peptides</h3>
                                            <h5>The Science of Beauty</h5>
                                        </div>
                                        <div className={styles.forRound}>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('Royal Collagen', 'page-1', "scrollableContainer")}>Royal Collagen Peptides</p>
                                            </div>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('Natural', 'page-2', "scrollableContainer")} >Natural Vitamin C </p>
                                            </div>
                                            <div className={styles.round} >
                                                <p onMouseEnter={() => handleMouseEnter('Red Orange', 'page-3', "scrollableContainer")} >Red Orange</p>
                                            </div>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('Bovine', 'page-4', "scrollableContainer")}>Bovine Source collagen</p>
                                            </div>
                                        </div>
                                        <hr className={styles.blackHr2} />
                                        <div className={styles.btnDivBuy}>
                                            <div className={styles.roundBtn}><p onClick={() => handleShow('/images/modalImgBrunoMd (1).webp', 'Royal Collagen Peptides', 'The Science of Beauty',"tendoactive-plus-20-stick")}>Buy Now</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.slider3data}>
                                <div className={styles.sliderContent}>
                                    <h6>For Healthy Cholesterol levels</h6>
                                    <div className={styles.forscrollbar} id="scrollableContainer-2" style={{ overflowY: 'scroll', }}>
                                        <p className={styles.Pcontent}><b >Heart disease</b> is one of the leading causes of death globally, so keeping cholesterol levels in check is crucial for preventing these serious health issues.
                                            The clinically proven, natural ingredients in CholestQ10® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.
                                        </p>
                                        <hr className={styles.blackHr} />
                                        <p className={styles.Pcontent} id="page-5">
                                            <b className={selectedKeyword === 'Coenzyme' ? styles.highlightedHeading2 : ''}>Coenzyme Q10 </b>
                                            Phytosome® promotes healthy aging, heart & cardiovascular health, brain health, and all activities involving energetic expenditure.</p>
                                        <hr className={styles.blackHr} />
                                        <p className={styles.Pcontent}><b>Cardoon</b> contains active biophenols and flavonoids from an endemic variety of Cardoon leaf, inhibiting the creation of fatty lipids in the liver.</p>
                                        <hr className={styles.blackHr} />
                                        <p className={styles.Pcontent} id="page-6">
                                            <b className={selectedKeyword === 'E-d-alpha-tocopheryl' ? styles.highlightedHeading2 : ''}>Natural Vitamin (E-d-alpha-tocopheryl succinate) </b>
                                            shields proteins, LDL cholesterol, and mitochondrial DNA against oxidative damage and reduces lipid peroxidation levels — the pivotal reaction in the cause of atherosclerosis.</p>
                                        <hr className={styles.blackHr} />
                                        <p className={styles.Pcontent} id="page-7">
                                            <b className={selectedKeyword === 'Bergamot Orange' ? styles.highlightedHeading2 : ''}>Bergamot Orange Extract Phytosome® </b>
                                            supports healthy cholesterol levels and governs the metabolic conditions that increase the risk of heart disease and TYPE II diabetes.</p>
                                        <p className={styles.Pcontent} id="page-8">
                                            <b className={selectedKeyword === 'Curcumin Phytosome' ? styles.highlightedHeading2 : ''}>Curcumin Phytosome® (Turmeric Extract) </b>
                                            supports healthy blood vessel function and guards against chronic inflammation.</p>
                                    </div>

                                </div>
                                <div className={styles.slider2Details}>
                                    <div className={styles.sliderContentIMG}>
                                        <img src='/images/BrunoPharmaSlider2.webp' alt='' />
                                    </div>
                                    <div className={styles.sliderContent3}>
                                        <div>
                                            <h3>CholestQ10</h3>
                                            <h5>The Science of Heart Health</h5>
                                        </div>
                                        <div className={styles.forRound}>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('Coenzyme', 'page-5', 'scrollableContainer-2')}>Coenzyme</p></div>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('E-d-alpha-tocopheryl', 'page-6', 'scrollableContainer-2')}>D-alpha-tocopheryl succinate</p></div>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('Bergamot Orange', 'page-7', 'scrollableContainer-2')}>Bergamot Orange Extract Phytosome®</p></div>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('Curcumin Phytosome', 'page-8', 'scrollableContainer-2')}>Curcumin Phytosome®</p></div>
                                        </div>
                                        <hr className={styles.blackHr2} />
                                        <div className={styles.btnDivBuy}>
                                            <div className={styles.roundBtn} ><p onClick={() => handleShow('/images/modalImgBrunoMd2.webp', 'CholestQ10 60 v-caps', 'The Science of Heart Health',"cholestq10-60-v-caps-30-servings")}>Buy Now</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.slider3data}>
                                <div className={styles.sliderContent}>
                                    <h6>For a Healthy Inflammatory Response</h6>
                                    <div className={styles.forscrollbar} id="scrollableContainer-3" style={{ overflowY: 'scroll', }}>
                                        <p className={styles.Pcontent}><b>For a healthy inflammatory response</b> Inflammation is a leading cause of disease. Like high blood pressure, inflammation is a silent killer. Unlike high blood pressure, inflammation is often best managed without pharmacological intervention. Nature is the best medicine to put inflammation in check.The clinically proven, natural ingredients in Riboflam® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.</p>
                                        <hr className={styles.blackHr} />
                                        <p className={styles.Pcontent} id="page-9">
                                            <b className={selectedKeyword === 'Natural Astaxanthin' ? styles.highlightedHeading3 : ''}>Natural Astaxanthin Extract </b>
                                            is harvested from algae and is proven to be the most potent antioxidant in nature. Astaxanthin’s superpower is reducing inflammation system-wide, which helps balance immune response and support brain and heart health.  </p>
                                        <hr className={styles.blackHr} />
                                        <p className={styles.Pcontent} id="page-10">
                                            <b className={selectedKeyword === 'Curcumin Phytosome' ? styles.highlightedHeading3 : ''}>Curcumin Phytosome</b> comes from turmeric, which has been used in Asian cooking and cures since ancient times. It supports a healthy inflammation and immune response. Bruno MD’s Curcumin Phytosome is the #1 recommended formulation by the prestigious Cleveland Clinic.</p>
                                        <hr className={styles.blackHr} />
                                        <p className={styles.Pcontent} id="page-12">
                                            <b className={selectedKeyword === 'Boswellia Serra' ? styles.highlightedHeading3 : ''}>Boswellia Serra Phytosome, </b>
                                            commonly known as Indian Frankincense, and Echinacea Angustifolia Phytosome are both proven to create a balanced inflammation response. Native Americans have used Echinacea as an anti-inflammatory for centuries.</p>
                                        <hr className={styles.blackHr} />
                                        <p className={styles.Pcontent} id="page-13">
                                            <b className={selectedKeyword === 'Nucleoflam' ? styles.highlightedHeading3 : ''}>Nucleoflam Proprietary Nucleotides</b>
                                            <b> & </b>
                                            <b className={selectedKeyword === 'Nucleosides' ? styles.highlightedHeading3 : ''}>Nucleosides Yeast Extract Complex</b> are involved in the development and functioning of immune cells and contribute to the growth and repair of the intestinal lining, which can help with intestinal inflammation.
                                        </p>
                                        <p className={styles.Pcontent} id="page-11">
                                            <b className={selectedKeyword === 'Quercetin Phytosome' ? styles.highlightedHeading3 : ''}>Quercetin Phytosome</b> blocks inflammatory enzymes and the creation of cytokines and, like Astaxanthin, is a potent antioxidant, but you’ll need to eat 100 kilos of broccoli each day to get enough. Riboflam delivers 2000% more quercitin than standard supplements.
                                        </p>
                                    </div>

                                </div>
                                <div className={styles.slider2Details}>
                                    <div className={styles.sliderContentIMG}>
                                        <img src='/images/BrunoPharmaSlider3.webp' alt='' />
                                    </div>
                                    <div className={styles.sliderContent3}>
                                        <div>
                                            <h3>Riboflam </h3>
                                            <h5>The Science of Longevity</h5>
                                        </div>
                                        <div className={styles.forRound}>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('Natural Astaxanthin', 'page-9', 'scrollableContainer-3')}>Natural Astaxanthin Extract</p></div>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('Curcumin Phytosome', 'page-10', 'scrollableContainer-3')}>Curcumin Phytosome</p></div>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('Quercetin Phytosome', 'page-11', 'scrollableContainer-3')}>Quercetin Phytosome</p></div>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('Boswellia Serra', 'page-12', 'scrollableContainer-3')}>Boswellia Serra Phytosome</p></div>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('Nucleoflam', 'page-13', 'scrollableContainer-3')}>Nucleoflam Proprietary Nucleotides</p></div>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('Nucleosides', 'page-13', 'scrollableContainer-3')}>Nucleosides Yeast Extract Complex</p></div>
                                        </div>
                                        <hr className={styles.blackHr2} />
                                        <div className={styles.btnDivBuy}>
                                            <div className={styles.roundBtn}><p onClick={() => handleShow('/images/modalImgBrunoMd3.webp', 'Riboflam 90 v-caps', 'The Science of Longevity', "riboflam-90-v-caps-30-servings")}>Buy Now</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.slider3data}>
                                <div className={styles.sliderContent}>
                                    <h6>For a Lifetime of 360º Vision Care</h6>
                                    <div className={styles.forscrollbar} id="scrollableContainer-4" style={{ overflowY: 'scroll', }}>
                                        <p className={styles.Pcontent}><b>Eye strain, Dry Eyes, Headaches & General Fatigue</b> are all signs of Computer Vision Syndrome. Ingredients in Bluerex Vision® are clinically proven to help alleviate symptoms of digital overexposure and protect your eyes from harmful blue light before it can damage the retina.The clinically proven, natural ingredients in Bluerex Vision® are delivered with Phytosome® Technology. Phytosome delivers usually hard-to-absorb ingredients into your bloodstream with up to 3000% more bioavailability.
                                        </p>
                                        <hr className={styles.blackHr} />
                                        <p className={styles.Pcontent} id="page-14">
                                            <b className={selectedKeyword === 'Astaxanthin' ? styles.highlightedHeading4 : ''}>Astaxanthin’s </b>
                                            potent anti-inflammatory properties alleviate oxidative stress in the front of the eye and help reduce eye fatigue and strain, common symptoms of computer vision syndrome.</p>
                                        <hr className={styles.blackHr} />
                                        <p className={styles.Pcontent} id="page-15">
                                            <b className={selectedKeyword === 'Lutein & Zeaxanthin' ? styles.highlightedHeading4 : ''}>Lutein & Zeaxanthin </b>
                                            increase the macular pigments that filter harmful blue light before it can damage your retina. They are also antioxidants that protect the eyes against free radicals, improving visual performance and reducing the progression of certain eye conditions as we age.</p>
                                        <hr className={styles.blackHr} />
                                        <p className={styles.Pcontent} id="page-16">
                                            <b className={selectedKeyword === 'D-Alpha' ? styles.highlightedHeading4 : ''}>D-Alpha Tocopheryl Succinate, </b>
                                            a natural form of Vitamin E, neutralizes oxidative damage and has been shown to reduce the risk of developing advanced age-related macular degeneration by 25% for subjects who have already demonstrated early signs of macular degeneration.</p>
                                        <hr className={styles.blackHr} />
                                        <p className={styles.Pcontent} id="page-17">
                                            <b className={selectedKeyword === 'Docosahexaenoic' ? styles.highlightedHeading4 : ''}>Docosahexaenoic acid (DHA), </b>
                                            naturally derived from Schizochytrium sp marine alga, is a polyunsaturated omega-3 fatty acid accounting for up to 93% of the omega-3 fats in the retina.</p>
                                        <hr className={styles.blackHr} />

                                        <p className={styles.Pcontent} id="page-18">
                                            <b className={selectedKeyword === 'Bilberry Extract' ? styles.highlightedHeading4 : ''}>Bilberry Extract </b>
                                            is packed with anthocyanins, which promote healthy tear secretion, improve vision, increase retinal sensitivity (night vision), and help prevent common eye issues as we mature</p>


                                    </div>
                                </div>
                                <div className={styles.slider2Details}>
                                    <div className={styles.sliderContentIMG}>
                                        <img src='/images/BrunoPharmaSlider4.webp' alt='' />
                                    </div>
                                    <div className={styles.sliderContent3}>
                                        <div>
                                            <h3>Bluerex </h3>
                                            <h5>The Science of Sight</h5>
                                        </div>
                                        <div className={styles.forRound}>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => { handleMouseEnter('Astaxanthin', 'page-14', 'scrollableContainer-4'); }}>Astaxanthin</p>
                                            </div>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('Lutein & Zeaxanthin', 'page-15', 'scrollableContainer-4')}>Lutein & Zeaxanthin</p></div>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('D-Alpha', 'page-16', 'scrollableContainer-4')}>D-Alpha Tocopheryl Succinate</p></div>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('Docosahexaenoic', 'page-17', 'scrollableContainer-4')}>Docosahexaenoic acid</p></div>
                                            <div className={styles.round}>
                                                <p onMouseEnter={() => handleMouseEnter('Bilberry Extract', 'page-18', 'scrollableContainer-4')}>Bilberry Extract </p></div>
                                        </div>
                                        <hr className={styles.blackHr2} />
                                        <div className={styles.btnDivBuy}>
                                            <div className={styles.roundBtn}><p onClick={() => handleShow('/images/modalImgBrunoMd4.webp', 'Bluerex Vision 60 softgels', 'The Science of Sight',"bluerex-vision-60-caps-30-servings")}>Buy Now</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>


                    <div className={styles.bothButton2Main2}>
                        <div className={styles.bothButton2Main2}>
                        <div className={styles.bothButton3}>
    <div
        className={styles.LeftBtn}
        style={{
            opacity: currentSlide === 0 ? 0.1 : 1,
            cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
            backgroundColor: currentSlide === totalSlides - 1 || currentSlide === 2 || currentSlide === 3 ? 'black' : 'transparent', 
        }}
        onClick={currentSlide === 0 ? null : goToPrev2}
    >
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                className={styles.svgIcon}
            >
                <path
                    d="M15.166 26L45.4994 26"
                    stroke={currentSlide === totalSlides - 1 || currentSlide === 2 || currentSlide === 3 ? "#FFFFFF" : "#FFFFFF"} 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M4.69127 26.2144L13.9557 31.773C14.4889 32.093 15.1673 31.7089 15.1673 31.087L15.1673 20.913C15.1673 20.2911 14.4889 19.907 13.9557 20.227L4.69127 25.7856C4.52944 25.8827 4.52944 26.1173 4.69127 26.2144Z"
                    fill={currentSlide === totalSlides - 1 || currentSlide === 2 || currentSlide === 3 ? "#FFFFFF" : "#FFFFFF"} 
                />
            </svg>
        </div>
    </div>
    <div
        className={styles.RightBtn}
        style={{
            opacity: currentSlide === totalSlides - 1 ? 0.1 : 1,
            cursor: currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer',
            backgroundColor: currentSlide === 0 || currentSlide === 2 || currentSlide === 3 ? 'black' : 'transparent',
        }}
        onClick={currentSlide === totalSlides - 1 ? null : goToNext2}
    >
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
            >
                <path
                    d="M36.834 26H6.50065"
                    stroke={currentSlide === 1 || currentSlide === 2 || currentSlide === 3 ? "#FFFFFF" : "#FFFFFF"} 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M47.3087 25.7856L38.0443 20.227C37.5111 19.907 36.8327 20.2911 36.8327 20.913V31.087C36.8327 31.7089 37.5111 32.093 38.0443 31.773L47.3087 26.2144C47.4706 26.1173 47.4706 25.8827 47.3087 25.7856Z"
                    fill={currentSlide === 0 || currentSlide === 2 || currentSlide === 3 ? "#FFFFFF" : "#FFFFFF"} 
                />
            </svg>
        </div>
    </div>
</div>











                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${styles.customPrevArrow}`} onClick={onClick}>
            Custom Left Button
        </div>
    );
};
const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${styles.customPrevArrow}`} onClick={onClick}>
            Custom Right Button
        </div>
    );
};
export default ScienceSlider2
