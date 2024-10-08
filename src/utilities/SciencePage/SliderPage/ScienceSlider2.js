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
    const [modalImage2, setModalImage2] = useState('/images/02-BMD-Tendoactive_Plus-9O3A3003-v2.webp');
    const [modalTitle2, setModalTitle2] = useState('');
    // const [modalsubTitle2, setModalsubTitle2] = useState('');
    //modal2 tooltip


    const tooltipData = [
        {
            id: 1, author: "Prabhavathi K", text: "Prabhavathi K, et al. Indian J Pharmacol. 2014 Sep-Oct;46(5):475-9",
            modalHeading: "A randomized, double blind, placebo controlled, cross over study to evaluate the analgesic activity of Boswellia serrata in healthy volunteers using mechanical pain model",
            Abstract: "Abstract",
            Objective: "Experimental pain models in human healthy volunteers are advantageous for early evaluation of analgesics. All efforts to develop nonsteroidal anti-inflammatory drugs (NSAIDs) which are devoid of gastrointestinal and cardiovascular system effects are still far from achieving a breakthrough. Hence we evaluated the analgesic activity of an ayurvedic drug, Boswellia serrata by using validated human pain models which has shown its analgesic activity both in-vitro and preclinical studies to evaluate the analgesic activity of single oral dose (125 mg, 2 capsules) of Boswellia serrata compared to placebo using mechanical pain model in healthy human subjects.",
            Materials: "After taking written informed consent, twelve healthy subjects were randomized (1:1) to receive single oral dose of Boswellia serrata (Shallaki (®)) 125 mg, 2 capsules or identical placebo in a crossover design. Mechanical pain was assessed using Ugo basile analgesymeter (by Randall Selitto test) at baseline and at 1 hr, 2 hrs and 3 hrs after test drug administration. Pain Threshold force and time and Pain Tolerance force and time were evaluated. Statistical analysis was done by paired t-test.",
            Result: "Twelve healthy volunteers have completed the study. Mean percentage change from baseline in Pain Threshold force and time with Boswellia serrata when compared to placebo had significantly increased [Force: 9.7 ± 11.0 vs 2.9 ± 3.4 (P = 0.05) and time: 9.7 ± 10.7 vs 2.8 ± 3.4 (P = 0.04)] at third hr. Mean Percentage change from baseline in Pain Tolerance force and time with Boswellia serrata when compared to placebo had significantly (P ≤ 0.01) increased at 1 hr, 2 hrs and 3 hrs.",
            Conclusion: "In the present study, Boswellia serrata significantly increased the Pain Threshold and Pain Tolerance force and time compared to placebo. Both study medications were well tolerated. Further multiple dose studies may be needed to establish the analgesic efficacy of the drug.",
        },

        {
            id: 2, author: "Riva A", text: "Riva A, et al. Eur Rev Med Pharmacol Sci. 2017 Nov;21(22):5258-5263.",
            modalHeading: "A novel boswellic acids delivery form (Casperome®) in the management of musculoskeletal disorders: a review",
            Abstract: "Abstract",
            deccription: 'Standard pharmacological treatment of musculoskeletal conditions is often associated with relevant side effects. Botanical preparations endowed with a good tolerability profile, therefore, could have a role in the management of these disorders. Among different natural products, Boswellia serrata extracts have long been used for the treatment of musculoskeletal disorders, given their marked anti-inflammatory activity and their ability to promote tissue regeneration. However, standard preparations of Boswellia serrata show overall modest pharmacokinetic properties, a limitation which may ultimately lead to reduced efficacy. In an effort to improve the pharmacokinetic properties, Casperome®, a lecithin-based formulation of Boswellia serrata extract representing the whole natural bouquet, has been developed. This formulation was effective in the treatment of Achilles tendonitis, epicondylitis, radiculopathies, ankle sprains and sport injuries as shown in several clinical studies, the majority of which with a randomized design and all evaluating a number of well-recognized parameters of efficacy for the therapy of musculoskeletal disorder. All studies were consistent in showing a prompt decrease of pain and improvement of functionality of the affected area after supplementation with Casperome®, without any relevant adverse effect. Remarkably, these symptomatic improvements were paralleled by reduced plasmatic levels of inflammatory markers and by a diminished need for rescue analgesics. On these bases, Casperome® may have a role in the treatment of musculoskeletal disorders. Clinical studies in other similar conditions (e.g., osteoarthritis) appear warranted to further investigate the efficacy of this botanical product in more specific settings.',

        },
        {
            id: 3, author: "Arbiser JL", text: "Arbiser JL, et al. Mol Med. 1998 Jun;4(6):376-83",
            modalHeading: 'Curcumin is an in vivo inhibitor of angiogenesis',
            Abstract: "Abstract",
            Background: "Curcumin is a small-molecular-weight compound that is isolated from the commonly used spice turmeric. In animal models, curcumin and its derivatives have been shown to inhibit the progression of chemically induced colon and skin cancers. The genetic changes in carcinogenesis in these organs involve different genes, but curcumin is effective in preventing carcinogenesis in both organs. A possible explanation for this finding is that curcumin may inhibit angiogenesis.",
            Materials: 'Curcumin was tested for its ability to inhibit the proliferation of primary endothelial cells in the presence and absence of basic fibroblast growth factor (bFGF), as well as its ability to inhibit proliferation of an immortalized endothelial cell line. Curcumin and its derivatives were subsequently tested for their ability to inhibit bFGF-induced corneal neovascularization in the mouse cornea. Finally, curcumin was tested for its ability to inhibit phorbol ester-stimulated vascular endothelial growth factor (VEGF) mRNA production.',
            Result: 'Curcumin effectively inhibited endothelial cell proliferation in a dose-dependent manner. Curcumin and its derivatives demonstrated significant inhibition of bFGF-mediated corneal neovascularization in the mouse. Curcumin had no effect on phorbol ester-stimulated VEGF production.',
            Conclusion: 'These results indicate that curcumin has direct antiangiogenic activity in vitro and in vivo. The activity of curcumin in inhibiting carcinogenesis in diverse organs such as the skin and colon may be mediated in part through angiogenesis inhibition.'
        },
        {
            id: 4, author: "Buhrmann C", text: "Buhrmann C, et al. J Biol Chem. 2011 Aug 12;286(32):28556-66.",
            modalHeading: 'Curcumin modulates nuclear factor kappaB (NF-kappaB)-mediated inflammation in human tenocytes in vitro: role of the phosphatidylinositol 3-kinase/Akt pathway',
            Abstract: "Abstract",
            deccription: 'Inflammatory processes play essential roles in the pathogenesis of tendinitis and tendinopathy. These events are accompanied by catabolic processes initiated by pro-inflammatory cytokines such as interleukin-1β (IL-1β) and tumor necrosis factor-α (TNF-α). Pharmacological treatments for tendinitis are restricted to the use of non-steroidal anti-inflammatory drugs. Recent studies in various cell models have demonstrated that curcumin targets the NF-κB signaling pathway. However, its potential for the treatment of tendinitis has not been explored. Herein, we used an in vitro model of human tenocytes to study the mechanism of curcumin action on IL-1β-mediated inflammatory signaling. Curcumin at concentrations of 5-20 μm inhibited IL-1β-induced inflammation and apoptosis in cultures of human tenocytes. The anti-inflammatory effects of curcumin included down-regulation of gene products that mediate matrix degradation (matrix metalloproteinase-1, -9, and -13), prostanoid production (cyclooxygenase-2), apoptosis (Bax and activated caspase-3), and stimulation of cell survival (Bcl-2), all known to be regulated by NF-κB. Furthermore, curcumin suppressed IL-1β-induced NF-κB activation via inhibition of phosphorylation and degradation of inhibitor of κBα, inhibition of inhibitor of κB-kinase activity, and inhibition of nuclear translocation of NF-κB. Furthermore, the effects of IL-1β were abrogated by wortmannin, suggesting a role for the phosphatidylinositol 3-kinase (PI-3K) pathway in IL-1β signaling. Curcumin suppressed IL-1β-induced PI-3K p85/Akt activation and its association with IKK. These results demonstrate, for the first time, a potential role for curcumin in treating tendon inflammation through modulation of NF-κB signaling, which involves PI-3K/Akt and the tendon-specific transcription factor scleraxis in tenocytes.'

        },
        {
            id: 5, author: "de Mos M", text: "de Mos M, et al.,. Am J Sports Med. 2007 Sep;35(9):1549-56",
            modalHeading: "Achilles tendinosis: changes in biochemical composition and collagen turnover rate",
            Abstract: "Abstract",
            Background: "Understanding biochemical and structural changes of the extracellular matrix in Achilles tendinosis might be important for developing mechanism-based therapies.",
            Hypothesis: "In Achilles tendinosis, changes occur in biochemical composition and collagen turnover rate.",
            StudyDesign: "Descriptive laboratory study.",
            Methods: "From 10 patients undergoing surgery for Achilles tendinopathy, 1 tendinosis biopsy specimen and 1 biopsy specimen of macroscopically healthy tendon tissue adjacent to the lesion were collected. Furthermore, biopsy samples were collected from 3 donors with asymptomatic Achilles tendons. Water content, collagen content, percentage of denatured collagen, amount of lysine hydroxylation, number of enzymatic and nonenzymatic crosslinks, matrix metalloproteinase activity, and matrix metalloproteinase and collagen gene-expression levels were analyzed.",
            Result: "In tendinotic lesions, the water content was highest, and collagen content was subnormal with higher amounts of denatured/damaged collagen. Low pentosidine levels in tendinotic tissue indicated the presence of relatively young collagenous matrix. More hydroxylated lysine residues were present in tendinotic samples, but enzymatic crosslinks revealed no differences between tendinotic, adjacent, and healthy samples. In tendinotic specimens, matrix metalloproteinase activity was higher, matrix metalloproteinase gene-expression profile was altered, and collagen type I and III gene expression were upregulated.",
            Conclusion: "In Achilles tendinosis, the collagen turnover rate is increased, and the natural biochemical composition of the collagenous matrix is compromised.",
            Clinical: "Although tendon tissue directly adjacent to an Achilles tendinosis lesion looks macroscopically healthy, histological and biochemical degenerative changes in adjacent tissue are evident, which may have implications for surgical interventions."
        },
        {
            id: 6, author: "Vieira CP", text: "Vieira CP et al., Connect Tissue Res. 2012;53(2):160-8.",
            modalHeading: "Effects of acute inflammation induced in the rat paw on the deep digital flexor tendon",
            Abstract: "Abstract",
            deccription: "The tendon is commonly affected by inflammation, and in such situations, the tissue undergoes a process of reorganization of the extracellular matrix to improve and regenerate the affected region. Little is known about the mechanisms that trigger inflammation in the tissues surrounding the affected area. The objective of this study was to biochemically and morphologically analyze the deep digital flexor tendon at the peak of acute inflammation in the rat paw. Wistar rats were divided into the following three groups: those that received injection of 1% carrageenan, those that received 0.9% NaCl, and those that received nothing. The deep digital flexor tendon was divided into the distal, proximal, and intermediate regions. For biochemical analysis, the tendons were treated with guanidine hydrochloride and analyzed by sodium dodecyl sulfate-polyacrilamide gel electrophoresis. Proteins, glycosaminoglycans (GAGs), and hydroxyproline were quantified, and metalloproteinases were analyzed. The GAGs were analyzed by agarose gel electrophoresis. Tissue sections were stained with hematoxylin-eosin, toluidine blue, and Ponceau SS. The content of proteins and GAGs was smaller in the group receiving the application of carrageenan. The concentration of hydroxyproline in the two tendon regions that respond to tension forces was higher in the inflammation group. The metalloproteinase-9 was detected in the distal region, and a thicker epitenon with cellular infiltrate was observed in the groups with inflamed paws. Meanwhile, a better organization of collagen bundles was observed in the two tension regions of that same group. Our results show that although the tendon was not directly inflamed, changes in the surrounding structural and biochemical parameters were observed."
        },
        {
            id: 7, author: "Fusini F", text: "Fusini F. et al. Muscles Ligaments Tendons J. 2016 May 19;6(1):48-57",
            modalHeading: "Nutraceutical supplement in the management of tendinopathies: a systematic review",
            Background: "nutraceuticals are common support therapy for management of tendinopathies. Even if they are widely diffused, our knowledge is still poor. The aim of this systematic review is to analyze the most commonly used nutraceuticals and their effects on tendons.",
            Methods: "glucosamine and chondroitin sulphate, vitamin C, hydrolazed type 1 collagen, arginine alpha-keto-glutarate, bromelain, curcumin, boswellic acid, and methil-sulfonil-methane were considered. During the last week of Dicember 2015 a comprehensive research of main databases for each substance was made in relation with tendinopathy. Repeated articles, articles not in English nor in Italian, not common nutraceuticals, and articles not related with tendons or tenocytes were excluded. Clinical article quality was assessed independently by two reviewers using the modified Coleman methodology score.",
            Result: " preclinical and clinical data from 46 articles from all databases were analyzed. All these nutraceuticals demonstrated several effects on normal and pathological tendons. Preclinical and clinical studies showed a possible role on collagen synthesis, inflammation, mechanical properties, and maturation of collagen bundles, antioxidant effect, edema, and analgesia. The majority clinical studies had some methodological limitations with an average Modified Coleman Methodology Score of 51.3 points and SD of 20.5 points. In particular, there were very low values in power, error, outcome assessment, and clinical effect.",
            Conclusion: " preclinical results are very encouraging, however they are not fully confirmed by clinical studies. There are few clinical papers on the use of nutraceuticals in tendon disorders, and their methodological quality is poor. Furthermore, in most of the studies more than one supplement was administered at the same time. This may bias the results, and the effect of each single component cannot be determined. Furthermore, the interactions between nutraceuticals and drugs, or other dietary supplements (especially at high doses) has not been evaluated, neither their effects on chronic diseases. For these reasons, it is not possible to draw any definitive raccomendations on the use of nutraceutical supplementation in tendinopathies."
        },
        {
            id: 8, author: "Milewska M", text: "Milewska Met al., Stem Cells Int. 2020;2020:9123281. Published 2020 Feb 20.",
            modalHeading: "Mixed chimerism and transplantation tolerance induced by a nonlethal preparative regimen in cynomolgus monkeys",

        }
    ];
    const [modalContent, setModalContent] = useState()
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const handleTooltipModalShow = (id) => {
        const content = tooltipData.find((item) => item.id === id);
        console.log(content, "Selected Tooltip Data");

        if (content) {
            setModalContent(content);
            setIsModalOpen2(true);
        } else {
            console.error('Content not found for the given id');
        }
    };

    const handleCloseModal2 = () => {
        setIsModalOpen2(false);
        setModalContent(null);
    };


    //..... MouseEnter Function Start ....//
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(4);


    const handleMouseEnter = (keyword, elementId, containerId) => {
        setSelectedKeyword(keyword);
        const element = document.getElementById(elementId);
        const container = document.getElementById(containerId);
        if (element && container) {
            container.scrollTop = element.offsetTop - container.offsetTop;
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
        console.log("sss", slug);
        let product = ProductsData[slug];
        console.log("sss1", product);
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
    const handleShow = (imageSrc2, title2, product) => {
        setModalImage2(imageSrc2);
        setModalTitle2(title2);
        getProductData(product)
        setIsModalOpen(true)
    }



    return (
        <div>
            <div className={styles.nextCarousel}>


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
                                            <p>{""}</p>
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

                        <div className={`container ${styles.slider3data}`}>
                            <div className={styles.sliderContent}>
                                {/* <h6>For Healthy Skin, Hair & Bones</h6> */}
                                <div className={styles.forscrollbar} id="scrollableContainer" style={{ overflowY: 'scroll', }}>
                                    <p className={styles.Pcontent} id="page-1" >
                                        <b className={selectedKeyword === 'Boswellia' ? styles.highlightedHeading : ''}>Boswellia Serrata </b><br /> Aumenta significativamente la percentuale di riduzione del dolore rispetto al placebo. <a href='https://pubmed.ncbi.nlm.nih.gov/25298573/' target="_blank"><br />Prabhavathi K, et al. Indian J Pharmacol. 2014 Sep-Oct;46(5):475-9 <br /></a> Gli studi dimostrano che gli utenti possono percorrere distanze più lunghe senza dolore rispetto al trattamento standard<br /> <a href='https://pubmed.ncbi.nlm.nih.gov/29228442/' target="_blank">Riva A, et al. Eur Rev Med Pharmacol Sci. 2017 Nov;21(22):5258-5263.</a></p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-2" >
                                        <b className={selectedKeyword === 'Curcumin' ? styles.highlightedHeading : ''}>Curcumin </b><br />
                                        La curcumina ha attività angiogenica diretta in vivo e in vitro.<br /><a href='https://pubmed.ncbi.nlm.nih.gov/10780880' target="_blank" >Arbiser JL, et al. Mol Med. 1998 Jun;4(6):376-83 </a> <p>La curcumina riduce l&#39;espressione dei geni regolati da NF-κB, che a sua volta è coinvolto nei processi di apoptosi, degradazione della matrice e infiammazione nei tenociti umani in vitro.<br /><a href='https://pubmed.ncbi.nlm.nih.gov/21669872//' target="_blank">Buhrmann C, et al. J     Biol Chem. 2011 Aug 12;286(32):28556-66. </a></p> </p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-3">
                                        <b className={selectedKeyword === 'Arbiser JL,' ? styles.highlightedHeading : ''}>L-lysine </b><br />
                                        La curcumina riduce l&#39;espressione dei geni regolati da NF-κB, che a sua volta è coinvolto nei processi di apoptosi, degradazione della matrice e infiammazione nei tenociti umani in vitro. Nella tendinopatia, sono presenti residui di lisina idrossilata derivanti dalla degradazione di questo amminoacido. <br /><a href='https://pubmed.ncbi.nlm.nih.gov/17478653/' target="_blank">de Mos M, et al.,. Am J Sports Med. 2007 Sep;35(9):1549-56</a></p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-4">
                                        <b className={selectedKeyword === 'L-proline' ? styles.highlightedHeading : ''}>L-proline </b><br />
                                        Nella tendinopatia si riscontrano residui di prolina idrossilata derivanti dalla degradazione di questo amminoacido<br /> <a href='https://pubmed.ncbi.nlm.nih.gov/22141408/' target="_blank">Vieira CP et al., Connect Tissue Res. 2012;53(2):160-8. </a></p>
                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} id="page-5">
                                        <b className={selectedKeyword === 'L-arginine' ? styles.highlightedHeading : ''}>L-arginine </b><br />
                                        La L-arginina è un substrato dell&#39;enzima ossido nitrico sintasi (NOS), essenziale per il recupero dei tendini.<br /><a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4915461/' target="_blank">Fusini F. et al. Muscles Ligaments Tendons J. 2016 May 19;6(1):48-57</a></p>

                                    <hr className={styles.blackHr} />
                                    <p className={styles.Pcontent} >
                                        <b className={selectedKeyword === 'Copper' ? styles.highlightedHeading : ''}>Copper </b><br />
                                        Ottimizza il richiamo delle cellule stromali mesenchimali nella zona della lesione, dove possono rilasciare fattori di crescita, citochine e contrastare gli effetti dello stress ossidativo nell&apos; area infiammata. </p>

                                </div>
                            </div>

                            <div className={styles.slider2Details1}>
                                <div className={styles.sliderContentIMG1}>
                                    <img src='/images/02-BMD-Tendoactive_Plus-9O3A3003-v2.webp' alt='' />
                                </div>

                                <a>Buy Now</a>

                            </div>
                        </div>

                    </div>

                    {isModalOpen2 && modalContent && (
                        <Modal show={isModalOpen2} onClose={handleCloseModal2}>
                            <div className={styles.mainModalDiv}>
                                <div className={styles.modalToolTip}>
                                    {modalContent.modalHeading && <h1>{modalContent.modalHeading}</h1>}
                                    {modalContent.Abstract && <h2>{modalContent.Abstract}</h2>}
                                    {modalContent.deccription && <p>{modalContent.deccription}</p>}
                                    {modalContent.Objective && <p><b>Objective: </b>{modalContent.Objective}</p>}
                                    {modalContent.Background && <p><b>Background: </b>{modalContent.Background}</p>}
                                    {modalContent.Materials && <p><b>Materials and methods: </b>{modalContent.Materials}</p>}
                                    {modalContent.Hypothesis && <p><b>Hypothesis: </b>{modalContent.Hypothesis}</p>}
                                    {modalContent.StudyDesign && <p><b>Study design: </b>{modalContent.StudyDesign}</p>}
                                    {modalContent.Methods && <p><b>Methods: </b>{modalContent.Methods}</p>}
                                    {modalContent.Result && <p><b>Results: </b>{modalContent.Result}</p>}
                                    {modalContent.Conclusion && <p><b>Conclusion: </b>{modalContent.Conclusion}</p>}
                                    {modalContent.Clinical && <p><b>Clinical relevance: </b>{modalContent.Clinical}</p>}
                                </div>
                            </div>
                        </Modal>
                    )}

                </div>
            </div>
        </div>
    )
}

export default ScienceSlider2
