import { InputText } from 'primereact/inputtext';
import React from "react";
import style from "./style/input-button.module.css";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <div className={style.wrapper}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <img src="" alt="" className={style.icon}/>
       <InputText
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={style.input}/>
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};

export default Input;