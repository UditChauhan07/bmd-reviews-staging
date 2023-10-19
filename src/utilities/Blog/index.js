import React from 'react'
import styles from './styles.module.css'

const Blogs = ({ categories }) => {
  return (
    <div className={styles.container}>
      {categories?.length ? categories.map((category, i) => {
        if (category.blogs?.length > 0) {
          return (
            <div className={styles.blogCard} key={i}>
              {(category?.link&&category?.link != '#') && <a href={category.link} target="_blank" className={styles.catHeading}>
                {category.title}
              </a>}
                {(!category?.link||category?.link != '#')&&<h2 className={styles.catHeading}>
                  {category.title}
                </h2>}
              <div className={styles.posts}>
                {category.blogs.length > 0 && category.blogs.map((post, index) => {
                  return (
                    <div className={styles.postListing} key={index}>
                      <div className={styles.postThumb} >
                      {post.link != '#' ?
                        <a href={post.link} target="_blank" className={styles.postTitle}>
                        <img src={post.thumb} alt={post.title} />
                        </a> : 
                        <img src={post.thumb} alt={post.title} />
                        }
                      </div>
                      <div className={styles.postTitle}>
                        {post.link != '#' ?
                          <a href={post.link} target="_blank" className={styles.postTitle}>
                            {post.title}
                          </a>
                          :
                          <>{post.title}</>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }
      }): <>No Blogs Found.</>}
    </div>
  )
}

export default Blogs