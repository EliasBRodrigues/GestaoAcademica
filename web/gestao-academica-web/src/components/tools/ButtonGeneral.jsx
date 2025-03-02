import React from 'react'
import style from './style/input-button.module.css'
import { Button } from 'primereact/button'
const ButtonGeneral = ({ label }) => {
  return (
    <div>
      <Button label={label} className={style.button} />
    </div>
  )
}

export default ButtonGeneral