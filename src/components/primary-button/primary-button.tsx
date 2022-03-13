import React, { ReactNode } from "react";
import styles from "./primary-button.module.scss";
import Button from "../controls/button";

export type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({
  className,
  children,
  ...rest
}: PrimaryButtonProps) {
  return (
    <Button className={`${styles.button} ${className}`} {...rest}>
      {children}
    </Button>
  );
}
