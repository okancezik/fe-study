import React from 'react'
import styles from './submessage.module.scss'

interface SubmessageProps{
    children:string;
    style?: React.CSSProperties; // Dışarıdan inline stil verebilmek için
}

const Submessage = ({children,style}:SubmessageProps) => {
  return (
    <span className={styles.message} style={style}>{children}</span>
  )
}

export default Submessage