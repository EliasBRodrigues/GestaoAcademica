import React from 'react'
import style from './style/input-button.module.css'
import { Button } from 'primereact/button'
const ButtonGeneral = ({ label, submit, click, styles }) => {
  return (
    <div>
      <Button style={styles} label={label} className={style.button} onSubmit={submit} onClick={click}/>
    </div>
  )
}

export default ButtonGeneral