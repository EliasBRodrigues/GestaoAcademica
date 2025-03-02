import React from 'react'
import style from './style/input-button.module.css'
import { Button } from 'primereact/button'
const ButtonGeneral = ({ label, submit, click }) => {
  return (
    <div>
      <Button label={label} className={style.button} onSubmit={submit} onClick={click}/>
    </div>
  )
}

export default ButtonGeneral