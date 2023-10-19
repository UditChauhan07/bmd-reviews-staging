import React, { useState } from 'react'
import styles from './styles.module.css'

const TimeLine = ({ data, layout }) => {
    if (!layout) layout = false
    let lengthOfSlider = data?.length
    let [count, setCount] = useState(0)
    let [isForward, setIsForward] = useState(true)
    let [right, setRight] = useState(0)

    const checkIndexIncrease = () => {
        if (count < lengthOfSlider) {
            setCount(++count)
            if (count === 0) {
                setRight(350 * 1)
            } else {
                setRight(350 * count)
            }
        }
        if (count === lengthOfSlider - 1) {
            setIsForward(false)
        }
    }

    const checkIndexDecrease = () => {
        if (count > 0) {
            setIsForward(true)
            setCount(--count)
            if (count === 0) {
                setRight(0)
            } else {
                setRight(right - 350)
            }
        }
    }
    if (!data) return null
    return (
        <section>
            {layout ? <div className={styles.TimeLineL1}>
                <div className={styles.TimeLineContainer}>
                    {data.map((year, key) => {
                        return (
                            <div className={styles.tlItem} key={key}>

                                <div className={styles.tlBg} style={{ backgroundImage: `url(${year.src})` }}></div>

                                <div className={styles.tlYear}>
                                    <p className={styles.tlTitle}>{year.title}</p>
                                </div>

                                <div className={styles.tlContent}>
                                    {year.subTitle && <h1>{year.subTitle}</h1>}
                                    <p>{year.Desc}</p>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div> :
                <div className={styles.TimeLineL2}>
                    <div className={styles.sliderContainer}>
                        <div style={{
                            transform: `translateX(${-right}px)`,
                            display: 'flex',
                            position: 'relative',
                            transition:
                                'transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)',
                        }}>
                            {data.map((year, key) => {
                                return (
                                    <div className={styles.sliderCard} key={key}>
                                        <div className={styles.sliderCardInner}>
                                            <img
                                                src={year.src}
                                                alt={year.alt}
                                                width={150}
                                            />
                                        </div>
                                        <div className="track"></div>
                                        {count === key ? (
                                            <div className="circleActive"></div>
                                        ) : (
                                            <div className="circleNotActive"></div>
                                        )}
                                        <div className={styles.sliderCardYear}>{year.subTitle ? year.subTitle : year.title}</div>
                                        <div className={styles.sliderCardMilestone}>
                                            <p>{year.Desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {count >= 1 ? (
                            <div className={styles.sliderButtonsContainer}>
                                <button className={styles.backButton} onClick={() => checkIndexDecrease()}>
                                    <img
                                        src="//cdn.shopify.com/s/files/1/0021/0573/7291/t/172/assets/arrow.svg?v=11483351805239704592"
                                        alt="Arrow next"
                                        width={9}
                                        height={15}
                                    />
                                </button>
                                {isForward ? (
                                    <button onClick={() => checkIndexIncrease()} id="ForwardButton">
                                        <img
                                            src="//cdn.shopify.com/s/files/1/0021/0573/7291/t/172/assets/arrow.svg?v=11483351805239704592"
                                            alt="Arrow next"
                                            width={9}
                                            height={15}
                                        />
                                    </button>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        ) : (
                            <div className={styles.sliderButtonsContainer}>
                                <button onClick={() => checkIndexIncrease()}>
                                    <img
                                        src="//cdn.shopify.com/s/files/1/0021/0573/7291/t/172/assets/arrow.svg?v=11483351805239704592"
                                        alt="Arrow next"
                                        width={9}
                                        height={15}
                                    />
                                </button>
                            </div>
                        )}
                        <style jsx="true">{`
                    .circleNotActive {
                      border: 1px solid #979797;
                      background: #fff;
                      width: 15px;
                      height: 15px;
                      border-radius: 100%;
                      position: relative;
                      transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
                      transition-delay: 0.25s;
                    }
                    .track {
                      width: 100%;
                      height: 1px;
                      background: #979797;
                      position: absolute;
                      left: 0;
                      margin-top: 8px;
                    }
                    .circleActive {
                      border: 1px solid #979797;
                      background: #56008c;
                      border-color: #56008c;
                      width: 15px;
                      height: 15px;
                      border-radius: 100%;
                      position: relative;
                      transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
                      transition-delay: 0.25s;
                    }
                  `}</style>
                    </div>
                </div>
            }
        </section>
    )
}

export default TimeLine