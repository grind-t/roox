import React, { useState } from "react";
import styles from "./profile-page.module.scss";
import ProfileForm from "../profile-form";
import "../../../styles/controls.scss";

export default function ProfilePage() {
  const [isReadOnly, setIsReadonly] = useState(true);

  const handleSubmit = (data: any) => {
    setIsReadonly(true);
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Профиль пользователя</h1>
        <button className="primaryButton" onClick={() => setIsReadonly(false)}>
          Редактировать
        </button>
      </header>
      <main className={styles.main}>
        <ProfileForm isReadOnly={isReadOnly} onSubmit={handleSubmit} />
      </main>
    </div>
  );
}
