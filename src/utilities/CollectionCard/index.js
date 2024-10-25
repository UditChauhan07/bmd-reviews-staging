import React,{useRef,useEffect} from 'react';
import styles from './styles.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import StarRatings from '../StarRatings';




export const CollectionList = ({ content,param=null }) => {

    gsap.registerPlugin(ScrollTrigger);
    const elementRef = useRef(null);
    const h1Ref = useRef(null);
    const q = gsap.utils.selector(elementRef);
     console.log("pppp",param);

     function sqlLike(pattern, str) {
        // Escape special regex characters except for % and _
        const escapedPattern = pattern.replace(/([.+?^${}()|[\]\\])/g, '\\$1');
        
        // Convert SQL wildcards to RegExp wildcards
        const regexPattern = escapedPattern
            .replace(/%/g, '.*') // '%' -> '.*' (matches any sequence of characters)
            .replace(/_/g, '.');  
        const regex = new RegExp(`^${regexPattern}$`, 'i'); 
        
        return regex.test(str); 
    }
     
    useEffect(() => {
        var timeline = gsap.timeline({
            scrollTrigger: {
                trigger: elementRef.current,
                start: "top 60%",
            },});
            timeline.set(q('a'), { alpha:0, y:10 });
            timeline.fromTo(h1Ref.current,{y:-10,alpha:0},{alpha:1,y:0,duration:1})
            timeline.to(q('a'), { y: 0 , alpha:1, duration:.5, stagger: 0.05 },0);
        }, []);
        if(!content || !content.length) return null
        console.log(content,"cccc")
    return (
        <div ref={elementRef} className={styles.collectionContainer} style={content.length != 1 ? {  gridTemplateColumns: 'repeat(auto-fill, 280px)',gridTemplateRows: 'repeat(auto-fill, 450px)'}:{}}>
      {content.map((e, i) => {
                // Param ko descriptionHtml se match kar rahe hain
                console.log("hmamamam", sqlLike('%' + param + '%', e.description));
                console.log("hmamamamww", e.description);
                const matchesDescription = param != null && sqlLike('%' + param + '%', e.description);
                const matchesTitle = param != null && sqlLike('%' + param + '%', e.title);
                if ((matchesDescription || matchesTitle) || param == null) {
                    console.log("e3223");

                    if (!e?.hide) {
                        return (
                            <a href={e.link ? e.link + e?.SLUG : '#'} key={i}>
                                <div className={styles.collectionCard}>
                                    <div className={styles.imageWrapper}>
                                        <img
                                            src={e.logo.src}
                                            alt={e.logo.alt}
                                            className={styles.productImage}
                                            width="200"
                                        />
                                    </div>
                                    <p className={styles.productText}>{e.title}</p>
                                    <StarRatings variantId={e.EXTERNALID} />
                                    <button className={styles.buyNowButton}>{e.btnText}</button>
                                </div>
                            </a>
                        );
                    }
                } else {
                    if (param == null) {
                        if (!e?.hide) {
                            return (
                                <a href={e.link ? e.link + e?.SLUG : '#'} key={i}>
                                    <div className={styles.collectionCard}>
                                        <div className={styles.imageWrapper}>
                                            <img
                                                src={e.logo.src}
                                                alt={e.logo.alt}
                                                className={styles.productImage}
                                                width="200"
                                            />
                                        </div>
                                        <p className={styles.productText}>{e.title}</p>
                                        <StarRatings variantId={e.EXTERNALID} />
                                        <button className={styles.buyNowButton}>{e.btnText}</button>
                                    </div>
                                </a>
                            );
                        }
                    }
                }
            })}
        </div>
    )
}
