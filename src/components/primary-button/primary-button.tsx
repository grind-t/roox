import React, { ReactNode } from "react";
import styles from "./primary-button.module.scss";
import Button from "../controls/button";

export interface ActionButtonProps {
  className?: string;
  children?: ReactNode;
}

export default function ActionButton({
  className,
  children,
}: ActionButtonProps) {
  return (
    <Button className={`${styles.button} ${className}`}>{children}</Button>
  );
}
