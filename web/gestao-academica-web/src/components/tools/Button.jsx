import React from 'react'
import style from './style/input-button.module.css'
import { Button } from 'primereact/button'
const ButtonLocal = ({ ...props }) => {
  return (
    <div>
      <Button {...props} className={style.button} />
    </div>
  )
}

export default ButtonLocal