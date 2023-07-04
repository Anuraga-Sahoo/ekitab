import React from 'react'
import style from './../styles/Group.module.css'

const Group = ({ children }) => {
    return (
        <div className={style.card}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Group
