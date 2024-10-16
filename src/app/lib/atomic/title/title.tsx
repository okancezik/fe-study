import React from 'react'
import style from './title.module.scss';

interface TitleProps{
    children:string;
}

const Title = ({children}:TitleProps) => {
  return (
    <span className={style.title}>{children}</span>
  )
}

export default Title