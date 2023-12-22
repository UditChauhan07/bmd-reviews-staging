import React from 'react'
import styles from './styles.module.css'

const Spinner = ({ className, size = 20, strokeWidth = 3,theme=null, ...props }) => {
  const configStyles = {
    borderWidth: `${strokeWidth}px`,
    height: `${size}px`,
    width: `${size}px`,
    borderTop: `5px solid ${theme}`
  }

  return <div className={`${styles.spinner} ${className}`} style={configStyles} />
}

export default Spinner