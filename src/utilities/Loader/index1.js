import React from 'react'
import styles from './styles.module.css'

const Spinner = ({ className, size = 20, strokeWidth = 3, ...props }) => {
  const configStyles = {
    borderWidth: `${strokeWidth}px`,
    height: `${size}px`,
    width: `${size}px`,
  }

  return <div className={`${styles.spinner} ${className}`} style={configStyles} />
}

export default Spinner