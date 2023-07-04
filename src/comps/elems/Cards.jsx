import React from 'react'
import styles from './../styles/Cards.module.css'

const Cards = ({children}) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}

export default Cards