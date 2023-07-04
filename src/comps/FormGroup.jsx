import React from 'react'
import style from './styles/Form.module.css'

const Form = ({ children }) => {
  return (
    <div className={style.form_wrapper}>
      <form className={style.form}>
        {children}
      </form>
    </div>

  )
}

export default Form