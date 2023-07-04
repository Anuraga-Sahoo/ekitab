import React from 'react'
import styles from './styles/ScrollSnapX.module.css'

const ScrollSnapX = ({ children }) => {
  return (
    <div className={styles.scrollSnapX}>
        {children}
    </div>
  )
}

export default ScrollSnapX