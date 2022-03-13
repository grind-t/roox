import React from "react";
import styles from "./profile-page.module.scss";
import PrimaryButton from "../../primary-button";
import ProfileForm from "../profile-form";

export default function ProfilePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Профиль пользователя</h1>
        <PrimaryButton>Редактировать</PrimaryButton>
      </header>
      <main className={styles.main}>
        <ProfileForm />
      </main>
    </div>
  );
}
