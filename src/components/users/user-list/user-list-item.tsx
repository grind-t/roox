import React from "react";
import { Link } from "react-router-dom";
import styles from "./user-list-item.module.scss";

interface EntryProps {
  name: string;
  value: string;
}

function Entry({ name, value }: EntryProps) {
  return (
    <div>
      <dt className={styles.entryName}>{name}</dt>
      <dd className={styles.entryValue}>{value}</dd>
    </div>
  );
}

export default function UserListItem() {
  return (
    <li className={styles.container}>
      <dl className={styles.entryList}>
        <Entry name="ФИО" value="Иван Иванов" />
        <Entry name="город" value="Москва" />
        <Entry name="компания" value="ООО Пример" />
      </dl>
      <Link to="/profile" className={styles.profileLink}>
        Подробнее
      </Link>
    </li>
  );
}
