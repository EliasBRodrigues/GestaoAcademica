import React from 'react'
import style from './style/input-button.module.css'
import { Button } from 'primereact/button'
const ButtonInterface = ({ size, label, icon, position }) => {
  return (
    <div>
      <Button size={size} icon={icon} iconPos={position} label={label} className={style.button_ux} />
    </div>
  )
}

export default ButtonInterface