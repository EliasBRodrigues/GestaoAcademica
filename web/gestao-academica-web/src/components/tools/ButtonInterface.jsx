import React from 'react'
import styles from './style/input-button.module.css'
import { Button } from 'primereact/button'
const ButtonInterface = ({ style, size, label, icon, position, props }) => {
  return (
    <div>
      <Button style={style} size={size} icon={icon} iconPos={position} label={label} className={styles.button_ux} onClick={props}/>
    </div>
  )
}

export default ButtonInterface