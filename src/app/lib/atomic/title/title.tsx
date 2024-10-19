import React from 'react'
import styles from './title.module.scss';

interface TitleProps{
    children:string;
    style?: React.CSSProperties;
}

const Title = ({children,style}:TitleProps) => {
  return (
    <span className={styles.title} style={style} >{children}</span>
  )
}

export default Title