import React, { useRef, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import StarRatings from '../StarRatings';

export const CollectionList = ({ content, param = null }) => {
    gsap.registerPlugin(ScrollTrigger);
    const elementRef = useRef(null);
    const h1Ref = useRef(null);
    const q = gsap.utils.selector(elementRef);
    console.log("pppp", param);

    function sqlLike(pattern, str) {
        const escapedPattern = pattern.replace(/([.+?^${}()|[\]\\])/g, '\\$1');
        const regexPattern = escapedPattern
            .replace(/%/g, '.*')
            .replace(/_/g, '.');
        const regex = new RegExp(`^${regexPattern}$`, 'i');
        return regex.test(str);
    }

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: elementRef.current,
                start: "top 60%",
            },
        });
        timeline.set(q('a'), { alpha: 0, y: 10 });
        timeline.fromTo(h1Ref.current, { y: -10, alpha: 0 }, { alpha: 1, y: 0, duration: 1 });
        timeline.to(q('a'), { y: 0, alpha: 1, duration: 0.5, stagger: 0.05 }, 0);
    }, []);

    if (!content || !content.length) return null;

    // Determine matches outside of rendering
    const matchingItems = content.filter(e => {
        const matchesDescription = param != null && sqlLike('%' + param + '%', e.description);
        const matchesTitle = param != null && sqlLike('%' + param + '%', e.title);
        return (matchesDescription || matchesTitle) || param == null;
    });

    return (

        <div
            ref={elementRef}
            className={styles.collectionContainer}
            style={content.length !== 1 ? { gridTemplateColumns: 'repeat(auto-fill, 280px)', gridTemplateRows: 'repeat(auto-fill, 450px)' } : {}}
        >
            {matchingItems.length > 0 ? (
                matchingItems.map((e, i) => {
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
                    return null;
                })
            ) : (
                <div className={styles.notfound}>
                <h1 >Nessun prodotto trovato</h1>

                </div>
            )}
        </div>
    );
};
