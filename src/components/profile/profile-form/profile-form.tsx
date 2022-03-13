import React from "react";
import LabeledInput from "../../controls/labeled-input";
import styles from "./profile-form.module.scss";

export default function ProfileForm() {
  return (
    <form className={styles.form}>
      <LabeledInput />
    </form>
  );
}
