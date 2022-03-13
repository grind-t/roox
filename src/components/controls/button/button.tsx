import React, { ReactNode } from "react";
import styles from "./button.module.scss";

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: ReactNode;
}

export default function Button({ type, className, children }: ButtonProps) {
  return (
    <button type={type} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}
