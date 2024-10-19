import React from "react";
import styles from "./primary-button.module.scss";

interface PrimaryButtonProps {
  children: JSX.Element | string;
  style?: React.CSSProperties;
  prefix?: string;
}

const PrimaryButton = ({children, style,prefix}: PrimaryButtonProps) => {
  return (
    <button className={styles.button} style={style} prefix={prefix}>
      {children}
    </button>
  );
};

export default PrimaryButton;
