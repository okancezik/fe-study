import React from 'react'
import styles from './submessage.module.scss'

interface SubmessageProps{
    children:string;
}

const Submessage = ({children}:SubmessageProps) => {
  return (
    <span className={styles.message}>{children}</span>
  )
}

export default Submessage