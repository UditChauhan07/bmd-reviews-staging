import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Blogs from "../Blog";

function LandingBlog({ data, theme, isLanding = null }) {
  return (
    <section id="ingredients" className={styles.ingredientsHolder}>
      <p className={styles.ExtraCod} >
        <span>Blog</span>
      </p>
      <div id="blogsection" className={styles.blog_section}>
        <div className={`${styles.reasonsContainerV2} ${styles.v2}`}>
          <h2 className={styles.reasonsHeader}>
            Blog: rimedi e consigli su
            <p style={{ color: theme }}>salute e benessere</p>
          </h2>
        </div>
        <div className={styles.v2Container}>
          
          <Blogs categories={data.details} isLanding={isLanding} />
        </div>
      </div>
    </section>
  );
}

export default LandingBlog;
