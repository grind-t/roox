import React from "react";
import styles from "./user-list.module.scss";
import UserListItem from "./user-list-item";

export default function UserList() {
  return (
    <ul className={styles.container}>
      <UserListItem />
    </ul>
  );
}
