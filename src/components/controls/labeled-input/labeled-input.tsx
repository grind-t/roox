import React from "react";
import styles from "./labeled-input.module.scss";
import Input from "../input";

export default function LabeledInput() {
  return (
    <label>
      <span className={styles.label}>hello</span>
      <Input />
    </label>
  );
}
