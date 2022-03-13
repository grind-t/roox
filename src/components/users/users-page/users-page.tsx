import React from "react";
import styles from "./users-page.module.scss";
import UserList from "../user-list";

export default function UsersPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Список пользователей</h1>
      </header>
      <main className={styles.main}>
        <UserList />
      </main>
    </div>
  );
}
