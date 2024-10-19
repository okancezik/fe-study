import React from "react";
import styles from "./secondary-button.module.scss";

interface SecondaryButtonProps {
  children: JSX.Element | string;
  style?: React.CSSProperties;
  prefix?: string;
}

const SecondaryButton = ({children, style,prefix}: SecondaryButtonProps) => {
  return (
    <button className={styles.button} style={style} prefix={prefix}>
      {children}
    </button>
  );
};

export default SecondaryButton;
